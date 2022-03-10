import React, { FC } from "react";
import { ICountry } from "../models/ICountry";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../routes/routes";
import { Box } from "@mui/material";
import { useAuth } from "./../hooks/useAuth";
import { toast } from "react-toastify";

interface IPropsCountryItem {
  country: ICountry;
}

const CountryItem: FC<IPropsCountryItem> = ({ country }) => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  const redirectToDetailPage = () => {
    isAuth
      ? navigate(`${RoutePaths.Country}/${country.name}`)
      : toast.error("Log in to your account!");
  };

  return (
    <Grid item xs={3}>
      <Card
        sx={{ maxWidth: 350, cursor: "pointer" }}
        onClick={redirectToDetailPage}
      >
        <CardMedia
          component="img"
          height="140"
          image={country.flag}
          alt={country.name}
        />
        <CardContent>
          <Box
            component="div"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {country.name}
              </Typography>
              <div>
                <Typography component="span" sx={{ fontWeight: "bold" }}>
                  Population:{" "}
                </Typography>
                <Typography component="span">{country.population}</Typography>
              </div>
              <div>
                <Typography component="span" sx={{ fontWeight: "bold" }}>
                  Region:{" "}
                </Typography>
                <Typography component="span">{country.region}</Typography>
              </div>
              <div>
                <Typography component="span" sx={{ fontWeight: "bold" }}>
                  Capital:{" "}
                </Typography>
                <Typography component="span">{country.capital}</Typography>
              </div>
            </div>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CountryItem;
