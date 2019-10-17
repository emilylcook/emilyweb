import React from 'react'
import { Typography, Grid, Divider } from '@material-ui/core'
import { makeStyles, darken } from '@material-ui/core/styles'

import WidthContainer from '../WidthContainer'

const useStyles = makeStyles(theme => ({
  box: {
    padding: 40
  },
  mainContent: {
    padding: '40px 50px',
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 5,
    minHeight: 500,
    [theme.breakpoints.down('sm')]: {
      padding: '15px 20px',
      paddingBottom: 5,
      paddingLeft: 0,
      paddingRight: 0
    }
  },
  top: {
    paddingRight: 50
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem'
    }
  },
  subTitle: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem'
    }
  },
  icon: {
    color: '#70b6c1',
    margin: '0 20px',
    width: 'auto',
    fontSize: '2rem',
    transition: '.5s all',
    '&:hover': {
      color: darken('#FFF', 0.25)
    },
    [theme.breakpoints.down('sm')]: {
      // width: 75,
      margin: 15,
      fontSize: '1.6rem'
      // marginB1.3ttom: 10
    }
  },
  divider: {
    width: 200,
    textAlign: 'center',
    margin: 'auto'
  },
  heading: {
    textAlign: 'center'
  },
  iconContainer: {
    marginTop: 20
  },
  dividerContainer: {
    marginTop: 20,
    marginBottom: 10
  }
}))

const AboutMe = () => {
  const classes = useStyles()

  return (
    <section id="aboutMe">
      <WidthContainer>
        <Grid container justify="center">
          <Grid xs={12} item>
            <Grid container justify="center" className={classes.box}>
              <Grid item xs={12} className={classes.heading}>
                <Typography gutterBottom variant="h3" className={classes.title}>
                  About Me
                </Typography>
                <Typography paragraph>
                  What I find remarkable is that this text has been the industry's standard dummy
                  text ever since some printer in the 1500s took a galley of type and scrambled it
                  to make a type specimen book; it has survived not only four centuries of
                  letter-by-letter resetting but even the leap into electronic typesetting,
                  essentially unchanged except for an occasional 'ing' or 'y' thrown in. It's ironic
                  that when the then-understood Latin was scrambled, it became as incomprehensible
                  as Greek; the phrase 'it's Greek to me' and 'greeking' have common semantic
                  roots!” (The editors published his letter in a correction headlined “Lorem
                  Oopsum”)
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.dividerContainer}>
                <Divider variant="middle" className={classes.divider} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </WidthContainer>
    </section>
  )
}

export default AboutMe
