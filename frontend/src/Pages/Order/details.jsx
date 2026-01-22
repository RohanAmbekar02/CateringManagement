import React, { useState } from "react";
import AddOrder from "./add-order";
import "./details.css"; 
import { useNavigate } from "react-router-dom";
export default function Details() {
  const [showAddOrder, setShowAddOrder] = useState(false); // state to toggle form
  const navigate = useNavigate();
  return (
    <div className="page shadow ml-5">


      <h2 className="page-title ml-2">Orders</h2>

      <div className="search-row">
        <div className="search-box ">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input placeholder="Search by customer name..." />
        </div>
        {/* Toggle AddOrder form */}
        <button className="add-btn" onClick={() => navigate("/add-order")}>
      +
    </button>  </div>

      {/* Render AddOrder form if showAddOrder is true */}
      {showAddOrder && (
        <div className="mt-3">
          <AddOrder />
          <button
            className="btn btn-secondary mt-2"
            onClick={() => setShowAddOrder(false)}
          >
            Close
          </button>
        </div>
      )}

      <div className="filters">
        <button className="filter active">All</button>
        <button className="filter">
          <i className="fa-sharp fa-solid fa-circle-check text-success"></i> Paid
        </button>
        <button className="filter">
          <i className="fa-solid fa-clock text-warning"></i> Pending
        </button>
      </div>

      {["धुमताळी", "कडवडी", "नवत तळी"].map((place, i) => (
        <div className="order-card shadow" key={i}>
          <div>
            <div className="order-title">🔒 मुख्याध्यापक, कि. प. प. शाळा, पुणे</div>
            <div className="green">
              ₹ Total amount: ₹ {i === 2 ? "6500.00" : i === 1 ? "4950.00" : "4990.00"}
            </div>
            <div className="red">
              ₹ Remaining amount: ₹ {i === 2 ? "6500.00" : i === 1 ? "4950.00" : "4990.00"}
            </div>
          </div>



          <div className="actions">
            <span className="pending-btn">Pending</span>

            <button className="icon blue mt-5 book-icon">
              <i className="fa-solid fa-book text-primary"></i>
            </button>

            <button className="icon teal mt-5 text-success phone-icon"><i class="fa-solid fa-phone"></i></button>

            <button className="icon red mt-5 delect-icon">
              <i className="fa-solid fa-trash"></i>
            </button>

            <button className="icon sky mt-5 text-primary pencil-icon"><i class="fa-solid fa-pencil"></i></button>

            <span className="gray mt-5">. . .</span>
          </div>


        </div>
      ))}
    </div>
  );
}
