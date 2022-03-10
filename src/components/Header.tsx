import React, {FC, useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SimpleModal from "./Modal";

const Header: FC = () => {
  const [openLogIn,setOpenLogIn] = useState<boolean>(false)
  const [openSignUp,setOpenSignUp] = useState<boolean>(false)

  const handleOpenLogIn = () => setOpenLogIn(true);
  const handleCloseLogIn = () => setOpenLogIn(false);

  const handleOpenSignUp = () => setOpenSignUp(true);
  const handleCloseSignUp = () => setOpenSignUp(false);

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
          <Button color="inherit" sx={{ color: "black" }} onClick={handleOpenLogIn}>
            Login
          </Button>
          <Button color="inherit" sx={{ color: "black" }} onClick={handleOpenSignUp}>
            Sigh up
          </Button>
        </Toolbar>
      </AppBar>
      <SimpleModal handleClose={handleCloseLogIn} isOpen={openLogIn}><div>LogIn</div></SimpleModal>
      <SimpleModal handleClose={handleCloseSignUp} isOpen={openSignUp}><div>SignUp</div></SimpleModal>
    </Box>
  );
};

export default Header;
