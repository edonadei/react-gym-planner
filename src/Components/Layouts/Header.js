import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export default class Header extends Component {
    render() {
        return (
            <AppBar position="static">
            <Toolbar>
              <Typography variant="h5" color="inherit" >
                Exercices
              </Typography>
            </Toolbar>
          </AppBar>
        )
    }
}
