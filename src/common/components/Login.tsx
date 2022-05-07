import { Button, Grid, TextField, Typography } from "@mui/material";

export const Login = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "auto",
        height: "100vh",
        background: "#0f1626",
      }}
    >
      <Grid
        container
        item
        direction={"column"}
        sx={{
          background: "#f5f5f5",
          paddingY: "40px",
          paddingX: "60px",
          borderRadius: "10px",
          maxWidth: "600px",
        }}
      >
        <Grid item>
          <Typography
            variant="h2"
            sx={{ color: "#ff533d", fontWeight: 700, lineHeight: 0.7 }}
          >
            Welcome Back!
          </Typography>
        </Grid>
        <Grid item xs>
          <TextField
            id="username"
            label="Username"
            variant="standard"
            sx={{ marginTop: "20px", witdh: "100%" }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="password"
            label="Password"
            variant="standard"
            sx={{ marginTop: "20px" }}
          />
        </Grid>
        <Grid item sx={{ marginTop: "30px" }}>
          <Button variant="contained" color="error">
            Login
          </Button>
        </Grid>
        <Grid item sx={{ marginTop: "30px" }}>
          <Button variant="contained" color="error">
            Login
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
