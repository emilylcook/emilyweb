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
    marginBottom: 150
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
            {/* skills */}
            {/* <Skills /> */}
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
        </Grid>
      </WidthContainer>
    </div>
  )
}

export default Home
