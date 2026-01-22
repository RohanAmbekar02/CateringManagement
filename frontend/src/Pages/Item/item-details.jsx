import { useState, useMemo } from "react";
import {
  Box, Typography, TextField, IconButton, Button,
  Table, TableBody, TableCell, TableHead,
  TableRow, TableContainer, Paper,
  Stack, Chip, Select, MenuItem, useMediaQuery,
  Dialog, DialogContent, DialogTitle, InputAdornment
} from "@mui/material";
import { Search, Add, Edit, Delete, NavigateBefore, NavigateNext, Close } from "@mui/icons-material";
import AddItem from "./add-item"; 

/* ---------- DATA ---------- */
const itemsData = [
  { id: 1, name: "Mixing Bowl", price: 500 },
  { id: 2, name: "Frying Pan", price: 1200 },
  { id: 3, name: "Tandoor Oven", price: 8000 },
  { id: 4, name: "Cooking Pot", price: 1500 },
  { id: 5, name: "Rice Cooker", price: 2500 },
  { id: 6, name: "Salad Spinner", price: 700 },
  { id: 7, name: "Dessert Plate Set", price: 600 },
  { id: 8, name: "Ice Cream Scoop", price: 350 },
  { id: 9, name: "Rolling Pin", price: 400 },
  { id: 10, name: "Soup Ladle", price: 300 }
];

const PRIMARY = "#1f3a8a";
const PRIMARY_HOVER = "#1e40af";
const BORDER = "#e1e7f5";
const BG_LIGHT = "#f5f8ff";

export default function Items() {
  // मोबाइल डिटेक्शन (600px या उससे कम)
  const isMobile = useMediaQuery("(max-width:600px)");

  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [openAddItem, setOpenAddItem] = useState(false);

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const filteredItems = useMemo(
    () =>
      itemsData.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery]
  );

  const totalPages = Math.ceil(filteredItems.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + rowsPerPage);

  return (
    <Box sx={{ p: isMobile ? 2 : 3, bgcolor: "#fff", minHeight: "100vh" }}>
      {/* ---------- HEADER ---------- */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant={isMobile ? "h6" : "h5"} fontWeight={700} color={PRIMARY}>
          Items
        </Typography>

        <Button
          startIcon={<Add />}
          onClick={() => setOpenAddItem(true)}
          variant="contained"
          sx={{
            bgcolor: PRIMARY,
            textTransform: "none",
            borderRadius: "10px",
            px: isMobile ? 1.5 : 2.5,
            "&:hover": { bgcolor: PRIMARY_HOVER }
          }}
        >
          {isMobile ? "Add" : "Add Item"}
        </Button>
      </Box>

      {/* ---------- SEARCH ---------- */}
   <Box sx={{ display: "flex", gap: 1, mb: 3, maxWidth: isMobile ? "100%" : 780 }}>
  <TextField
    size="small"
    fullWidth
    placeholder="Search items"
    value={searchInput}
    onChange={(e) => {
      setSearchInput(e.target.value);
      setSearchQuery(e.target.value);
      setPage(1);
    }}
    sx={{ borderRadius: "10px" }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Search sx={{ color: "#9ca3af" }} />
        </InputAdornment>
      ),
      // --- CROSS BUTTON (CLEAR) वापस यहाँ है ---
      endAdornment: searchInput && (
        <InputAdornment position="end">
          <IconButton
            size="small"
            onClick={() => {
              setSearchInput("");
              setSearchQuery("");
              setPage(1);
            }}
            sx={{
              color: "#9ca3af",
              "&:hover": { color: PRIMARY_HOVER },
            }}
          >
            <Close fontSize="small" />
          </IconButton>
        </InputAdornment>
      )
    }}
  />
</Box>

      {/* ---------- CONTENT ---------- */}
      {!isMobile ? (
        <TableContainer component={Paper} sx={{ border: `1px solid ${BORDER}`, borderRadius: "14px" }}>
          <Table>
            <TableHead sx={{ bgcolor: BG_LIGHT }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>S.No.</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Price</TableCell>
                <TableCell sx={{ fontWeight: 700, textAlign: "center" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentItems.map((item, i) => (
                <TableRow key={item.id} hover>
                  <TableCell>{startIndex + i + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>₹{item.price}</TableCell>
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
        <Stack spacing={2}>
          {currentItems.map((item, i) => (
            <Box key={item.id} sx={{ border: `1px solid ${BORDER}`, borderRadius: "12px", p: 2, position: "relative" }}>
              <Typography variant="caption" color="text.secondary">#{startIndex + i + 1}</Typography>
              <Typography fontWeight={600} variant="subtitle1">{item.name}</Typography>
              <Typography color={PRIMARY} fontWeight={700}>₹{item.price}</Typography>
              <Box sx={{ position: "absolute", top: 10, right: 10 }}>
                 <IconButton size="small" sx={{ color: PRIMARY }}><Edit fontSize="small" /></IconButton>
                 <IconButton size="small" sx={{ color: "#dc2626" }}><Delete fontSize="small" /></IconButton>
              </Box>
            </Box>
          ))}
        </Stack>
      )}

      {/* ---------- PAGINATION ---------- */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 3, mb: 5 }}>
          <Typography variant="caption">Page {page} of {totalPages || 1}</Typography>
          <Stack direction="row" spacing={1}>
            <IconButton disabled={page === 1} onClick={() => setPage(p => p - 1)}><NavigateBefore /></IconButton>
            <IconButton disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}><NavigateNext /></IconButton>
          </Stack>
      </Box>

      {/* ---------- FIXED RESPONSIVE DIALOG ---------- */}
      <Dialog 
        open={openAddItem} 
        onClose={() => setOpenAddItem(false)}
        maxWidth="sm"
        fullWidth
        fullScreen={isMobile} // मोबाइल पर पूरी स्क्रीन लेगा ताकि बाहर न जाए
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", bgcolor: "#f2f2f2" }}>
          Add New Item
          <IconButton onClick={() => setOpenAddItem(false)}><Close /></IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: isMobile ? 2 : 3 }}>
          {/* isDialog={true} पास करना जरूरी है */}
          <AddItem onClose={() => setOpenAddItem(false)} isDialog={true} />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
