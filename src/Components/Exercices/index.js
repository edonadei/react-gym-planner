import React, { Component } from "react";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import { Grid, withStyles } from "@material-ui/core";

const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

export default function index() {
  return (
    <Grid container>
      <Grid item sm>
        <LeftPane styles={styles} />
      </Grid>
      <Grid item sm>
        <RightPane styles={styles} />
      </Grid>
    </Grid>
  );
}
