import React, { useState } from "react";
import "./add-item.css";
import Swal from "sweetalert2";

const AddItem = ({ onClose }) => {

  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //  Error Alert
    if (!itemName || !price) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill all fields",
        confirmButtonColor: "#d33",
      });
      return;
    }

    console.log({
      itemName,
      price,
    });

    
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Item added successfully!",
      confirmButtonColor: "#28a745",
    }).then(() => {
      // reset form after success
      setItemName("");
      setPrice("");

      if (onClose) onClose();
    });
  };

  const handleReset = () => {
    setItemName("");
    setPrice("");
  };

  return (
    <div className="overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h4 className="add-head p-2">Add New Item</h4>
          <span className="close-btn" onClick={onClose}>×</span>
        </div>

        <form className="modal-body" onSubmit={handleSubmit}>

          <input
            className="form-control"
            type="text"
            placeholder="Enter Name *"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />

          <input
            className="form-control"
            type="number"
            placeholder="Enter Price *"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <div className="btn-container">
            <button type="submit" className="btn-1 submit-btn">
              <p className="sub-text">Submit</p>
            </button>

            <button
              type="button"
              className="btn-1 reset-btn"
              onClick={handleReset}
            >
              <p className="sub-text">Reset</p>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddItem;
