import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import WidthContainer from './WidthContainer'
import WhoIAm from './sections/WhoIAm'
import ContactMe from './sections/ContactMe'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex' /* or inline-flex */,
    minHeight: '100%'
  },
  subTitle: {
    marginBottom: '15px'
  },
  content: { zIndex: 3 },
  section: {
    margin: '25px 0'
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes.content}>
      <WidthContainer className={classes.columnWrapper}>
        <Grid container>
          <Grid item xs={12} className={classes.section}>
            <WhoIAm />
          </Grid>
          <Grid item xs={12} className={classes.section}>
            <ContactMe />
          </Grid>
        </Grid>
      </WidthContainer>
    </div>
  )
}

export default Home
