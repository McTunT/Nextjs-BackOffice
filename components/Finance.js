import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { TextField, MenuItem, Grid } from "@material-ui/core";
import { payBy, listBank } from "../docs/data";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class Finance extends React.Component {
  state = {
    receipt: " ",
    payBy: " ",
    listBank: " "
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container spacing={24}>
          <Grid sm={12} md={6}>
            <TextField
              id="receipt"
              label="ใบเสร็จ"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange("receipt")}
              margin="normal"
              type="number"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid sm={12} md={6}>
            <TextField
              id="datereceipt"
              label="วันที่ออกใบเสร็จ"
              type="date"
              InputLabelProps={{
                shrink: true
              }}
              fullWidth
              margin="normal"
            />{" "}
          </Grid>
          <Grid sm={12} md={6}>
            <TextField
              select
              label="ชำระโดย"
              value={this.state.payBy}
              fullWidth
              onChange={this.handleChange("payBy")}
            >
              {payBy.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid sm={12} md={6}>
            <TextField
              select
              label="ธนาคาร"
              value={this.state.listBank}
              fullWidth
              onChange={this.handleChange("listBank")}
            >
              {listBank.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </form>
    );
  }
}

Finance.proptype = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Finance);
