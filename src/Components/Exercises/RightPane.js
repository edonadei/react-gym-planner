import React from "react";
import { Paper, Typography } from "@material-ui/core";
import Form from "./Form"

// We destructure the exercice object
export default ({
  styles,
  exercise: {
    id,
    title = "Welcome !",
    description = "Please select an exercice from the list on the left."
  },
  editMode,
  muscles,
  onEdit,
  endEdit
}) => {
  return (
    <Paper style={styles.Paper}>
      {editMode 
      ? <Form 
        muscles={muscles}
        onSubmit={onEdit}
        finishWithForm={endEdit} />
      : <React.Fragment />}
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
