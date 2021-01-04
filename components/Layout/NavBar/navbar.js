import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  Tooltip,
  Zoom,
} from "@material-ui/core";
import Link from "next/link";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AppsIcon from "@material-ui/icons/Apps";
import MenuIcon from "@material-ui/icons/Menu";
export default function NavBar({ navBarTitle, mainHeader }) {
  return (
    <Fragment>
      {mainHeader ? (
        <div
          style={{
            height: "70px",
            paddingRight: "30px",
            paddingLeft: "30px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#dc5df7",
            backgroundImage:
              "url(/images/header/shape-2_1.svg),url(/images/header/wave-bottom.svg),linear-gradient(59deg,#ff007f 24%,#7d00b9 44%)",
            backgroundPosition: "50% 50%,50% 100%,0 0",
            backgroundSize: "cover,contain,auto",
            backgroundRepeat: "repeat,no-repeat,repeat",
          }}
        >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ flexGrow: 1 }}
          >
            <Grid item xs={12}>
              <Grid container justify="center">
                <Grid item>
                  <Typography
                    variant="h4"
                    style={{
                      marginTop: "10px",
                      color: "white",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {navBarTitle}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div>
          <AppBar
            position="static"
            style={{
              backgroundColor: "#dc5df7",
              background: `linear-gradient(59deg,#ff007f 24%,#7d00b9 44%)`,
            }}
          >
            <Toolbar>
              <Link href="/">
                {/* <IconButton
                  edge="start"
                  // className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  style={{ backgroundColor: "white" }}
                > */}
                {/* <div style={{ padding: "10px" }}> */}
                <Tooltip
                  title="App Launcher"
                  TransitionComponent={Zoom}
                  placement="bottom-end"
                  arrow
                  style={{ fontSize: "35px" }}
                >
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    <AppsIcon color="inherit" />
                  </IconButton>
                </Tooltip>
                {/* </div> */}

                {/* </IconButton> */}
              </Link>
              <Typography variant="h6">{navBarTitle}</Typography>
            </Toolbar>
          </AppBar>
        </div>
      )}
    </Fragment>
  );
}
