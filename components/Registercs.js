import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import { Typography, Grid, TextField } from "@material-ui/core";
import Select from "react-select";
import { BranchAusiris, groupedOptions } from "../docs/data1";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
});

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};
const groupBadgeStyles = {
  backgroundColor: "#002984",
  borderRadius: "2em",
  color: "#fafafa",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center"
};

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

class Registercs extends React.Component {
  state = {
    name: "",
    single: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleChangeSelect = name => value => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <Select
              className={classes.textField}
              defaultValue={BranchAusiris[1]}
              options={groupedOptions}
              formatGroupLabel={formatGroupLabel}
              isClearable
              isSearchable
              name="Branch"
              onChange={this.handleChangeSelect("single")}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-name"
              label="Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange("name")}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-name"
              label="Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange("name")}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-name"
              label="Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange("name")}
              margin="normal"
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
    );
  }
}

Registercs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Registercs);
