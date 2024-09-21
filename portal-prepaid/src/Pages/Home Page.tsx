import BroadBandDetails from "../Components/BroadBandDetails";
import PayBill from "../Components/PayBill";
import CustomAppBar from "../Components/CustomAppBar";
import CustomNavigationBar from "../Components/CustomeNavBar";
import CustomeSwiper from "../Components/CustomeSwiper";
import UnderDevelopment from "../Components/UnderDevelopment";
import { useState } from "react";
import Box from "@mui/material/Box";

const backgroundStyle = {
  position: "absolute",
  width: "300px",
  height: "300px",
  backgroundImage: `url('src/assets/images/slt_background_image.png')`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  zIndex: -1,
};

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState("Broadband");

  const handleSelectTab = (item: string) => {
    setSelectedTab(item);
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            ...backgroundStyle,
            top: 0,
            left: 0,
          }}
        />
        <Box
          sx={{
            ...backgroundStyle,
            bottom: 0,
            right: 0,
          }}
        />
        <CustomAppBar />
        <CustomeSwiper />
        <CustomNavigationBar onSelectItem={handleSelectTab} />
        {selectedTab === "Broadband" && <BroadBandDetails />}
        {(selectedTab === "Mobile" ||
          selectedTab === "Peotv" ||
          selectedTab === "Promotion" ||
          selectedTab === "Bill" ||
          selectedTab === "Newservice" ||
          selectedTab === "Complaints" ||
          selectedTab === "Voice") && <UnderDevelopment />}
        <PayBill />
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            bottom: -10,
            zIndex: -1,
          }}
        ></Box>

        <Box
          sx={{
            position: "absolute",
            width: "100%",
            bottom: -10,
            zIndex: -1,
          }}
        >
          <img src="src/assets/images/footer_graphic.png" alt="Logo" />
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
