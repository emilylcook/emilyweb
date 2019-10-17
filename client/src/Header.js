import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Hidden from '@material-ui/core/Hidden'
import Toolbar from '@material-ui/core/Toolbar'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 64,
    zIndex: 100,
    backgroundColor: '#407982',
    opacity: 1,
    boxShadow: 'none',
    position: 'sticky',
    top: 0
  },
  bgImage: {
    height: 560,
    position: 'absolute',
    display: 'block',
    top: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    backgroundColor: 'rgba(36, 109, 117, .9)',
    boxShadow: '0px 10px 5px #EDEDED',

    [theme.breakpoints.down('sm')]: {
      height: 400
    }
  },
  nav: {
    position: 'absolute',
    zIndex: 3,
    width: '100%'
  },
  navItem: {
    marginRight: 20
  },
  navButton: {
    padding: '10px 15px',
    borderRadius: 5,
    transition: 'all 1s'
  },
  navContainerRootMobile: {
    padding: 0
  }
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <>
      <AppBar position="absolute" className={classes.root}>
        <div className={classes.nav}>
          <Hidden className={classes.desktop} only={['xs', 'sm']}>
            <Toolbar>
              <DesktopNav />
            </Toolbar>
          </Hidden>

          <Hidden only={['md', 'lg', 'xl']}>
            <Toolbar classes={{ root: classes.navContainerRootMobile }}>
              <MobileNav />
            </Toolbar>
          </Hidden>
        </div>
      </AppBar>
      <div className={classes.bgImage}></div>
    </>
  )
}
