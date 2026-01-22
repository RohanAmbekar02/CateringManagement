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

/* ---------- COLORS ---------- */
const PRIMARY = "#1f3a8a";
const PRIMARY_HOVER = "#1e40af";
const BORDER = "#e1e7f5";
const BG_LIGHT = "#f5f8ff";

export default function Items() {
  const isMobile = useMediaQuery("(max-width:768px)");

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
          Items
        </Typography>

        {/* ---------- ADD BUTTON ---------- */}
        <Button
          startIcon={<Add />}
          onClick={() => setOpenAddItem(true)}
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
          Add Item
        </Button>
      </Box>

      {/* ---------- SEARCH ---------- */}
      <Box sx={{ display: "flex", gap: 1, mb: 3, maxWidth: 780 }}>
        <TextField
          size="small"
          placeholder="Search items"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            setSearchQuery(e.target.value); // instant search
            setPage(1);
          }}
          sx={{ flex: 1, borderRadius: "10px" }}
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
                    <TableCell>
                      <Chip
                        label={`₹${item.price}`}
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

                {filteredItems.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} align="center">
                      No items found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          {/* ---------- PAGINATION ---------- */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 ,mb:5}}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="caption">Items per page:</Typography>
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
          {currentItems.map(item => (
            <Box
              key={item.id}
              sx={{
                border: `1px solid ${BORDER}`,
                borderRadius: "14px",
                p: 2
              }}
            >
              <Typography fontWeight={600}>{item.name}</Typography>
              <Typography color="text.secondary">
                ₹{item.price}
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

          {currentItems.length === 0 && (
            <Typography align="center">No items found</Typography>
          )}

          {/* Mobile Pagination */}
          {!isMobile || filteredItems.length <= rowsPerPage ? null : (
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
      <Dialog 
        open={openAddItem} 
        onClose={() => setOpenAddItem(false)}
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
          Add New Item
          <IconButton size="small" onClick={() => setOpenAddItem(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          <AddItem onClose={() => setOpenAddItem(false)} isDialog={true} />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
