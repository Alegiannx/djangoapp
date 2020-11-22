import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountBox from '@material-ui/icons/AccountBox';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './CustomAppBar.module.css'

export default function CustomAppBar() {

  return (
    <div className={styles.root}>
      <AppBar className={styles.pink} position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography className={styles.title} variant="h6">
            MyBlog
          </Typography>
          <IconButton color="inherit">
            <AccountBox />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
