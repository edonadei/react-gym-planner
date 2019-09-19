import React, { Component } from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  textField: {
    marginLeft: 20,
    marginRight: 20,
    width: 200
  }
});

export default withStyles(styles)(
  class extends Component {
    state = {
      title: "",
      description: "",
      muscles: ""
    };

    handleChange = name => ({ target: { value } }) => {
      this.setState({
          [name]: value
      });
    };

    handleSubmit = () => {
      const { exercise } = this.state;
      this.props.onSubmit({
        ...exercise,
        id: exercise.title.toLocaleLowerCase().replace(/ /g, "-")
      });
      this.setState({
        exercise: {
          title: "",
          description: "",
          muscles: ""
        }
      });
      this.handleToggle();
    };

    render() {
        const {title, description, muscles} = this.state;
        const { classes, muscles: categories } = this.props;
      return (
        <form>
          <TextField
            className={classes.textField}
            id="standard-name"
            label="Title"
            value={title}
            onChange={this.handleChange("title")}
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
            onChange={this.handleChange("description")}
            margin="normal"
          />
          <br />
          <br />
          <FormControl>
            <InputLabel className={classes.textField} htmlFor="muscles-simple">
              Muscles
            </InputLabel>
            <Select
              className={classes.textField}
              value={muscles}
              onChange={this.handleChange("muscles")}
              inputProps={{
                name: "Muscles",
                id: "muscles-simple"
              }}
            >
              {categories.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <Button color="primary" onClick={this.handleSubmit}>
              Create
        </Button>
        </form>
      );
    }
  }
);
