import { useState, useMemo, useEffect } from "react";
import './item-details.css'
import {
  Card, CardContent, CardActions, Typography, Stack,
  Box, TextField, InputAdornment, Button, IconButton, Tooltip,
  Select, MenuItem
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  Add as AddIcon,
  NavigateBefore,
  NavigateNext
} from "@mui/icons-material";

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
  { id: 10, name: "Soup Ladle", price: 300 },
  { id: 11, name: "Grill Pan", price: 1800 },
  { id: 12, name: "Steamer Basket", price: 900 }


];

export default function Items() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(12); 
  const [searchQuery, setSearchQuery] = useState("");
  const [cardHeight, setCardHeight] = useState(0);

  const filteredItems = useMemo(() =>
    itemsData.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  , [searchQuery]);

  const totalPages = Math.ceil(filteredItems.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + rowsPerPage);

  useEffect(() => {
    const updateCardHeight = () => {
      const headerHeight = 100; 
      const footerHeight = 80; 
      const gap = 16;

      
      const vw = window.innerWidth;
      let rows = 3; 
      if (vw < 600) rows = Math.ceil(rowsPerPage / 1); 
      else if (vw < 900) rows = Math.ceil(rowsPerPage / 2); 

      const availableHeight = window.innerHeight - headerHeight - footerHeight - (gap * (rows - 1));
      const height = Math.floor(availableHeight / rows);
      setCardHeight(height > 80 ? height : 80); // min height 80px
    };

    updateCardHeight();
    window.addEventListener("resize", updateCardHeight);
    return () => window.removeEventListener("resize", updateCardHeight);
  }, [rowsPerPage]);

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", p: 2, bgcolor: "#f4f6f8", boxSizing: "border-box" }}>

      {/* HEADER */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, color: "#1a237e", mb: 1 }}>Items</Typography>
          <TextField
            size="small"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ width: 260, bgcolor: "white" }}
            InputProps={{ startAdornment: (<InputAdornment position="start"><SearchIcon fontSize="small" /></InputAdornment>) }}
          />
        </Box>
        <Tooltip title="Add Item">
          <Button variant="contained" sx={{ width: 48, height: 48, borderRadius: "100%", bgcolor: "#1a237e", "&:hover": { bgcolor: "#0d1440" } }}>
            <AddIcon />
          </Button>
        </Tooltip>
      </Box>

      {/* GRID */}
      <Box
        sx={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: { xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          gridAutoRows: `${cardHeight}px`,
          gap: 2,
          px: "16px"
        }}
      >
        {currentItems.map(item => (
          <Card key={item.id} className="card">
            <CardContent sx={{ p: 0, pb: 1 }}>
              <Typography className="card-title" noWrap>{item.name}</Typography>
              <Typography className="card-price">₹{item.price}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end", p: 0 }}>
              <Button size="small" startIcon={<EditIcon sx={{ fontSize: 16 }} />} sx={{ fontSize: "12px", textTransform: "none", minWidth: "auto" }}>Edit</Button>
              <Button size="small" startIcon={<DeleteIcon sx={{ fontSize: 16 }} />} color="error" sx={{ fontSize: "12px", textTransform: "none", minWidth: "auto" }}>Delete</Button>
            </CardActions>
          </Card>
        ))}
      </Box>

      {/* FOOTER */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pt: 2, mt: 2, borderTop: "1px solid #e0e0e0", minHeight: "80px" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>Items per page:</Typography>
          <Select size="small" value={rowsPerPage} onChange={(e) => { setRowsPerPage(Number(e.target.value)); setPage(1); }}>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={24}>24</MenuItem>
          </Select>
        </Box>

        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="caption" sx={{ fontWeight: 500 }}>{page} / {totalPages || 1}</Typography>
          <IconButton size="small" disabled={page === 1} onClick={() => setPage(p => p - 1)} sx={{ border: '1px solid #ddd', p: 0.2 }}><NavigateBefore fontSize="small" /></IconButton>
          <IconButton size="small" disabled={page >= totalPages} onClick={() => setPage(p => p + 1)} sx={{ border: '1px solid #ddd', p: 0.2 }}><NavigateNext fontSize="small" /></IconButton>
        </Stack>
      </Box>
    </Box>
  )
}

