import React from "react";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import { Grid } from "@material-ui/core";

const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 },
  capitalize: { textTransform: 'capitalize'}
};

export default function index({exercise, exercises, category, onSelect}) {
  return (
    <Grid container>
      <Grid item sm>
        <LeftPane 
          styles={styles} 
          exercises={exercises}
          category={category}
          onSelect={onSelect} />
      </Grid>
      <Grid item sm>
        <RightPane 
          styles={styles}
          exercise={exercise} />
      </Grid>
    </Grid>
  );
}
