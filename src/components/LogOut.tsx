import React, { FC } from "react";
import { Typography, Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "./../hooks/useAppDispatch";
import { removeUser } from "../redux/slices/userSlice";
import { toast } from "react-toastify";
import { getAuth, signOut } from "firebase/auth";

interface IPropsLogOut {
  handleCloseLogOut: () => void;
}

const LogOut: FC<IPropsLogOut> = ({ handleCloseLogOut }) => {
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        toast.success("Log Out successful");
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
    dispatch(removeUser());
    handleCloseLogOut();
  };

  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          component="h3"
          sx={{ fontSize: "22px", fontWeight: "bold", marginBottom: "10px" }}
        >
          Log Out
        </Typography>
        <Button variant="text" onClick={handleCloseLogOut}>
          <CloseIcon />
        </Button>
      </Box>
      <Box>
        <Typography component="span">
          Are you sure you want to log out of your account?
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "center", mt: "20px" }}
      >
        <Button variant="contained" onClick={handleLogOut}>
          Log Out
        </Button>
      </Box>
    </>
  );
};

export default LogOut;
