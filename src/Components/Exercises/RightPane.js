import React from "react";
import {Paper, Typography} from '@material-ui/core'

export default ({styles}) => {
  return <Paper style={styles.Paper}>
    <Typography variant="h5" color="textSecondary">
      Welcome !
    </Typography>
    <Typography 
    variant="body1" 
    color="textSecondary"
    style={{marginTop: 20}}>
      Please select an exercice from the list on the left.
    </Typography>
  </Paper>;
}

