import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MaskedInput from "react-text-mask";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

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
  },
  idcard: {
    width: 300,
    marginLeft: 10,
    marginBottom: 15
  }
});

const TextMaskCustom = props => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        " ",
        /\d/
      ]}
      placeholderChar={"\u2000"}
    />
  );
};
TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
};

class Customerdata extends Component {
  state = {
    textmask: "",
    name: "Hello Next.js!"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const { textmask } = this.state;

    return (
      <Card className={classes.card}>
        <Typography gutterBottom variant="headline" component="h2">
          ข้อมูลลูกค้า
        </Typography>
        <FormControl className={classes.idcard}>
          <InputLabel htmlFor="Idcard">เลขที่บัตรประชาชน</InputLabel>
          <Input
            value={textmask}
            onChange={this.handleChange("textmask")}
            id="Idcard"
            inputComponent={TextMaskCustom}
            variant="outlined"
          />
        </FormControl>
        <Grid container spacing={24}>
          <Grid item xs={6} sm={6}>
            <TextField
              id="outlined-name"
              label="Name"
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
              defaultValue="2017-05-24"
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
              defaultValue="2017-05-24"
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
              defaultValue="2017-05-24"
              className={classes.datetime}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              id="outlined-email-input"
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
Customerdata.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Customerdata);
