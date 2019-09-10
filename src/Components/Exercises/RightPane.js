import React from "react";
import {Paper, Typography} from '@material-ui/core'

export default ({styles}) => {
  return <Paper style={styles.Paper}>
    <Typography variant="h6">
      Welcome !
    </Typography>
  </Paper>;
}

