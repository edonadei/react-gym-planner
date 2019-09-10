import React from "react";
import Paper from '@material-ui/core/Paper'
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";

export default ({ styles, exercises }) => {
  return <React.Fragment>
    <Paper style={styles.Paper}>
      {exercises.map(([group, exercises], i) =>
        <React.Fragment key={i}>
          <Typography
            variant="h6"
            style={styles.capitalize}>
            {group}
          </Typography>

          <List component="nav" aria-label="secondary mailbox folders">
            {exercises.map(({ title },i) =>
              <ListItem key={i} button>
              <ListItemText primary={title} />
            </ListItem>
            )}

          </List>
        </React.Fragment>
      )}
    </Paper>;
  </React.Fragment>


}
