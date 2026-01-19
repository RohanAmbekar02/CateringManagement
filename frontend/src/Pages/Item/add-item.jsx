import React, { useState } from "react";
import "./add-item.css";

const AddItem = ({ onClose }) => {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");

  const [errors, setErrors] = useState({
    itemName: "",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = { itemName: "", price: "" };
    let isValid = true;

    if (!itemName.trim()) {
      newErrors.itemName = "Item name is required";
      isValid = false;
    }

    if (!price) {
      newErrors.price = "Price is required";
      isValid = false;
    } else if (price <= 0) {
      newErrors.price = "Price must be greater than 0";
      isValid = false;
    }

    setErrors(newErrors);
    if (!isValid) return;

    console.log({ itemName, price });

    
    setItemName("");
    setPrice("");
    setErrors({ itemName: "", price: "" });

    if (onClose) onClose();
  };

  const handleReset = () => {
    setItemName("");
    setPrice("");
    setErrors({ itemName: "", price: "" });
  };

  return (
    <div className="overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h4 className="add-head p-2">Add New Item</h4>
          <span className="close-btn" onClick={onClose}>×</span>
        </div>

        <form className="modal-body" onSubmit={handleSubmit}>

          {/* Item Name */}
          <div className="field-wrapper">
            <input
              className="form-control mb-2"
              type="text"
              placeholder="Enter Name *"
              value={itemName}
              onChange={(e) => {
                setItemName(e.target.value);

                if (e.target.value.trim()) {
                  setErrors((prev) => ({ ...prev, itemName: "" }));
                }
              }}
            />

            {errors.itemName && (
              <span className="error-text">{errors.itemName}</span>
            )}
          </div>

          {/* Price */}
          <div className="field-wrapper">
            <input
              className="form-control mb-2 "
              type="number"
              placeholder="Enter Price *"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);

                if (e.target.value > 0) {
                  setErrors((prev) => ({ ...prev, price: "" }));
                }
              }}
            />

            {errors.price && (
              <span className="error-text">{errors.price}</span>
            )}
          </div>

          <div className="btn-container">
            <button type="submit" className="btn-1 submit-btn ">
              <p className="sub-text">Submit</p>
            </button>

            <button
              type="button"
              className="btn-1 reset-btn"
              onClick={handleReset}
            >
              <p className="sub-text ">Reset</p>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddItem;