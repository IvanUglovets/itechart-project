import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import CloseIcon from "@mui/icons-material/Close";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Typography, TextField, Box, Button } from "@mui/material";
import { useAppDispatch } from "./../hooks/useAppDispatch";
import { setUser } from "../redux/slices/userSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IPropsSignUp {
  handleCloseSignUp: () => void;
  handleOpenLogIn: () => void;
}

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

const SignUp: FC<IPropsSignUp> = ({ handleCloseSignUp, handleOpenLogIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput, e) => {
    e?.preventDefault();
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user: any = userCredential.user;
        dispatch(
          setUser({
            name: data.name,
            token: user.accessToken,
            email: user.email,
          })
        );
        toast("Are you registered!");
        handleCloseSignUp();
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  };

  const redirectToLogIn = () => {
    handleCloseSignUp();
    handleOpenLogIn();
  };

  return (
    <>
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
            Sign Up
          </Typography>
          <Button variant="text" onClick={handleCloseSignUp}>
            <CloseIcon />
          </Button>
        </Box>
        <Box component="div" sx={{ display: "flex", flexDirection: "column" }}>
          <Box component="div" sx={{ mb: "10px" }}>
            <TextField
              label="name"
              variant="standard"
              autoComplete="off"
              sx={{ width: "100%" }}
              {...register("name", {
                required: "Name is required",
                maxLength: 20,
              })}
            />
            {errors.name && (
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
                {errors.name.message}
              </Typography>
            )}
          </Box>
          <Box component="div" sx={{ mb: "10px" }}>
            <TextField
              label="email"
              variant="standard"
              autoComplete="off"
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
              label="password"
              autoComplete="off"
              variant="standard"
              sx={{ width: "100%" }}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Min length 6 letters" },
                maxLength: { value: 20, message: "Max length 20 letters" },
                pattern: {
                  value:
                    /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
                  message:
                    "Please enter a valid password. Password should include one lowercase, one uppercase, one number!",
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
          <Button variant="contained" type="submit">
            Sign Up
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
            <Typography component="span">Do you have an account?</Typography>
            <Button onClick={redirectToLogIn}>Log In</Button>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default SignUp;
