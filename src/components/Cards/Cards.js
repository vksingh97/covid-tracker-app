import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import React from "react";
import "./Cards.css";
import CountUp from "react-countup";

const Cards = (props) => {
  if (!props.data) {
    return "Loading...";
  }
  return (
    <div className="container">
      <div className="main-heading">
        <h1 className="mb-5 text-center">
          <span className="font-weight-bold">COVID</span> STATS
        </h1>
      </div>
      <Grid container spacing={3} justifyContent="center">
        <Grid item component={Card} xs={12} md={3} className="card infected">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={props.data[36].new_positive}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {" "}
              {new Date().toUTCString().slice(0, 16)}
            </Typography>
            <Typography variant="body2">Total Covid Cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="card deaths">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={props.data[36].new_death}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date().toUTCString().slice(0, 16)}
            </Typography>
            <Typography variant="body2">Number of Deaths till date</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="card recovered">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              {" "}
              <CountUp
                start={0}
                end={props.data[36].new_cured}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date().toUTCString().slice(0, 16)}
            </Typography>
            <Typography variant="body2">
              Number of Patients Recovered
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
