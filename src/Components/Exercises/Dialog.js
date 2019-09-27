import React, { Component } from "react";
import { Dialog, Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import PropTypes from "prop-types";
import Form from "./Form"
import {
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

export default class HigherOrderComponent extends Component {
  state = {
    open: false,
    exercise: {
      title: "",
      description: "",
      muscles: ""
    }
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const {
      open
    } = this.state,
    { muscles, onCreate } = this.props;
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
          <Form muscles={muscles} onSubmit={onCreate} finishWithForm={this.handleToggle} ></Form>
        </Dialog>
      </React.Fragment>
    );
  }
}

HigherOrderComponent.propTypes = {
  classes: PropTypes.object.isRequired
};
