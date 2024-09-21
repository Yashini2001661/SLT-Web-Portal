import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface QuickActionTileProps {
  image: string;
  title: string;
}

const QuickActionTile = ({ image, title }: QuickActionTileProps) => {
  return (
    <Box
      sx={{
        margin: "auto",
        my: 0.25,
        width: 80,
        height: 80,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "60%",
          height: "auto",
          maxHeight: 50,
          borderRadius: 1,
          objectFit: "contain",
        }}
      />
      <Typography
        variant="body2"
        sx={{ marginTop: 1, textAlign: "center", fontWeight: "bold" }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default QuickActionTile;
