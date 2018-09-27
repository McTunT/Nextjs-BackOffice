import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid, TextField } from "@material-ui/core";
import Select from "react-select";
import { BranchAusiris, groupedOptions } from "../docs/data1";
import NumberFormat from "react-number-format";
import Registercs from "./Registercs";

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

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  }
});

const NumberFormatIdcard = props => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      format="# #### ##### ## #"
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
    />
  );
};

NumberFormatIdcard.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

class Register extends Component {
  state = {
    textmask: "",
    name: "",
    single: "null",
    numberformat: "null"
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
      <React.Fragment>
        <form className={classes.container} noValidate autoComplete="off">
          <Paper className={classes.paper}>
            <Typography
              gutterBottom
              variant="headline"
              component="h2"
              align="center"
            >
              ข้อมูลลูกค้า
            </Typography>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="บัตรประชาชน"
                  onChange={this.handleChange("numberformat")}
                  id="Idcard"
                  InputProps={{
                    inputComponent: NumberFormatIdcard
                  }}
                  variant="filled"
                  fullWidth
                />
              </Grid>

              {/* พื้นหลังของ React-Select มองทะลุเห็น Label ของ TextField Material-ui 3.1.1, downshift,react-autosugest เป็นเหมือนกัน*/}
              <Grid item xs={12} sm={6}>
                <Select
                  defaultValue={BranchAusiris[1]}
                  options={groupedOptions}
                  formatGroupLabel={formatGroupLabel}
                  isClearable
                  isSearchable
                  name="Branch"
                  onChange={this.handleChangeSelect("single")}
                  variant="filled"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  id="name_thai"
                  label="ชื่อไทย"
                  value={this.state.name}
                  onBlur={this.handleChange}
                  onChange={this.handleChange("name")}
                  margin="normal"
                  variant="filled"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  id="name_eng"
                  label="ชื่ออังกฤษ"
                  margin="normal"
                  variant="filled"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} sm={4}>
                <TextField
                  id="birthday"
                  label="วันเกิด"
                  type="date"
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="filled"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} sm={4}>
                <TextField
                  id="Cardissue"
                  label="วันออกบัตร"
                  type="date"
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="filled"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} sm={4}>
                <TextField
                  id="Cardexpiration"
                  label="วันออกบัตร"
                  type="date"
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="filled"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="phone_number"
                  label="Numberphone"
                  value={this.state.age}
                  onChange={this.handleChange("age")}
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                  variant="filled"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="filled"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address"
                  label="ที่อยู่"
                  style={{ margin: 8 }}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="filled"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Paper>
        </form>
        <Registercs />
      </React.Fragment>
    );
  }
}
Register.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Register);
