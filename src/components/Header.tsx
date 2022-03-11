import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SimpleModal from "./Modal";
import SignUp from "./SignUp";
import LogOut from "./LogOut";
import { useAuth } from "./../hooks/useAuth";
import LogIn from "./LogIn";

const Header: FC = () => {
  const { isAuth, name } = useAuth();
  const navigate = useNavigate();

  const [openLogIn, setOpenLogIn] = useState<boolean>(false);
  const [openSignUp, setOpenSignUp] = useState<boolean>(false);
  const [openLogOut, setOpenLogOut] = useState<boolean>(false);

  const handleOpenLogIn = () => setOpenLogIn(true);
  const handleOpenSignUp = () => setOpenSignUp(true);
  const handleOpenLogOut = () => setOpenLogOut(true);

  const handleCloseLogIn = () => setOpenLogIn(false);
  const handleCloseSignUp = () => setOpenSignUp(false);
  const handleCloseLogOut = () => setOpenLogOut(false);

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "black", cursor: "pointer" }}
            onClick={redirectToHome}
          >
            Where in the world?
          </Typography>
          {isAuth ? (
            <>
              <Box>
                {name && (
                  <Typography
                    component="span"
                    sx={{
                      color: "black",
                      fontWeight: "500",
                      fontSize: " 0.875rem",
                    }}
                  >
                    {name}
                  </Typography>
                )}
              </Box>
              <Button
                color="inherit"
                sx={{ color: "black" }}
                onClick={handleOpenLogOut}
              >
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                sx={{ color: "black" }}
                onClick={handleOpenLogIn}
              >
                Login
              </Button>
              <Button
                color="inherit"
                sx={{ color: "black" }}
                onClick={handleOpenSignUp}
              >
                Sign up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <SimpleModal handleClose={handleCloseLogIn} isOpen={openLogIn}>
        <LogIn
          handleCloseLogIn={handleCloseLogIn}
          handleOpenSignUp={handleOpenSignUp}
        />
      </SimpleModal>
      <SimpleModal handleClose={handleCloseSignUp} isOpen={openSignUp}>
        <SignUp
          handleCloseSignUp={handleCloseSignUp}
          handleOpenLogIn={handleOpenLogIn}
        />
      </SimpleModal>
      <SimpleModal handleClose={handleCloseLogOut} isOpen={openLogOut}>
        <LogOut handleCloseLogOut={handleCloseLogOut} />
      </SimpleModal>
    </Box>
  );
};

export default Header;
