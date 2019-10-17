import React from 'react'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { HashLink as Link } from 'react-router-hash-link'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import { navItems } from './utils'

const useStyles = makeStyles(theme => ({
  menuIcon: {
    color: 'white',
    fontSize: '2.5rem !important'
  },
  list: {
    width: 300
  },
  paper: {
    // backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary.main
  },
  listItem: {
    textDecoration: 'none !important'
  },
  listItemText: {
    color: theme.palette.text.primary
  }
}))

export default function MobileNav() {
  const classes = useStyles()
  //   const commonClasses = useHeaderStyles()
  const [drawerOpenState, setDrawerOpenState] = React.useState(false)

  return (
    <>
      <Button
        aria-label="Navigation Menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={event => setDrawerOpenState(true)}
      >
        <MenuIcon className={classes.menuIcon} />
      </Button>
      <SwipeableDrawer
        data-testid="MobileNavDrawer"
        anchor="left"
        open={drawerOpenState}
        onClose={() => setDrawerOpenState(false)}
        onOpen={() => setDrawerOpenState(true)}
        classes={{ paper: classes.paper }}
      >
        <div
          className={classes.list}
          role="presentation"
          onClick={() => setDrawerOpenState(false)}
          onKeyDown={() => setDrawerOpenState(true)}
        >
          <List id="MobileNavItems">
            {/* main nav items */}
            {Object.entries(navItems).map(([key, { to, label }]) => (
              <ListItem button>
                <ListItemText>
                  <Link smooth to={to} className={classes.listItem}>
                    <Typography className={classes.listItemText}>{label}</Typography>
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
      <div className={classes.grow} />
    </>
  )
}
