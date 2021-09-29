import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Container,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
  },
  container: {
    width: "500px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    fontSize: "5px",
  },
  btn: {
    cursor: "pointer",
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className="appbar">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Container className={classes.container}>
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Shop
            </Typography>
            <Typography variant="h6" className={classes.title}>
              About
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Contact
            </Typography>
          </Container>
          <Typography color="inherit" className={classes.btn}>
            eKart-Fashion
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
