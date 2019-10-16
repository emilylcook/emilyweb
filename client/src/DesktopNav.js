import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { HashLink as Link } from 'react-router-hash-link'

const useStyles = makeStyles(theme => ({
  navButton: {
    padding: '10px 15px',
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
      <Grid item>
        <Button className={classes.navButton}>
          <Link smooth to="#whoIAm" className={classes.listItem}>
            About
          </Link>
        </Button>
      </Grid>
      <Grid item className={classes.navItem}>
        <Button className={classes.navButton}>
          <Link smooth to="#contactMe" className={classes.listItem}>
            Contact
          </Link>
        </Button>
      </Grid>
    </Grid>
  )
}
