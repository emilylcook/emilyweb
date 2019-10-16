import React from 'react'
// import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import WidthContainer from '../WidthContainer'

const useStyles = makeStyles(theme => ({
  box: {
    backgroundColor: '#fff',
    padding: '40px 50px',
    boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
    height: 500
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <section id="whoIAm">
      <WidthContainer>
        <div className={classes.box}>
          <Typography variant="h2">Hello, I'm Emily</Typography>
        </div>
      </WidthContainer>
    </section>
  )
}

export default Home
