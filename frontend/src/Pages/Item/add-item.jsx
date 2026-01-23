import React, { useState } from "react";
// Necessary imports for a professional UI
import { Box, Typography, Button, Stack, useMediaQuery, useTheme } from "@mui/material";
import { Inventory, CurrencyRupee, Save, RotateLeft } from "@mui/icons-material";

const AddItem = ({ onClose, isDialog = false }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState({ itemName: "", price: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { itemName: "", price: "" };
    let isValid = true;

    if (!itemName.trim()) {
      newErrors.itemName = "Item name is required";
      isValid = false;
    }

    if (!price || price <= 0) {
      newErrors.price = "Valid price is required";
      isValid = false;
    }

    setErrors(newErrors);
    if (!isValid) return;

    console.log({ itemName, price });
    if (onClose) onClose();
  };

  const handleReset = () => {
    setItemName("");
    setPrice("");
    setErrors({ itemName: "", price: "" });
  };

  // Modern Input Styling (Same as AddCustomer)
  const inputContainerStyle = (hasError) => ({
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f9fafb",
    border: `2px solid ${hasError ? "#ef4444" : "#e5e7eb"}`,
    borderRadius: "12px",
    transition: "all 0.3s ease",
    "&:focus-within": {
      borderColor: "#1f3a8a",
      backgroundColor: "#fff",
      boxShadow: "0 0 0 4px rgba(31, 58, 138, 0.1)",
    }
  });

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: "100%" }}>
      <Typography variant="body2" sx={{ mb: 3, color: "#6b7280" }}>
        Please enter the item details below.
      </Typography>

      {/* Input Section - Row for Desktop, Column for Mobile */}
      <Stack direction={isMobile ? "column" : "row"} spacing={3} sx={{ mb: 4 }}>
        
        {/* Item Name */}
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontSize: "14px", fontWeight: "600", mb: 1, color: "#374151" }}>
            Item Name *
          </Typography>
          <Box sx={inputContainerStyle(errors.itemName)}>
            <Inventory sx={{ ml: 1.5, color: "#9ca3af", fontSize: "20px" }} />
            <input
              type="text"
              placeholder="e.g. Mixing Bowl"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                padding: "12px",
                width: "100%",
                background: "transparent",
                fontSize: "15px",
                color: "#000"
              }}
            />
          </Box>
          {errors.itemName && (
            <Typography sx={{ color: "#ef4444", fontSize: "12px", mt: 0.5 }}>{errors.itemName}</Typography>
          )}
        </Box>

        {/* Item Price */}
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontSize: "14px", fontWeight: "600", mb: 1, color: "#374151" }}>
            Price (₹) *
          </Typography>
          <Box sx={inputContainerStyle(errors.price)}>
            <CurrencyRupee sx={{ ml: 1.5, color: "#9ca3af", fontSize: "20px" }} />
            <input
              type="number"
              placeholder="0.00"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                padding: "12px",
                width: "100%",
                background: "transparent",
                fontSize: "15px",
                color: "#000"
              }}
            />
          </Box>
          {errors.price && (
            <Typography sx={{ color: "#ef4444", fontSize: "12px", mt: 0.5 }}>{errors.price}</Typography>
          )}
        </Box>
      </Stack>

      {/* Buttons Section */}
      <Box sx={{ 
        display: "flex", 
        flexDirection: isMobile ? "column" : "row", 
        gap: 2, 
        justifyContent: "flex-end",
        mt: 4
      }}>
        <Button
          fullWidth={isMobile}
          onClick={handleReset}
          startIcon={<RotateLeft />}
          sx={{ 
            py: 1.5, px: 3, borderRadius: "10px", textTransform: "none", fontWeight: "600", color: "#4b5563",
            border: "1px solid #d1d5db", "&:hover": { bgcolor: "#f3f4f6" } 
          }}
        >
          Reset
        </Button>
        <Button
          fullWidth={isMobile}
          type="submit"
          variant="contained"
          startIcon={<Save />}
          sx={{ 
            py: 1.5, px: 5, borderRadius: "10px", textTransform: "none", fontWeight: "600", bgcolor: "#1f3a8a",
            boxShadow: "0 4px 6px rgba(31, 58, 138, 0.2)",
            "&:hover": { bgcolor: "#1e40af" } 
          }}
        >
          Save Item
        </Button>
      </Box>
    </Box>
  );
};

export default AddItem;
