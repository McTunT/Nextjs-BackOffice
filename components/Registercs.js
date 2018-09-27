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
import Select from "react-select";
import { BranchAusiris, groupedOptions, GetGold, BuySell } from "../docs/data";

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
    buysell: " ",
    single: " ",
    number: " ",
    package: " ",
    price: " ",
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

  handleChangeSelect = name => value => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Paper className={classes.paper}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Select
                defaultValue={BranchAusiris[1]}
                options={groupedOptions}
                formatGroupLabel={formatGroupLabel}
                isClearable
                isSearchable
                name="Branch"
                onChange={this.handleChangeSelect("single")}
                fullWidth
                variant="filled"
              />
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
                {BuySell.map(option => (
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
              <FormControl fullWidth>
                <InputLabel htmlFor="adornment-amount">ราคาต่อหน่วย</InputLabel>
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
              <TextField
                type="number"
                id="number"
                label="จำวนรวม"
                value={this.state.totalprice}
                onChange={this.handleChange("totalprice")}
                margin="normal"
                fullWidth
              />
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
                {GetGold.map(option => (
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
    );
  }
}

Registercs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Registercs);
