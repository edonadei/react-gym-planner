import React from "react";
import Paper from "@material-ui/core/Paper";
import { Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons"

export default ({ styles, exercises, category, onSelect, onDelete }) => {
  return (
    <React.Fragment>
      <Paper style={styles.Paper}>
        {exercises.map(
          ([group, exercises], i) =>
            !category || category === group // If the exercise has no category of if category equal to group we're looking at when we're mapping, we display it
              ? <React.Fragment key={i}>
                <Typography variant="h6" style={styles.capitalize}>
                  {group}
                </Typography>

                <List component="nav" aria-label="secondary mailbox folders">
                  {exercises.map(({ id, title }) =>
                    <ListItem key={id} button onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => onDelete(id)}>
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
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
