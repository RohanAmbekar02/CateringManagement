<<<<<<< HEAD
import React from "react";
import "./customer-details.css";
=======
import { useState, useMemo } from "react";
import {
  Box, Typography, TextField, IconButton, Button,
  Table, TableBody, TableCell, TableHead,
  TableRow, TableContainer, Paper,
  Stack, Chip, Select, MenuItem, useMediaQuery, 
  Dialog, DialogContent, DialogTitle, InputAdornment
} from "@mui/material";
import { Search, Add, Edit, Delete, NavigateBefore, NavigateNext, Close } from "@mui/icons-material";
import AddCustomer from "./AddCustomer";

/* ---------- DATA ---------- */
const customersData = [
  { id: 1, name: "Pooja Deshmukh", mobile: "9827345378", status: "Active" },
  { id: 2, name: "Rajesh Patil", mobile: "9871423897", status: "Active" },
  { id: 3, name: "Anjili Joshi", mobile: "9356829017", status: "Inactive" },
  { id: 4, name: "Sachin Gupta", mobile: "9353682849", status: "Active" },
  { id: 5, name: "Priya Mishra", mobile: "9451822347", status: "Active" },
  { id: 6, name: "Neha Kulkarni", mobile: "9827345378", status: "Inactive" },
  { id: 7, name: "Nitin Mishra", mobile: "9827345378", status: "Active" },
  { id: 8, name: "Anjali Singh", mobile: "9876543210", status: "Active" },
  { id: 9, name: "Vikram Kumar", mobile: "9765432109", status: "Inactive" }
];
>>>>>>> dc9662b02d46f11f4990449ed7e3219542e2559c

const PRIMARY = "#1f3a8a";
const PRIMARY_HOVER = "#1e40af";
const BORDER = "#e1e7f5";
const BG_LIGHT = "#f5f8ff";

export default function Customers() {
  const isMobile = useMediaQuery("(max-width:600px)");

<<<<<<< HEAD


  const items = [
    { id: 1, name: "pooja Deshmukh", Number: 9827345378 },
    { id: 2, name: "Rajesh Patil", Number: 9871423897 },
    { id: 3, name: "Anjili joshi", Number: 9356829017 },
    { id: 4, name: "Sachin Gupta", Number: 9353682849 },
    { id: 5, name: "Priya Mishra", Number: 94518223471 },
    { id: 6, name: "pooja Deshmukh", Number: 9827345378 },
    { id: 7, name: "Neha Kulkani", Number: 9827345378 },
    { id: 8, name: " Nitin Mishara", Number: 9827345378 },
    { id: 9, name: "pooja Deshmukh", Number: 9827345378 },
=======
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [openAddCustomer, setOpenAddCustomer] = useState(false);

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);
>>>>>>> dc9662b02d46f11f4990449ed7e3219542e2559c

  const filteredCustomers = useMemo(
    () =>
      customersData.filter(customer =>
        customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.mobile.includes(searchQuery)
      ),
    [searchQuery]
  );

  const totalPages = Math.ceil(filteredCustomers.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const currentCustomers = filteredCustomers.slice(startIndex, startIndex + rowsPerPage);

  return (
<<<<<<< HEAD
    <div className="container-fluid mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="items-title m-0">Customers</h2>

        <button className="btn text-white btn-primary"   >
          + Add Customer
        </button>


      </div>

      {/* Search */}
      <div className="mb-3 d-flex">
        <input
          type="text"
          className="form-control w-100 mr-2"
          placeholder="Search Customers..."
        />
        <button className="btn  ms-2 btn-primary " >
          <i className="fas fa-search fs-5 text-white"></i>
=======
    <Box sx={{ p: isMobile ? 2 : 3, bgcolor: "#fff", minHeight: "100vh" }}>
      {/* ---------- HEADER ---------- */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant={isMobile ? "h6" : "h5"} fontWeight={700} color={PRIMARY}>
          Customers
        </Typography>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setOpenAddCustomer(true)}
          sx={{
            bgcolor: PRIMARY,
            textTransform: "none",
            borderRadius: "10px",
            fontSize: isMobile ? "0.8rem" : "0.9rem",
            "&:hover": { bgcolor: PRIMARY_HOVER }
          }}
        >
          {isMobile ? "Add" : "Add Customer"}
        </Button>
      </Box>

      {/* ---------- SEARCH WITH CROSS BUTTON ---------- */}
      <Box sx={{ mb: 3, maxWidth: isMobile ? "100%" : 500 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Search by name or mobile"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            setSearchQuery(e.target.value); // Instant search
            setPage(1);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "#9ca3af" }} />
              </InputAdornment>
            ),
            endAdornment: searchInput && (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => { setSearchInput(""); setSearchQuery(""); }}>
                  <Close fontSize="small" />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Box>
>>>>>>> dc9662b02d46f11f4990449ed7e3219542e2559c

      {/* ---------- CONTENT ---------- */}
      {!isMobile ? (
        <TableContainer component={Paper} sx={{ border: `1px solid ${BORDER}`, borderRadius: "14px" }}>
          <Table>
            <TableHead sx={{ bgcolor: BG_LIGHT }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>#</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Mobile</TableCell>
                <TableCell sx={{ fontWeight: 700, textAlign: "center" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentCustomers.map((customer, i) => (
                <TableRow key={customer.id} hover>
                  <TableCell>{startIndex + i + 1}</TableCell>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.mobile}</TableCell>
                  <TableCell align="center">
                    <IconButton sx={{ color: PRIMARY }}><Edit /></IconButton>
                    <IconButton sx={{ color: "#dc2626" }}><Delete /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        /* ---------- MOBILE CARDS ---------- */
        <Stack spacing={2}>
          {currentCustomers.map((customer, i) => (
            <Box key={customer.id} sx={{ border: `1px solid ${BORDER}`, borderRadius: "14px", p: 2, position: "relative" }}>
              <Typography variant="caption" color="text.secondary">#{startIndex + i + 1}</Typography>
              <Typography fontWeight={600}>{customer.name}</Typography>
              <Typography color="text.secondary" variant="body2">📱 {customer.mobile}</Typography>
              
              <Box sx={{ position: "absolute", top: 10, right: 10 }}>
                <IconButton size="small" sx={{ color: PRIMARY }}><Edit fontSize="small" /></IconButton>
                <IconButton size="small" sx={{ color: "#dc2626" }}><Delete fontSize="small" /></IconButton>
              </Box>
            </Box>
          ))}
        </Stack>
      )}

<<<<<<< HEAD
      {/* Table */}
      <div className="table-responsive ">
        <table className="table table-bordered align-middle table-striped ">
          <thead className="table-light">
            <tr>
              <th className="action-col">Actions</th>
              <th style={{ textAlign: "center" }}>Name</th>
              <th style={{ textAlign: "center" }} >Mo.Number</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="action-col ">
                  <div className="action-btns">
                    <button className="btn  btn-sm btn-outline-primary  ">
                      <FaEdit />
                    </button>
                    <button className="btn  btn-sm btn-outline-danger ">
                      <FaTrash />
                    </button>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.Number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
=======
      {/* ---------- PAGINATION ---------- */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 3, mb: 4 }}>
        {!isMobile && (
          <Select size="small" value={rowsPerPage} onChange={(e) => setRowsPerPage(Number(e.target.value))}>
            <MenuItem value={6}>6 Rows</MenuItem>
            <MenuItem value={12}>12 Rows</MenuItem>
          </Select>
        )}
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="caption">{page} / {totalPages || 1}</Typography>
          <IconButton size="small" disabled={page === 1} onClick={() => setPage(p => p - 1)}><NavigateBefore /></IconButton>
          <IconButton size="small" disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}><NavigateNext /></IconButton>
        </Stack>
      </Box>

      {/* ---------- RESPONSIVE DIALOG ---------- */}
      <Dialog 
        open={openAddCustomer} 
        onClose={() => setOpenAddCustomer(false)}
        fullWidth
        maxWidth="sm"
        fullScreen={isMobile}
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", bgcolor: "#f2f2f2" }}>
          Add New Customer
          <IconButton onClick={() => setOpenAddCustomer(false)}><Close /></IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: isMobile ? 2 : 3 }}>
          <AddCustomer onClose={() => setOpenAddCustomer(false)} isDialog={true} />
        </DialogContent>
      </Dialog>
    </Box>
>>>>>>> dc9662b02d46f11f4990449ed7e3219542e2559c
  );
}