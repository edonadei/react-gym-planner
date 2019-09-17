import React, { Component } from "react";
import { Dialog, Button, Fab, TextField, Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

const styles = theme => ({
  textField: {
    marginLeft: 20,
    marginRight: 20,
    width: 200,
  },
});

class HigherOrderComponent extends Component {
  state = {
    open: false,
    exercise: {
      title: '',
      description: '',
      muscles: ''
    }
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: value
      }
    }
    )
  }

  handleSubmit = () => {
    const { exercise } = this.state;
    this.props.onCreate({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
    });
    this.setState({
      exercise: {
        title: '',
        description: '',
        muscles: ''
      },
    })
    this.handleToggle();
  }

  render() {
    const { open, exercise: { title, description, muscles } } = this.state;
    const { classes, muscles: categories } = this.props;
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
          <form>
            <TextField
              className={classes.textField}
              id="standard-name"
              label="Title"
              value={title}
              onChange={this.handleChange('title')}
              margin="normal"
            />
            <br />
            <TextField
              className={classes.textField}
              id="standard-name"
              label="Description"
              multiline
              rows="4"
              value={description}
              onChange={this.handleChange('description')}
              margin="normal"
            />
            <br />
            <br />
            <FormControl>
              <InputLabel
                className={classes.textField}
                htmlFor="muscles-simple">
                Muscles
                </InputLabel>
              <Select
                className={classes.textField}
                value={muscles}
                onChange={this.handleChange('muscles')}
                inputProps={{
                  name: 'Muscles',
                  id: 'muscles-simple',
                }}
              >
                {categories.map(category =>
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                )}
              </Select>
            </FormControl>
          </form>
          <DialogActions>
            <Button
              color="primary"
              onClick={this.handleSubmit}>
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

HigherOrderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HigherOrderComponent);
