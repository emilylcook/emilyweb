import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import MenuIcon from '@material-ui/icons/Menu'

import BackgroundImage from './assets/background.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1
    minHeight: 0,
    zIndex: 3
  },
  bgImage: {
    height: 515,
    position: 'absolute',
    display: 'block',
    top: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    // backgroundImage: url(
    //   'https://rscard.px-lab.com/startuper/wp-content/uploads/sites/2/2016/02/rs-cover-2-2-1-1.jpg'
    // ),
    backgroundColor: 'rgba(36, 109, 117, .9)',
    boxShadow: '0px 10px 5px #EDEDED'
    // background: `url(${BackgroundImage}) center center no-repeat rgb(217, 217, 217)`,
    // '&::before': {
    //   content: '""',
    //   top: 0,
    //   left: 0,
    //   width: '100%',
    //   height: '100%',
    //   position: 'absolute',
    //   backgroundColor: 'rgba(44, 51, 64, 0.8)'
    // }
  },
  nav: {
    position: 'absolute',
    zIndex: 3,
    width: '100%'
  }
}))

// TODO
// mobile nav
// hover styles on buttons
// padding on buttons
// maybe make a nav show up over the top on scroll
// actually make links work

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    // <AppBar position="sticky" className={classes.root}>
    <AppBar position="absolute" className={classes.root}>
      <div className={classes.bgImage}></div>

      <div className={classes.nav}>
        <Toolbar>
          <Grid justify="flex-end" container spacing={24}>
            <Grid item>
              <Button href="#whoIAm" color="inherit">
                About
              </Button>
            </Grid>
            <Grid item>
              <Button color="inherit">Resume</Button>
            </Grid>
            <Grid item>
              <Button href="#contactMe" color="inherit">
                Contact
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </div>
    </AppBar>
  )
}
