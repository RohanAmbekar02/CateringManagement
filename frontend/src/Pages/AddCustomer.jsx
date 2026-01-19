import React, { useState } from "react";
import "./AddCustomer.css";
import Swal from "sweetalert2";


function AddCustomer({ closePopup }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  // const handleSubmit = () => {
  //   if (name === "" || phone === "") {
  //     setError("Please fill Name and Phone Number");
  //     return;
  //   }

  //   setError("");
  //   alert("Customer Added Successfully!");
  //   closePopup();
  //   setName("");
  //   setPhone("");
  // };
  const handleSubmit = () => {
  if (name === "" || phone === "") {
    Swal.fire("Error", "Please fill Name and Phone", "error");
    return;
  }

  Swal.fire("Success", "Customer Added Successfully", "success");

  closePopup();
  setName("");
  setPhone("");
};


  const handleReset = () => {
    setName("");
    setPhone("");
    setError("");
  };

  return (
    <div className="modal-bg">
      <div className="modal-box">
        <div className="modal-header">
          <h3>Add New Customer</h3>
          <span className="close-btn" onClick={closePopup}>×</span>
        </div>

        <div className="modal-body">
          <input
            type="text"
            placeholder="Enter Name *"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
          />

          <input
            type="text"
            placeholder="Enter Phone *"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setError("");
            }}
          />
        </div>

        
        {error && <p className="error-text">{error}</p>}

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
