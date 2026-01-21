<<<<<<< HEAD
import React from "react";

=======
import React, { useState } from "react";
>>>>>>> 33bf8c9f9bb5118e3fca24c285db3b7c0cba8d8b
import "./add-order.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function AddOrder() {
<<<<<<< HEAD
  return (
    <div className="container-fluid mt-3"> 
=======
  const [items, setItems] = useState([
    { id: 1, qty: 1, price: 0 }
  ]);

  const [paidAmount, setPaidAmount] = useState(0);

  const addItem = () => {
    setItems([...items, { id: Date.now(), qty: 1, price: 0 }]);
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

  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  const totalQty = items.reduce((sum, item) => sum + item.qty, 0);
  const unpaidAmount = subtotal - paidAmount;

  return (
    <div className="container-fluid mt-3">
>>>>>>> 33bf8c9f9bb5118e3fca24c285db3b7c0cba8d8b
      <div className="row">
        <div className="col-12 mb-3">
          <h4 className="border-bottom pb-2">Create Order</h4>
        </div>

        {/* Customer & Date */}
        <div className="col-12 mb-2">
          <div className="row g-3">
            <div className="col-md-6 col-12">
              <select className="form-select form-control">
                <option value="">Customer Name*</option>
                <option value="1">Customer</option>
                <option value="1">Customer</option>
              </select>
            </div>
            <div className="col-md-6 col-12">
              <input type="date" className="form-control" />
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="col-12 table-responsive">
          <table className="table item-table">
            <thead>
              <tr>
                <th>Action</th>
                <th>Sr No</th>
                <th>Item Name</th>
                <th>QTY</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
<<<<<<< HEAD
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
=======
              {items.map((item, index) => (
                <tr key={item.id}>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => deleteItem(item.id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                  <td>{index + 1}</td>
                  <td>
                    <select className="form-select form-select-sm form-control">
                      <option>Item 1</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control form-control-sm"
                      value={item.qty}
                      onChange={(e) =>
                        updateItem(item.id, "qty", Number(e.target.value))
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control form-control-sm"
                      value={item.price}
                      onChange={(e) =>
                        updateItem(item.id, "price", Number(e.target.value))
                      }
                    />
                  </td>
                  <td>₹ {(item.qty * item.price).toFixed(2)}</td>
                </tr>
              ))}
>>>>>>> 33bf8c9f9bb5118e3fca24c285db3b7c0cba8d8b
            </tbody>
          </table>
        </div>

        <div className="col-12 text-end">
<<<<<<< HEAD
          <button className="btn btn-primary mt-2">+ Add Item</button>
=======
          <button className="btn btn-primary mt-2"  onClick={addItem}>
            + Add Item
          </button>
>>>>>>> 33bf8c9f9bb5118e3fca24c285db3b7c0cba8d8b
        </div>

        {/* Summary */}
        <div className="col-12 mt-3 p-3 bg-light">
          <div className="d-flex justify-content-between fw-bold">
            <span>Subtotal (Qty: {totalQty})</span>
            <span>₹ {subtotal.toFixed(2)}</span>
          </div>
          
          <div className="d-flex justify-content-between align-items-center mt-3">
            <label className="fw-bold">Paid Amount</label>
<<<<<<< HEAD
            <input type="number" className="form-control w-50 w-md-25" defaultValue={0} />
=======
            <input
              type="number"
              className="form-control w-25"
              value={paidAmount}
              onChange={(e) => setPaidAmount(Number(e.target.value))}
            />
          </div>
           <div className="d-flex justify-content-between align-items-center mt-3">
            <label className="fw-bold">Paid Amount</label>
            <input
              type="number"
              className="form-control w-25"
              value={paidAmount}
              onChange={(e) => setPaidAmount(Number(e.target.value))}
            />
>>>>>>> 33bf8c9f9bb5118e3fca24c285db3b7c0cba8d8b
          </div>

          <div className="d-flex justify-content-between mt-3 text-danger fw-bold">
            <span>Unpaid Amount</span>
            <span>₹ {unpaidAmount.toFixed(2)}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="col-12 mt-4 mb-5">
          <div className="row g-2">
            <div className="col-6">
              <button className="btn btn-danger w-100">Reset</button>
            </div>
            <div className="col-6">
              <button className="btn btn-primary w-100">
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