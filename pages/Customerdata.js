import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const styles = {
  card: {
    maxWidth: 1000,
    marginLeft: 250,
    marginRight: 20,
    marginTop: 100,
    padding: 25
  },
  media: {
    height: 140
  }
};

const Customerdata = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Card className={classes.card}>
        <Typography gutterBottom variant="headline" component="h2">
          ข้อมูลลูกค้า
        </Typography>
        <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </Card>
    </React.Fragment>
  );
};

Customerdata.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Customerdata);
