import React, { useState, useEffect } from "react";
import axios from "axios";
import "./add-order.css";

function AddOrder() {
  const [customers, setCustomers] = useState([]);
  const [availableItems, setAvailableItems] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [items, setItems] = useState([{ id: Date.now(), itemId: "", qty: 1, price: 0 }]);
  const [paidAmount, setPaidAmount] = useState(0);

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [custRes, itemRes] = await axios.all([
          axios.get("http://localhost:5000/api/customers"),
          axios.get("http://localhost:5000/api/items")
        ]);
        setCustomers(custRes.data);
        setAvailableItems(itemRes.data);
      } catch (err) { 
        console.error("Error fetching data:", err); 
      }
    };
    fetchData();
  }, []);

  const addItem = () => setItems([...items, { id: Date.now(), itemId: "", qty: 1, price: 0 }]);
  const deleteItem = (id) => setItems(items.filter(item => item.id !== id));

   const handleItemSelect = (id, selectedId) => {
   
    const isDuplicate = items.find(item => item.itemId === selectedId && item.id !== id);

    if (isDuplicate) {
      alert("This item is already added. Please increase the quantity instead.");
    
      setItems(items.map(item => 
        item.id === id ? { ...item, itemId: "", price: 0, qty: 1 } : item
      ));
      return;
    }

    
    const product = availableItems.find(i => i._id === selectedId);
    setItems(items.map(item => 
      item.id === id ? { 
        ...item, 
        itemId: selectedId, 
        price: product ? (product.itemprice || product.price || 0) : 0 
      } : item
    ));
  };


  const updateItem = (id, field, value) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: Number(value) } : item));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.qty * item.price), 0);
  const totalQty = items.reduce((sum, item) => sum + item.qty, 0);

  
  const handleSubmit = async () => {
    if (!selectedCustomer) return alert("Please select a customer");
    if (!orderDate) return alert("Please select a date");
    if (items.some(i => !i.itemId)) return alert("Please select all items");

    try {
      const orderData = {
        customer: selectedCustomer, 
        date: orderDate,            
        items: items.map(i => ({
          itemId: i.itemId,
          qty: i.qty,
          price: i.price
        })),
        totalAmount: subtotal,
        paidAmount: Number(paidAmount)
      };
      
      await axios.post("http://localhost:5000/api/orders", orderData);
      alert("Order Saved Successfully! ✅");
      window.location.reload(); 
    } catch (err) {
      alert("Error saving order: " + (err.response?.data?.error || "Check backend console"));
      console.error("Submit Error:", err);
    }
  };

  return (
    <div className="container-fluid mt-3"> 
      <div className="row">
        <div className="col-12 mb-3">
          <h4 className="border-bottom pb-2">Create Order</h4>
        </div>

        <div className="col-12 mb-1">
          <div className="row g-3"> 
            <div className="col-md-6 col-12 mb-1">
             <select 
              className="form-select form-control" 
              value={selectedCustomer} 
              onChange={(e) => setSelectedCustomer(e.target.value)}
            >
              <option value="">Customer Name*</option>
              {customers.map((c) => (
                <option key={c._id} value={c._id}>
                  {}
                  {c.customer_name || c.name || "Unknown"} 
                </option>
              ))}
            </select>
            </div>
            <div className="col-md-6 col-12">
              <input type="date" className="form-control" value={orderDate} onChange={(e)=>setOrderDate(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="col-12 table-responsive">
          <table className="table item-table">
            <thead>
              <tr>
                <th>Action</th>
                <th>Sr No</th>
                <th style={{ minWidth: "150px" }}>Item Name</th>
                <th>QTY</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.id}>
                  <td>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteItem(item.id)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                  <td>{index + 1}</td>
                  <td>
                    <select 
                      className="form-control form-select-sm" 
                      value={item.itemId} 
                      onChange={(e) => handleItemSelect(item.id, e.target.value)}
                    >
                      <option value="">Select Item</option>
                      {availableItems.map(ai => (
                        <option key={ai._id} value={ai._id}>
                          {}
                          {ai.itemname || ai.name}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td><input type="number" className="form-control form-control-sm" value={item.qty} onChange={(e) => updateItem(item.id, "qty", e.target.value)} /></td>
                  <td><input type="number" className="form-control form-control-sm" value={item.price} onChange={(e) => updateItem(item.id, "price", e.target.value)} /></td>
                  <td className="total-cell">₹ {item.qty * item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-12 text-end">
          <button className="btn btn-primary mt-2" onClick={addItem}>+ Add Item</button>
        </div>

        <div className="col-12 mt-3 p-3" style={{ backgroundColor: "whitesmoke" }}>
          <div className="d-flex justify-content-between fw-bold" style={{ fontSize: "14px" }}>
            <span>Subtotal (Qty: {totalQty})</span>
            <span>Subtotal (Price: ₹ {subtotal})</span>
          </div>
          
          <div className="d-flex justify-content-between align-items-center mt-3">
            <label className="fw-bold" style={{ fontSize: "14px" }}>Paid Amount</label>
            <input 
              type="number" 
              className="form-control w-50 w-md-25" 
              value={paidAmount} 
              onChange={(e)=>setPaidAmount(Number(e.target.value))} 
            />
          </div>

          <div className="d-flex justify-content-between mt-3 text-danger fw-bold" style={{ fontSize: "14px" }}>
            <span>Unpaid Amount</span>
            <span>₹ {subtotal - paidAmount}</span>
          </div>
        </div>

        <div className="col-12 mt-4 mb-5">
          <div className="row g-2">
            <div className="col-6">
              <button className="btn btn-danger w-100 py-2" onClick={() => window.location.reload()}>Reset</button>
            </div>
            <div className="col-6">
              <button 
                className="btn btn-primary w-100 py-2" 
                style={{ background: "linear-gradient(to right, #4f46e5, #7c3aed)" }}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddOrder;
