import React, { useState } from "react";
import "./AddCustomer.css";

const AddCustomer = ({ onClose }) => {
  const [customerName, setCustomerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const [errors, setErrors] = useState({
    customerName: "",
    mobileNumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = { customerName: "", mobileNumber: "" };
    let isValid = true;

    if (!customerName.trim()) {
      newErrors.customerName = "Customer name is required";
      isValid = false;
    }

    if (!mobileNumber) {
      newErrors.mobileNumber = "Mobile number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      newErrors.mobileNumber = "Mobile number must be 10 digits";
      isValid = false;
    }

    setErrors(newErrors);
    if (!isValid) return;

    console.log({ customerName, mobileNumber });

    setCustomerName("");
    setMobileNumber("");
    setErrors({ customerName: "", mobileNumber: "" });

    if (onClose) onClose();
  };

  const handleReset = () => {
    setCustomerName("");
    setMobileNumber("");
    setErrors({ customerName: "", mobileNumber: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", gap: "15px", mb: 2 }}>
        {/* Customer Name */}
        <div className="field-wrapper" style={{ flex: 1 }}>
          <input
            className="form-control mb-2 mt-3"
            type="text"
            placeholder="Enter Name *"
            value={customerName}
            onChange={(e) => {
              setCustomerName(e.target.value);
              if (e.target.value.trim()) {
                setErrors((prev) => ({ ...prev, customerName: "" }));
              }
            }}
            style={{ width: "100%" }}
          />
          {errors.customerName && (
            <span className="error-text">{errors.customerName}</span>
          )}
        </div>

        {/* Mobile Number */}
        <div className="field-wrapper" style={{ flex: 1 }}>
          <input
            className="form-control mb-2 mt-3"
            type="tel"
            placeholder="Enter Mobile *"
            value={mobileNumber}
            onChange={(e) => {
              setMobileNumber(e.target.value);
              if (/^\d{10}$/.test(e.target.value)) {
                setErrors((prev) => ({ ...prev, mobileNumber: "" }));
              }
            }}
            style={{ width: "100%" }}
          />
          {errors.mobileNumber && (
            <span className="error-text">{errors.mobileNumber}</span>
          )}
        </div>
      </div>

      <div style={{ display: "flex", gap: "15px", justifyContent: "center", marginTop: "20px" }}>
        <button type="submit" className="btn-1 submit-btn" style={{ width: "45%" }}>
          <p className="sub-text">Submit</p>
        </button>
        <button type="button" className="btn-1 reset-btn" onClick={handleReset} style={{ width: "45%" }}>
          <p className="sub-text">Reset</p>
        </button>
      </div>
    </form>
  );
};

export default AddCustomer;