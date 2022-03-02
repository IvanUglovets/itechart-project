import React, { FC } from "react";
import { ICountry } from "../models/ICountry";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../routes/routes";

interface IPropsCountryItem {
  country: ICountry;
}

const CountryItem: FC<IPropsCountryItem> = ({ country }) => {
  const navigate = useNavigate();

  const redirectToDetailPage = () => {
    navigate(`${RoutePaths.Country}/${country.name}`);
  };

  return (
    <Grid item xs={2}>
      <Card
        sx={{ maxWidth: 250, cursor: "pointer" }}
        onClick={redirectToDetailPage}
      >
        <CardMedia
          component="img"
          height="140"
          image={country.flag}
          alt={country.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {country.population}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CountryItem;
