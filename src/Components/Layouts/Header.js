import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CreateDialog from "../Exercises/Dialogs/Create";

export default ({ muscles, onExerciseCreate }) =>
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h5" color="inherit" style={{ flex: 1 }}>
        Exercices
      </Typography>
      <CreateDialog 
        muscles={muscles}
        onCreate={onExerciseCreate} />
    </Toolbar>
  </AppBar>

