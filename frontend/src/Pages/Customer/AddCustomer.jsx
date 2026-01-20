import React, { useState } from "react";
import "./AddCustomer.css";

function AddCustomer({ closePopup }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = () => {
    let valid = true;

    if (name === "") {
      setNameError("Please fill name");
      valid = false;
    }

    if (phone === "") {
      setPhoneError("Please fill contact number");
      valid = false;
    }

    if (!valid) return;

    alert("Customer Added Successfully!");
    closePopup();
    setName("");
    setPhone("");
    setNameError("");
    setPhoneError("");
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setNameError("");
    setPhoneError("");
  };

  return (
    <div className="modal-bg">
      <div className="modal-box">
        <div className="modal-header">
          <h3>Add New Customer</h3>
          <span className="close-btn" onClick={closePopup}>×</span>
        </div>

        <div className="modal-body">

          <div className="field">
            <input
              type="text"
              placeholder="Enter Name *"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError("");
              }}
            />
            {nameError && <p className="error-text">{nameError}</p>}
          </div>

          <div className="field">
            <input
              type="text"
              placeholder="Enter Phone *"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setPhoneError("");
              }}
            />
            {phoneError && <p className="error-text">{phoneError}</p>}
          </div>

        </div>

        <div className="modal-footer">
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>

          <button className="reset-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCustomer;