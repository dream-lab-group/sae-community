import { Box, TextField, Typography } from "@mui/material";

export const Login = () => {
  return (
    <Box
      sx={{
        width: "auto",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f1626",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "#f5f5f5",
          paddingY: "40px",
          paddingX: "60px",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h2" sx={{ color: "#ff533d", fontWeight: 700 }}>
          Welcome Back!
        </Typography>
        <TextField
          id="username"
          label="Username"
          variant="standard"
          sx={{ marginTop: "20px" }}
        />
        <TextField
          id="password"
          label="Password"
          variant="standard"
          sx={{ marginTop: "20px" }}
        />
      </Box>
    </Box>
  );
};
