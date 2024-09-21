import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Avatar, Box, IconButton, Input, Typography } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function CustomAppBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
              <img
                src="src/assets/images/sltmobitel_logo 1.png"
                alt="Logo"
                style={{ height: 60 }}
              />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                border: "none",
              }}
            >
              <Box
                sx={{
                  mr: 2,
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#D9D9D9",
                  borderRadius: 10,
                  paddingLeft: 1,
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                  },
                }}
              >
                <SearchIcon sx={{ color: "gray", mr: 1 }} />
                <Input
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search..."
                  disableUnderline
                  sx={{
                    backgroundColor: "transparent",
                    borderRadius: 1,
                    border: "none",
                  }}
                />
              </Box>
              <Typography sx={{ color: "black", mr: 2, fontSize: 20 }}>
                SLT Web Portal
              </Typography>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{
          color: "#1D2AE7",
          borderTop: "2px solid #1D2AE7",
          width: "100%",
          mx: "auto",
          my: 0,
        }}
      />
    </>
  );
}
export default CustomAppBar;
