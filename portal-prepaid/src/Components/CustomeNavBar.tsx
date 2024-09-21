import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface CustomNavigationBarProps {
  onSelectItem: (item: string) => void;
}

function CustomNavigationBar({ onSelectItem }: CustomNavigationBarProps) {
  const items = [
    "Broadband",
    "Peotv",
    "Voice",
    "Mobile",
    "Promotion",
    "Newservice",
    "Bill",
    "Complaints",
  ];

  const [selectedItem, setSelectedItem] = useState("Voice");

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    onSelectItem(item);
  };

  return (
    <Box
      sx={{
        margin: "auto",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "90%",
        border: "2px solid blue",
        borderRadius: 2,
        py: 0.5,
        backgroundColor: "white",
      }}
    >
      {items.map((item, index) => (
        <Button
          key={index}
          onClick={() => handleItemClick(item)}
          sx={{
            color: selectedItem === item ? "white" : "black",
            backgroundColor: selectedItem === item ? "#38E51A" : "white",
            borderRadius: 1,
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "lightgray",
            },
          }}
        >
          <Typography variant="body1">{item}</Typography>
        </Button>
      ))}
      <Button
        sx={{
          color: "black",
          backgroundColor: "white",
          borderRadius: 1,
          textTransform: "capitalize",
          "&:hover": {
            backgroundColor: "lightgray",
          },
        }}
      >
        <Typography variant="body1">more V</Typography>
      </Button>
    </Box>
  );
}

export default CustomNavigationBar;
