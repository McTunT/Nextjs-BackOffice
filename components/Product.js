import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  TextField,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  MenuItem
} from "@material-ui/core";
import { getGold, buySell } from "../docs/data";
import Selectbranch from "./Selectbranch";

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
      width: 1100,
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2,
      padding: theme.spacing.unit * 3
    }
  }
});

class Product extends React.Component {
  state = {
    buysell: " ",
    number: " ",
    package: " ",
    price: 0,
    premier: " ",
    totalprice: " ",
    getgold: " ",
    sellthrough: " "
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <form className={classes.container} noValidate autoComplete="off">
          <Paper className={classes.paper}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Selectbranch />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  select
                  label="ประเภท"
                  value={this.state.buysell}
                  onChange={this.handleChange("buysell")}
                  fullWidth
                  margin="normal"
                >
                  {buySell.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  type="number"
                  id="price"
                  label="จำนวน"
                  value={this.state.number}
                  onChange={this.handleChange("number")}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  type="number"
                  id="number"
                  label="แพ็กเกจ"
                  value={this.state.package}
                  onChange={this.handleChange("package")}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth margin="normal">
                  <InputLabel htmlFor="adornment-amount">
                    ราคาต่อหน่วย
                  </InputLabel>
                  <Input
                    id="price"
                    type="number"
                    margin="normal"
                    value={this.state.price}
                    onChange={this.handleChange("price")}
                    startAdornment={
                      <InputAdornment position="start">฿</InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  type="number"
                  id="price"
                  label="พรีเมียร์"
                  value={this.state.premier}
                  onChange={this.handleChange("premier")}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth margin="normal">
                  <InputLabel htmlFor="adornment-amount">ราคารวม</InputLabel>
                  <Input
                    id="totalprice"
                    type="number"
                    margin="normal"
                    priceprice
                    value={this.state.totalprice.price}
                    onChange={this.handleChange("totalprice")}
                    startAdornment={
                      <InputAdornment position="start">฿</InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  select
                  label="สถานที่รับ"
                  value={this.state.getgold}
                  onChange={this.handleChange("getgold")}
                  fullWidth
                  margin="normal"
                >
                  {getGold.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6} md={4}>
                <TextField
                  id="sellthrough"
                  label="ขายผ่าน"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TextField
                  id="datetime"
                  label="กำหนดวันรับสินค้า"
                  type="date"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  margin="normal"
                />
              </Grid>
            </Grid>
          </Paper>
        </form>
      </React.Fragment>
    );
  }
}

Product.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Product);
