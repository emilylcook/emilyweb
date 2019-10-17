import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { HashLink as Link } from 'react-router-hash-link'

import { navItems } from './utils'

const useStyles = makeStyles(theme => ({
  navButton: {
    padding: '10px 5px',
    borderRadius: 5,
    transition: 'all 1s'
  },
  listItem: {
    textDecoration: 'none !important',
    color: '#fff'
  }
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <Grid justify="flex-end" container spacing={2}>
      {Object.entries(navItems).map(([key, { to, label }]) => (
        <Grid key={key} item className={classes.navItem}>
          <Button className={classes.navButton}>
            <Link smooth to={to} className={classes.listItem}>
              {label}
            </Link>
          </Button>
        </Grid>
      ))}
    </Grid>
  )
}
