import React from "react";
<<<<<<< HEAD
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
=======

>>>>>>> 56ad6f9f0055f5ceb3bdad796527711e1b097b3c
import "./add-order.css";

function AddOrder() {

  const [items, setItems] = useState([
    { id: 1, qty: 1, price: 0 }
  ]);

  const addItem = () => {
    setItems([
      ...items,
      { id: Date.now(), qty: 1, price: 0 }
    ]);
  };

  const updateItem = (id, field, value) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Optional: calculate subtotal
  // const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  // const totalQty = items.reduce((sum, item) => sum + item.qty, 0);
  


  return (
<<<<<<< HEAD

    <div className="container-fluid mt-3"> {/* Added container-fluid for proper padding */}
=======
    <div className="container-fluid mt-3"> 
>>>>>>> 56ad6f9f0055f5ceb3bdad796527711e1b097b3c
      <div className="row">
            <div className="col-12 mb-3">
          <h4 className="border-bottom pb-2">Create Order</h4>
        </div>

      
        <div className="col-12 mb-1">
          <div className="row g-3"> 
            <div className="col-md-6 col-12 mb-1">
              <select className="form-select form-control">
                <option value="">Customer Name*</option>
                <option value="1">Customer</option>
              </select>
            </div>
            <div className="col-md-6 col-12">
              <input type="date" className="form-control" />
            </div>
          </div>
        </div>

        {/* Table: Wrap in table-responsive to fix mobile overflow */}
        <div className="col-12 table-responsive">
          <table className="table item-table">
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Sr</th>
                <th style={{ minWidth: "150px" }}>Item Name</th>
                <th>QTY</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
<<<<<<< HEAD
              {items.map((item, index) => (
                <tr key={item.id}>
                  <td><button className="delete-btn" onClick={() => deleteItem(item.id)}><i className="fa-solid fa-trash"></i></button></td>
                  <td>{index + 1}</td>
                  <td>
                    <select className="form-select form-select-sm">
                      <option>Item 1</option>
                    </select>
                  </td>
                  <td><input type="number" className="form-control form-control-sm"  value={item.qty} onChange={(e) => updateItem(item.id, "qty", Number(e.target.value))}
                    
/></td>
                  <td><input type="number" className="form-control form-control-sm"   value={item.price} onChange={(e) => updateItem(item.id, "price", Number(e.target.value))} 
                    
                 /></td>
                  <td className="total-cell">
                     ₹ {(item.qty * item.price).toFixed(2)}
                  </td>
                </tr>
                 ))}
=======
              <tr>
                <td><button className="delete-btn"><i className="fa-solid fa-trash"></i></button></td>
                <td>1</td>
                <td>
                  <select className="form-control form-select-sm">
                    <option>Item 1</option>
                  </select>
                </td>
                <td><input type="number" className="form-control form-control-sm" defaultValue={1} /></td>
                <td><input type="number" className="form-control form-control-sm" defaultValue={0} /></td>
                <td className="total-cell">₹ 0</td>
              </tr>
>>>>>>> 56ad6f9f0055f5ceb3bdad796527711e1b097b3c
            </tbody>
          </table>
        </div>

        <div className="col-12 text-end">
          <button className="btn btn-primary mt-2" onClick={addItem}>+ Add Item</button>
        </div>

        
        <div className="col-12 mt-3 p-3" style={{ backgroundColor: "whitesmoke" }}>
          <div className="d-flex justify-content-between fw-bold">
            <span>Subtotal (Qty: 1)</span>
            <span>Subtotal (Price: 0)</span>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <label className="fw-bold">Paid Amount</label>
            <input type="number" className="form-control w-25 w-md-25" defaultValue={0} />
          </div>
          

          <div className="d-flex justify-content-between mt-3 text-danger fw-bold">
            <span>Unpaid Amount</span>
            <span>₹ 0</span>
          </div>
        </div>

        <div className="col-12 mt-4 mb-5">
          <div className="row g-2">
            <div className="col-6">
              <button className="btn btn-danger w-100 py-2">Reset</button>
            </div>
            <div className="col-6">
              <button className="btn btn-primary w-100 py-2" style={{ background: "linear-gradient(to right, #4f46e5, #7c3aed)" }}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddOrder