import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import WidthContainer from './WidthContainer'
import { WhoIAm, ContactMe, Interests, AboutMe } from './sections'

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
    marginBottom: 200,
    [theme.breakpoints.down('xs')]: {
      // width: 75,

      marginBottom: 150
      // marginB1.3ttom: 10
    }
  },
  contactMe: {
    marginBottom: 50
  },
  aboutMe: {
    marginBottom: 150
  },
  whoIAm: {
    marginBottom: 50
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes.content}>
      <WidthContainer className={classes.columnWrapper}>
        <Grid container>
          <Grid item xs={12} className={clsx(classes.section, classes.whoIAm)}>
            <WhoIAm />
          </Grid>
          <Grid id="aboutMe" item xs={12} className={clsx(classes.section, classes.aboutMe)}>
            <AboutMe />
          </Grid>
          <Grid id="interests" item xs={12} className={clsx(classes.section, classes.interests)}>
            <Interests />
          </Grid>
          <Grid id="contactMe" item xs={12} className={clsx(classes.section, classes.contactMe)}>
            <ContactMe />
          </Grid>

          {/* TODO Work Expreience & Education timeline?? */}
        </Grid>
      </WidthContainer>
    </div>
  )
}

export default Home
