import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import MenuList from "./MenuList";

const NextBody = styled.body`
  margin-left: -8px;
  margin-right: -8px;
  margin-top: -8px;
`;

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const ButtonAppBar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <NextBody>
        <AppBar position="static">
          <Toolbar>
            <MenuList />
            <Typography
              variant="title"
              color="inherit"
              className={classes.grow}
            >
              NextBack
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </NextBody>
    </div>
  );
};

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
