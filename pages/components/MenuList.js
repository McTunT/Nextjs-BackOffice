import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Drawer from "@material-ui/core/Drawer";
import { MenuItem } from "@material-ui/core";

const ButtonList = styled.body`
  margin-left: -12px;
  margin-right: 20px;
  flexgorw: 1;
`;

const DrawerWidth = styled.body`
  width: 180px;
  height: 60px;
`;

class ButtonMenu extends Component {
  state = { open: false };

  handletoggle = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <ButtonList>
            <IconButton
              onClick={this.handletoggle("open", true)}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
          </ButtonList>

          <Drawer
            open={this.state.open}
            onClose={this.handletoggle("open", false)}
          >
            <DrawerWidth />
            <div
              tabIndex={0}
              role="IconButton"
              onClick={this.handletoggle("open", false)}
              onKeyDown={this.handletoggle("open", false)}
            >
              <MenuItem>Retail</MenuItem>
              <MenuItem>Data</MenuItem>
            </div>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default ButtonMenu;
