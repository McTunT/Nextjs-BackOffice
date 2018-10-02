import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid, TextField } from "@material-ui/core";
import NumberFormat from "react-number-format";
import Selectbranch from "./Selectbranch";

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
      marginBottom: "auto",
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

class CustomerInfo extends Component {
  state = {
    name: " ",
    single: " ",
    numberformat: " ",
    phone: " "
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
              <Grid item xs={12} md={6}>
                <TextField
                  label="บัตรประชาชน"
                  onChange={this.handleChange("numberformat")}
                  id="Idcard"
                  InputProps={{
                    inputComponent: NumberFormatIdcard
                  }}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Selectbranch />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  id="name_thai"
                  label="ชื่อไทย"
                  onChange={this.handleChange("name")}
                  margin="normal"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  id="name_eng"
                  label="ชื่ออังกฤษ"
                  margin="normal"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TextField
                  id="birthday"
                  label="วันเกิด"
                  type="date"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TextField
                  id="Cardissue"
                  label="วันออกบัตร"
                  type="date"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TextField
                  id="Cardexpiration"
                  label="วันออกบัตร"
                  type="date"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  margin="normal"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  id="phone_number"
                  label="เบอร์โทรศัพท์"
                  value={this.state.age}
                  onChange={this.handleChange("phone")}
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address"
                  label="ที่อยู่"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </form>
      </React.Fragment>
    );
  }
}
CustomerInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomerInfo);
