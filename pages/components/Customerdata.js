import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class Customerdata extends React.ComponentComponent {
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography variant="title" gutterBottom>
          ข้อมูลลูกค้า
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="Name"
              label="ชื่อ"
              onChange={this.handleChange("name")}
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Customerdata;
