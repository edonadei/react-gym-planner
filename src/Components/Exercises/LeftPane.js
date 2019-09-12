import React from "react";
import Paper from "@material-ui/core/Paper";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";

export default ({ styles, exercises, category, onSelect }) => {
  return (
    <React.Fragment>
      <Paper style={styles.Paper}>
        {exercises.map(
          ([group, exercises], i) =>
            !category || category === group // If the execice has no category of if category equal to group we're looking at when we're mapping, we display it
              ? <React.Fragment key={i}>
                  <Typography variant="h6" style={styles.capitalize}>
                    {group}
                  </Typography>

                  <List component="nav" aria-label="secondary mailbox folders">
                    {exercises.map(({ id, title }, i) =>
                      <ListItem key={i} button onClick={() => onSelect(id)}>
                        <ListItemText primary={title} />
                      </ListItem>
                    )}
                  </List>
                </React.Fragment>
              : null // Else we do not display it
        )}
      </Paper>
    </React.Fragment>
  );
};
