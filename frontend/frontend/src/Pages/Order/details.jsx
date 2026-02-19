import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  useMediaQuery
} from "@mui/material";
import {
  Search,
  Add,
  Close,
  Edit,
  Delete,
  Call
} from "@mui/icons-material";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import "./details.css";

/* ---------- COLORS (same as Items page) ---------- */
const PRIMARY = "#1f3a8a";
const PRIMARY_HOVER = "#1e40af";

export default function Details() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");

  /* ---------- STATES ---------- */
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  /* ---------- ORDERS DATA ---------- */
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

  /* ---------- SEARCH + FILTER ---------- */
  const filteredOrders = orders.filter(order => {
    const matchStatus = filter === "all" || order.status === filter;
    const matchSearch = order.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const capitalizeStatus = status =>
    status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <Box sx={{ p: isMobile ? 2 : 3, bgcolor: "#fff", minHeight: "100vh" }}>
      
      {/* ---------- HEADER ---------- */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={700}
          color={PRIMARY}
        >
          Orders
        </Typography>

        <Button
          startIcon={<Add />}
          variant="contained"
          onClick={() => navigate("/add-order")}
          sx={{
            bgcolor: PRIMARY,
            textTransform: "none",
            borderRadius: "10px",
            px: isMobile ? 1.5 : 2.5,
            "&:hover": { bgcolor: PRIMARY_HOVER },
          }}
        >
          {isMobile ? "Add" : "Add Order"}
        </Button>
      </Box>

      {/* ---------- SEARCH ---------- */}
      <Box sx={{ maxWidth: isMobile ? "100%" : 500, mb: 3 }}>
        <TextField
          size="small"
          fullWidth
          placeholder="Search by customer name"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            setSearch(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "#9ca3af" }} />
              </InputAdornment>
            ),
            endAdornment: searchInput && (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  onClick={() => {
                    setSearchInput("");
                    setSearch("");
                  }}
                >
                  <Close fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* ---------- FILTER BUTTONS ---------- */}
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
          Paid
        </button>

        <button
          className={`filter ${filter === "pending" ? "active" : ""}`}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
      </div>

      {/* ---------- ORDER CARDS ---------- */}
      {filteredOrders.length === 0 ? (
        <Typography sx={{ mt: 3 }}>No orders found</Typography>
      ) : (
        filteredOrders.map(order => (
          <div key={order.id} className="order-card shadow">
            <div>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButton size="small">
                  <PersonIcon />
                </IconButton>

                {/* SAME AS ITEM NAME */}
                <Typography variant="subtitle1" fontWeight={600}>
                  {order.name}
                </Typography>
              </Box>

              <Typography sx={{ color: "green", mt: 1 }}>
                ₹ Total amount: ₹ {order.total}.00
              </Typography>

              <Typography sx={{ color: "red" }}>
                ₹ Remaining amount: ₹ {order.remaining}.00
              </Typography>
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
    </Box>
  );
}
