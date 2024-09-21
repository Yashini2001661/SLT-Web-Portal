import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";
import dummyServiceDetails from "../Components/dummyServiceDetails";

function CustomSwiper() {
  const serviceDetails = dummyServiceDetails;

  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const visibleServices = serviceDetails.slice(
    visibleStartIndex,
    visibleStartIndex + 3
  );

  const handleSelectService = (index: number) => {
    setSelectedServiceIndex(index);
  };

  const handleNext = () => {
    if (selectedServiceIndex < serviceDetails.length - 1) {
      const nextIndex = selectedServiceIndex + 1;
      setSelectedServiceIndex(nextIndex);
      if (nextIndex >= visibleStartIndex + 3) {
        setVisibleStartIndex(visibleStartIndex + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (selectedServiceIndex > 0) {
      const prevIndex = selectedServiceIndex - 1;
      setSelectedServiceIndex(prevIndex);
      if (prevIndex < visibleStartIndex) {
        setVisibleStartIndex(visibleStartIndex - 1);
      }
    }
  };

  return (
    <Box
      sx={{
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
        backgroundColor: "white",
        p: 1,
      }}
    >
      <IconButton
        sx={{
          width: 40,
          height: 40,
        }}
        onClick={handlePrevious}
        disabled={selectedServiceIndex === 0}
      >
        <NavigateBeforeIcon sx={{ width: 50, height: 50, color: "#000000" }} />
      </IconButton>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexGrow: 1,
          gap: 10,
        }}
      >
        {visibleServices.map((item, index) => {
          const actualIndex = visibleStartIndex + index;
          const isSelected = actualIndex === selectedServiceIndex;

          return (
            <Box
              key={actualIndex}
              sx={{
                width: 200,
                height: isSelected ? 50 : 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `3px solid ${
                  item.serviceStatus === "Active" ? "#38E51A" : "#FF0000"
                }`,
                borderRadius: 5,
                cursor: "pointer",
                transform: isSelected ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.3s ease",
              }}
              onClick={() => handleSelectService(actualIndex)}
            >
              <Typography variant={isSelected ? "h5" : "h6"}>
                {item.serviceID}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <IconButton
        sx={{
          width: 40,
          height: 40,
        }}
        onClick={handleNext}
        disabled={selectedServiceIndex >= serviceDetails.length - 1}
      >
        <NavigateNextIcon sx={{ width: 50, height: 50, color: "#000000" }} />
      </IconButton>
    </Box>
  );
}

export default CustomSwiper;
