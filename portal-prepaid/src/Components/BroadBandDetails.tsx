import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2"; // Import Grid2
import Typography from "@mui/material/Typography";
import QuickActionTile from "./QuickActionTile";
import Button from "@mui/material/Button";
import { ArrowRightAltOutlined } from "@mui/icons-material";

const commonBoxStyles = {
  backgroundColor: "#000881",
  color: "#ffffff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 2,
  padding: 2,
  minHeight: "130px",
};

function BroadBandDetails() {
  return (
    <Box
      sx={{
        display: "flex",
        margin: "auto",
        width: "90%",
        py: 1,
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "stretch",
          width: "60%",
          backgroundColor: "#1D2AE71A",
          padding: 2,
          border: "2px solid #38E51A",
          borderRadius: 3,
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <Box sx={{ ...commonBoxStyles }}>
              <Typography sx={{ fontSize: 25, mb: 0.5 }}>
                Standard Data
              </Typography>
              <Typography variant="h6" sx={{ fontSize: 30 }}>
                37.95 GB{" "}
                <Typography
                  component="span"
                  variant="body1"
                  sx={{ fontSize: 25 }}
                >
                  Remaining
                </Typography>
              </Typography>
            </Box>
          </Grid2>
          <Grid2 size={6}>
            <Box sx={{ ...commonBoxStyles }}>
              <Typography sx={{ fontSize: 25, mb: 0.5 }}>Free Data</Typography>
              <Typography variant="h6" sx={{ fontSize: 30 }}>
                37.95 GB{" "}
                <Typography
                  component="span"
                  variant="body1"
                  sx={{ fontSize: 25 }}
                >
                  Remaining
                </Typography>
              </Typography>
            </Box>
          </Grid2>
          <Grid2 size={6}>
            <Box sx={{ ...commonBoxStyles }}>
              <Typography sx={{ fontSize: 25 }}>WEB FAMILY</Typography>
              <Typography sx={{ color: "#38E51A", fontSize: 25 }}>
                Active until 30/03/2024
              </Typography>
              <Button
                sx={{
                  display: "flex",
                  width: "80%",
                  justifyContent: "center",
                  backgroundColor: "#D9D9D9",
                  color: "#000000",
                  gap: 1,
                  "&:hover": {
                    backgroundColor: "#ffffff",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 15,
                    textTransform: "capitalize",
                    fontWeight: "bold",
                  }}
                >
                  Package Details
                </Typography>
                <ArrowRightAltOutlined />
              </Button>
            </Box>
          </Grid2>
          <Grid2 size={6}>
            <Box sx={{ ...commonBoxStyles, gap: 1 }}>
              <Typography sx={{ fontSize: 20 }}>Data Remaining</Typography>
              <Typography sx={{ fontSize: 20 }}>Standard N/A</Typography>
              <Button
                sx={{
                  display: "flex",
                  width: "80%",
                  justifyContent: "center",
                  backgroundColor: "#D9D9D9",
                  color: "#000000",
                  gap: 1,
                  "&:hover": {
                    backgroundColor: "#ffffff",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 15,
                    textTransform: "capitalize",
                    fontWeight: "bold",
                  }}
                >
                  More
                </Typography>
                <ArrowRightAltOutlined />
              </Button>
            </Box>
          </Grid2>
        </Grid2>
      </Box>

      <Box
        sx={{
          width: "40%",
          backgroundColor: "#1D2AE71A",
          padding: 1,
          border: "2px solid #38E51A",
          borderRadius: 3,
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2, textAlign: "center" }}>
          Quick Actions
        </Typography>
        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <QuickActionTile
              image="src/assets/images/Quick_action_images/dataPlans.png"
              title="Data Plans"
            />
          </Grid2>
          <Grid2 size={4}>
            <QuickActionTile
              image="src/assets/images/Quick_action_images/usage.png"
              title="Usage"
            />
          </Grid2>
          <Grid2 size={4}>
            <QuickActionTile
              image="src/assets/images/Quick_action_images/digitalLife.png"
              title="Digital Life"
            />
          </Grid2>
          <Grid2 size={4}>
            <QuickActionTile
              image="src/assets/images/Quick_action_images/hotDevices.png"
              title="Hot Devices"
            />
          </Grid2>
          <Grid2 size={4}>
            <QuickActionTile
              image="src/assets/images/Quick_action_images/newServices.png"
              title="New Services"
            />
          </Grid2>
          <Grid2 size={4}>
            <QuickActionTile
              image="src/assets/images/Quick_action_images/bill.png"
              title="Bill"
            />
          </Grid2>
          <Grid2 size={4}>
            <QuickActionTile
              image="src/assets/images/Quick_action_images/complaints.png"
              title="Complaints"
            />
          </Grid2>
          <Grid2 size={4}>
            <QuickActionTile
              image="src/assets/images/Quick_action_images/vas.png"
              title="VAS"
            />
          </Grid2>
          <Grid2 size={4}>
            <QuickActionTile
              image="src/assets/images/Quick_action_images/promotions.png"
              title="Promotions"
            />
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}

export default BroadBandDetails;
