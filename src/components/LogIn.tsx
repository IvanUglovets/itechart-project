import React, { FC } from "react";
import { Typography, TextField, Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm, SubmitHandler } from "react-hook-form";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useAppDispatch } from "./../hooks/useAppDispatch";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { setUser } from "../redux/slices/userSlice";

interface IPropsLogIn {
  handleCloseLogIn: () => void;
  handleOpenSignUp: () => void;
}

interface IFormInput {
  email: string;
  password: string;
}

const LogIn: FC<IPropsLogIn> = ({ handleCloseLogIn, handleOpenSignUp }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput, e) => {
    e?.preventDefault();

    const auth = getAuth();

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const { email, accessToken }: any = userCredential.user;
        dispatch(setUser({ email, token: accessToken, name: "" }));
        toast("You are logged in!");
        handleCloseLogIn();
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  };

  const redirectToLogSignUp = () => {
    handleCloseLogIn();
    handleOpenSignUp();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          Log In
        </Typography>
        <Button variant="text" onClick={handleCloseLogIn}>
          <CloseIcon />
        </Button>
      </Box>
      <Box component="div" sx={{ display: "flex", flexDirection: "column" }}>
        <Box component="div" sx={{ mb: "10px" }}>
          <TextField
            label="Email"
            variant="standard"
            sx={{ width: "100%" }}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
          />
        </Box>
        {errors.email && (
          <Typography
            component="div"
            sx={{
              color: "red",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <ErrorOutlineIcon />
            {errors.email.message}
          </Typography>
        )}
        <Box component="div" sx={{ mb: "30px", width: "100%" }}>
          <TextField
            type="password"
            label="Password"
            variant="standard"
            sx={{ width: "100%" }}
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Min length 6 letters" },
              maxLength: { value: 20, message: "Max length 20 letters" },
              pattern: {
                value:
                  /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
                message: "Please enter a valid password!",
              },
            })}
          />
          {errors.password && (
            <Typography
              component="div"
              sx={{
                color: "red",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <ErrorOutlineIcon />
              {errors.password.message}
            </Typography>
          )}
        </Box>
      </Box>
      <Button variant="contained" type="submit" sx={{ width: "100%" }}>
        Log In
      </Button>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "20px",
        }}
      >
        <Typography component="span">Don't have an account?</Typography>
        <Button onClick={redirectToLogSignUp}>Sign Up</Button>
      </Box>
    </form>
  );
};

export default LogIn;
