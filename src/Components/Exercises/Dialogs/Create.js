import React, { Component } from "react";
import { Dialog, Button, Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

export default class extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { open } = this.state;
    return (
      <React.Fragment>
        <Fab color="primary" onClick={this.handleToggle} size="medium">
          <Add />
        </Fab>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Create a New Exercice
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>
          </DialogContent>
          <form />
          <DialogActions>
            <Button color="primary">Create</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}
