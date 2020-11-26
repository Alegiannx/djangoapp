import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountBox from '@material-ui/icons/AccountBox';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import styles from './CustomAppBar.module.css'

export default function CustomAppBar() {

  return (
    <div className={styles.root}>
      <AppBar position="fixed" className=" primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={styles.title}>
            <Link to="/">
              <Typography title="MyBlog" variant="h6">
                MyBlog
              </Typography>
            </Link>
          </div>
          <Link to="/login">
            <IconButton title="Log In" color="inherit">
              <AccountBox />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div >
  );
}
