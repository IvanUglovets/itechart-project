import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Header: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "black" }}
          >
            Where in the world?
          </Typography>
          <Button color="inherit" sx={{ color: "black" }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
