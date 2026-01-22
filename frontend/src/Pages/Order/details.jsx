import React, { useState } from "react";
import "./details.css";
import { useNavigate } from "react-router-dom";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { Edit, Delete, Call } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";

export default function Details() {
  const navigate = useNavigate();

  //  STATES
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  //  ORDERS DATA
  const orders = [
    {
      id: 1,
      name: "Rohan Lakshman Dhorkule",
      total: 4990,
      remaining: 4990,
      status: "pending",
    },
    {
      id: 2,
      name: "Todmal Snehal Sachin",
      total: 4950,
      remaining: 0,
      status: "paid",
    },
    {
      id: 3,
      name: "Udage Pratiksha Subhash",
      total: 6500,
      remaining: 6500,
      status: "pending",
    },
    {
      id: 4,
      name: "Suse Vaishnavi Ambadas",
      total: 7200,
      remaining: 0,
      status: "paid",
    },
  ];

  //  SEARCH + FILTER LOGIC
  const filteredOrders = orders.filter(order => {
    const matchStatus =
      filter === "all" || order.status === filter;

    const matchSearch =
      order.name.toLowerCase().includes(search.toLowerCase());

    return matchStatus && matchSearch;
  });

  //  STATUS CAPITAL FUNCTION
  const capitalizeStatus = status =>
    status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <div className="page shadow container-fluid">
      <h2 className="page-title ml-2">Orders</h2>

      {/*  SEARCH */}
      <div className="search-row">
        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            placeholder="Search by customer name..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>


        <button
          className="add-item-btn"
          onClick={() => navigate("/add-order")}
        >
          <span className="plus">+</span>
          <span>Add Order</span>
        </button>

      </div>

      {/*  FILTER BUTTONS */}
      <div className="filters">
        <button
          className={`filter ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={`filter ${filter === "paid" ? "active" : ""}`}
          onClick={() => setFilter("paid")}
        >
          <i className="fa-solid fa-circle-check text-success"></i> Paid
        </button>

        <button
          className={`filter ${filter === "pending" ? "active" : ""}`}
          onClick={() => setFilter("pending")}
        >
          <i className="fa-solid fa-clock text-warning"></i> Pending
        </button>
      </div>

      {/*  ORDER CARDS */}
      {filteredOrders.length === 0 ? (
        <p style={{ marginTop: 20 }}>No orders found</p>
      ) : (
        filteredOrders.map(order => (
          <div key={order.id} className="order-card shadow">
            <div>
              <div className="order-title">
                <button className="icon user-icon">
                  <PersonIcon />
                </button>
                {order.name}
              </div>

              <div className="green">
                ₹ Total amount: ₹ {order.total}.00
              </div>

              <div className="red">
                ₹ Remaining amount: ₹ {order.remaining}.00
              </div>
            </div>

            <div className="actions">
              <button
                className={
                  order.status === "paid"
                    ? "status-btn paid"
                    : "status-btn pending"
                }
              >
                {capitalizeStatus(order.status)}
              </button>

              <button
                className="icon book-icon"
                onClick={() => navigate("/review")}
              >
                <ReceiptIcon />
              </button>

              <button className="icon phone-icon">
                <Call />
              </button>

              <button className="icon delete-icon">
                <Delete />
              </button>

              <button className="icon pencil-icon">
                <Edit />
              </button>

              <span className="dots">...</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
