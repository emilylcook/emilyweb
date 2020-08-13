import React from 'react'
import { Typography, Grid, Divider } from '@material-ui/core'
import { makeStyles, darken } from '@material-ui/core/styles'

import WidthContainer from '../WidthContainer'

const AboutMe = () => {
  const classes = useStyles()

  return (
    <section>
      <WidthContainer>
        <Grid container justify="center">
          <Grid xs={12} item>
            <Grid container justify="center" className={classes.box}>
              <Grid item xs={12} className={classes.heading}>
                <Typography gutterBottom variant="h3" className={classes.title}>
                  About Me
                </Typography>
                <Typography paragraph className={classes.mainContent}>
                  I was born and raised in the greater Seattle area and still reside there with my
                  two cats, Sterling and Nyla. I received my BS in Computer Science in 2013, and
                  have worked in the field happily since. I would describe myself as a competive
                  person, and I think my friends would tell you that is an understatement. My
                  competitive spirit was born while growing up in a family of six with a twin
                  sister, whom was naturally my best friend and worst enemy. I believe my competive
                  nature drives me to be a result-oriented person. I am always keeping task lists
                  and making sure to check that I and my team are on track to reach our goals. I
                  find excitement in the pressure of an approaching deadline, as that's when my
                  competitive nature to meet the deadline can really kick in. The three things I
                  value the most in others are accountability, efficency, and kindness. I believe
                  you should always keep your word by being honest to yourself and others about what
                  you can accomplish.
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

const useStyles = makeStyles(theme => ({
  box: {
    padding: 40,
    [theme.breakpoints.down('xs')]: {
      padding: 20
    }
  },
  mainContent: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left'
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
    width: 600,
    maxWidth: '80vw',
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

export default AboutMe
