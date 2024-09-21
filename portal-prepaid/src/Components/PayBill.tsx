import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const PayBill = () => {
  return (
    <>
      <Box
        sx={{
          margin: "auto",
          mb: 2,
          display: "flex",
          py: "10px",
          width: "90%",
          backgroundColor: "#1D2AE71A",
          border: "2px solid #38E51A",
          borderRadius: 3,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ mx: 5 }}>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: "bold",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          ></Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontSize: 30 }}></Typography>
          <Typography sx={{ fontSize: 30, color: "#38E51A" }}></Typography>
        </Box>
        <Button
          sx={{
            minWidth: 350,
            color: "#000881",
            border: "2px solid #000881",
            borderRadius: 1,
            textTransform: "capitalize",
            mx: 5,
            "&:hover": {
              backgroundColor: "#000881",
              color: "white",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Pay Your Bills
          </Typography>
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "auto",
          width: "90%",
          mb: 5,
        }}
      >
        <Button
          sx={{
            width: "45%",
            color: "#000881",
            border: "3px solid #000881",
            borderRadius: 2,
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#000881",
              color: "white",
            },
          }}
        >
          <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
            Extra GB
          </Typography>
        </Button>
        <Button
          sx={{
            width: "45%",
            color: "#000881",
            border: "3px solid #000881",
            borderRadius: 2,
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#000881",
              color: "white",
            },
          }}
        >
          <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
            Add-ons Data
          </Typography>
        </Button>
      </Box>
    </>
  );
};

export default PayBill;
