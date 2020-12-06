import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountBox from '@material-ui/icons/AccountBox';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useLocation } from "react-router-dom";
import SideMenu from './SideMenu'
import styles from './CustomAppBar.module.css'

export default function CustomAppBar() {

  const sideMenuEntries = [
    {
      text: "Log In",
      link: "/login"
    },
    {
      text: "See Posts",
      link: "/posts"
    },
    {
      text: "Comment"
    },
    {
      text: "Exit"
    }
  ];

  const location = useLocation();

  let [sideMenuHidden, setSideMenuHidden] = useState(true);

  useEffect(() => {
    setSideMenuHidden(true);
  }, [location]);

  let handleClick = () => setSideMenuHidden(!sideMenuHidden); //TODO i think this is bad practice

  return (
    <div className={styles.root}>
      <AppBar position="fixed" className=" primary">
        <SideMenu isHidden={sideMenuHidden} entries={sideMenuEntries} />
        <Toolbar>
          <IconButton onClick={handleClick} edge="start" color="inherit" aria-label="menu">
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
