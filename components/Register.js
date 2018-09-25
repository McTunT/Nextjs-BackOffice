import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Select from "react-select";
import { BranchAusiris, groupedOptions } from "../docs/data1";
import NumberFormat from "react-number-format";

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};
const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center"
};

const styles = theme => ({
  card: {
    maxWidth: 1000,
    marginLeft: 250,
    marginTop: 100,
    padding: 20,
    backgroundColor: "#FAFAFA"
  },
  textField: {
    width: 470,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  datetime: {
    width: 300,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  fulltext: {
    width: 980,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
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
    name: "Hello Next.js!",
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
    const { numberformat } = this.state;

    return (
      <Card className={classes.card}>
        <Typography gutterBottom variant="headline" component="h2">
          ข้อมูลลูกค้า
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              className={classes.textField}
              label="บัตรประชาชน"
              onChange={this.handleChange("numberformat")}
              id="Idcard"
              InputProps={{
                inputComponent: NumberFormatIdcard
              }}
            />
          </Grid>

          {/* พื้นหลัง Select มองทะลุเห็น Label ของ TextField*/}
          <Grid item xs={12} sm={6}>
            <Select
              className={classes.textField}
              defaultValue={BranchAusiris[1]}
              options={groupedOptions}
              formatGroupLabel={formatGroupLabel}
              isClearable
              isSearchable
              name="Branch"
              onChange={this.handleChangeSelect("single")}
              variant="standard"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              id="name_thai"
              label="ชื่อไทย"
              value={this.state.name}
              onBlur={this.handleChange}
              onChange={this.handleChange("name")}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              id="name_eng"
              label="ชื่ออังกฤษ"
              margin="normal"
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <TextField
              id="birthday"
              label="วันเกิด"
              variant="outlined"
              type="date"
              className={classes.datetime}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <TextField
              id="Cardissue"
              label="วันออกบัตร"
              variant="outlined"
              type="date"
              className={classes.datetime}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <TextField
              id="Cardexpiration"
              label="วันออกบัตร"
              variant="outlined"
              type="date"
              className={classes.datetime}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="phone_number"
              label="Numberphone"
              value={this.state.age}
              onChange={this.handleChange("age")}
              type="number"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="email"
              label="Email"
              className={classes.textField}
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
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
              className={classes.fulltext}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
        </Grid>
      </Card>
    );
  }
}
Register.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Register);
