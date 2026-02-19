
import { useState, useMemo } from "react";
import {
  Box, Typography, TextField, IconButton, Button,
  Table, TableBody, TableCell, TableHead,
  TableRow, TableContainer, Paper,
  Stack, Chip, Select, MenuItem, useMediaQuery, Dialog, DialogContent, DialogTitle
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

/* ---------- COLORS ---------- */
const PRIMARY = "#1f3a8a";
const PRIMARY_HOVER = "#1e40af";
const BORDER = "#e1e7f5";
const BG_LIGHT = "#f5f8ff";

export default function Customers() {
  const isMobile = useMediaQuery("(max-width:768px)");

  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [openAddCustomer, setOpenAddCustomer] = useState(false);

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);

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
    <Box sx={{ p: 3, bgcolor: "#fff", minHeight: "100vh" }}>
      {/* ---------- HEADER ---------- */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2
        }}
      >
        <Typography variant="h5" fontWeight={700} color={PRIMARY}>
          Customers
        </Typography>

        {/* ---------- ADD BUTTON ---------- */}
        <Button
          startIcon={<Add />}
          onClick={() => setOpenAddCustomer(true)}
          sx={{
            bgcolor: PRIMARY,
            color: "#fff",
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "10px",
            px: 2.5,
            "&:hover": {
              bgcolor: PRIMARY_HOVER,
              transform: "scale(1.04)"
            },
            transition: "0.25s"
          }}
        >
          Add Customer
        </Button>
      </Box>

      {/* ---------- SEARCH ---------- */}
      <Box sx={{ display: "flex", gap: 1, mb: 3,  maxWidth: 780 }}>
        <TextField
          size="small"
          placeholder="Search customers by name or mobile"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          sx={{
              flex: 1,
            borderRadius: "10px"
          }}
        />

        <IconButton
          onClick={() => { setSearchQuery(searchInput); setPage(1); }}
          sx={{
            flex: "0 0 5%",
            bgcolor: PRIMARY,
            color: "#fff",
            borderRadius: "10px",
            "&:hover": {
              bgcolor: PRIMARY_HOVER,
              transform: "scale(1.05)"
            },
            transition: "0.25s"
          }}
        >
          <Search />
        </IconButton>
      </Box>

      {/* ---------- CONTENT ---------- */}
      {!isMobile ? (
        <>
          <TableContainer
            component={Paper}
            sx={{
              border: `1px solid ${BORDER}`,
              borderRadius: "14px",
              overflowX: "hidden"
            }}
          >
            <Table sx={{ tableLayout: "fixed" }}>
              <TableHead sx={{ bgcolor: "#fff" }}>
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
                    <TableCell>
                      <Chip
                        label={customer.mobile}
                        size="small"
                        sx={{
                          bgcolor: BG_LIGHT,
                          color: PRIMARY,
                          fontWeight: 600
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <IconButton sx={{ color: PRIMARY }}>
                        <Edit />
                      </IconButton>
                      <IconButton sx={{ color: "#dc2626" }}>
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}

                {filteredCustomers.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} align="center">
                      No customers found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          {/* ---------- PAGINATION ---------- */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="caption">Customers per page:</Typography>
              <Select
                size="small"
                value={rowsPerPage}
                onChange={(e) => { setRowsPerPage(Number(e.target.value)); setPage(1); }}
              >
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={12}>12</MenuItem>
              </Select>
            </Box>

            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="caption">{page} / {totalPages || 1}</Typography>
              <IconButton size="small" disabled={page === 1} onClick={() => setPage(p => p - 1)}>
                <NavigateBefore />
              </IconButton>
              <IconButton size="small" disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>
                <NavigateNext />
              </IconButton>
            </Stack>
          </Box>
        </>
      ) : (
        /* ---------- MOBILE CARDS ---------- */
        <Stack spacing={2}>
          {currentCustomers.map(customer => (
            <Box
              key={customer.id}
              sx={{
                border: `1px solid ${BORDER}`,
                borderRadius: "14px",
                p: 2
              }}
            >
              <Typography fontWeight={600}>{customer.name}</Typography>
              <Typography color="text.secondary">
                📱 {customer.mobile}
              </Typography>

              <Stack direction="row" spacing={1} mt={1}>
                <IconButton sx={{ color: PRIMARY }}>
                  <Edit />
                </IconButton>
                <IconButton sx={{ color: "#dc2626" }}>
                  <Delete />
                </IconButton>
              </Stack>
            </Box>
          ))}

          {currentCustomers.length === 0 && (
            <Typography align="center">No customers found</Typography>
          )}

          {/* Mobile Pagination */}
          {!isMobile || filteredCustomers.length <= rowsPerPage ? null : (
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <IconButton size="small" disabled={page === 1} onClick={() => setPage(p => p - 1)}>
                <NavigateBefore />
              </IconButton>
              <Typography variant="caption">{page} / {totalPages || 1}</Typography>
              <IconButton size="small" disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>
                <NavigateNext />
              </IconButton>
            </Stack>
          )}
        </Stack>
      )}

      {/* ---------- ADD CUSTOMER MODAL ---------- */}
      <Dialog 
        open={openAddCustomer} 
        onClose={() => setOpenAddCustomer(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "8px",
            minWidth: "500px"
          }
        }}
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", bgcolor: "#f2f2f2" }}>
          Add New Customer
          <IconButton size="small" onClick={() => setOpenAddCustomer(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          <AddCustomer onClose={() => setOpenAddCustomer(false)} isDialog={true} />
        </DialogContent>
      </Dialog>
    </Box>
  );
}