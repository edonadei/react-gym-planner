import React from "react";
import { Paper, Typography } from "@material-ui/core";

// We destructure the exercice object
export default ({
  styles,
  exercise: {
    id,
    title = "Welcome !",
    description = "Please select an exercice from the list on the left."
  }
}) => {
  return (
    <Paper style={styles.Paper}>
      <Typography variant="h5" color="textSecondary">
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        style={{ marginTop: 20 }}
      >
        {description}
      </Typography>
    </Paper>
  );
};
