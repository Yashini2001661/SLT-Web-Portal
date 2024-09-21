import Box from "@mui/material/Box";

const UnderDevelopment = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          width: "90%",
          height: "47vh",
          py: 2,
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#1D2AE71A",
            padding: 2,
            border: "2px solid #38E51A",
            borderRadius: 3,
            gap: 2,
          }}
        >
          Page under development
        </Box>
      </Box>
    </>
  );
};

export default UnderDevelopment;
