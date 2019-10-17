import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import WidthContainer from './WidthContainer'
import { WhoIAm, ContactMe, Interests } from './sections'

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
    marginBottom: 250
  },
  interests: {
    // marginBottom: 300
  }
}))

// TODO
// make nav object in json that both navs pull rom
// :)

const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes.content}>
      <WidthContainer className={classes.columnWrapper}>
        <Grid container>
          <Grid item xs={12} className={classes.section}>
            <WhoIAm />
          </Grid>
          <Grid item xs={12} className={clsx(classes.section, classes.interests)}>
            <Interests />
            {/* /font awesome icons 
            // cat
            // ski
            // hike
            // run
            // soccer
            // laptop-code
            // tv? 
            // headphones - taylor swift */}
            {/* resume */}
            {/* cat photos (like tip blocks) */}
          </Grid>
          <Grid item xs={12} className={classes.section}>
            <ContactMe />
          </Grid>

          {/* TODO Work Expreience & Education timeline?? */}
        </Grid>
      </WidthContainer>
    </div>
  )
}

export default Home
