import React from 'react'
import { Icon, Typography, Grid, Avatar, Divider } from '@material-ui/core'
import { makeStyles, darken, lighten } from '@material-ui/core/styles'
import clsx from 'clsx'
import 'font-awesome/css/font-awesome.css'

import WidthContainer from '../WidthContainer'
import profilePhoto from '../assets/photo.jpg'

const useStyles = makeStyles(theme => ({
  box: {
    backgroundColor: '#fff',
    boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)'
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
  divider: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 3
  },
  title: {
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem'
    }
  },
  subTitle: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem'
    }
  },
  iconContainer: {
    margin: '5px 10px'
  },
  icon: {
    color: 'white',
    // margin: '0 10px',
    fontSize: '2rem',
    transition: '1s all',
    '&:hover': {
      color: darken('#FFF', 0.25)
    }
  },
  footer: {
    backgroundColor: '#70b6c1',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: 20,
    paddingTop: 7,
    paddingBottom: 5,
    alignItems: 'flex-end'
  },
  bold: {
    fontWeight: 500
  },
  italics: {
    fontStyle: 'italic',
    color: lighten(theme.palette.text.primary, 0.4)
  },
  avatar: {
    margin: 10,
    width: 370,
    height: 370,
    [theme.breakpoints.down('md')]: {
      width: 320,
      height: 320
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 20,
      width: 240,
      height: 240
    }
  },
  profilePhoto: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    display: 'flex'
  },
  aboutMe: {
    paddingTop: 50,
    paddingLeft: 40,
    [theme.breakpoints.down('xs')]: {
      paddingTop: 40
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 20,
      paddingTop: 20
    },

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  locationContainer: {
    display: 'flex',
    alignItems: 'bottom',
    alignContent: 'bottom',
    justifyContent: 'flex-end',
    paddingRight: 10,
    color: lighten(theme.palette.text.primary, 0.4),
    [theme.breakpoints.down('xs')]: {
      paddingTop: 40
    }
  },
  locationIcon: { marginRight: 5 },
  locationText: { paddingTop: 2 }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <section id="whoIAm">
      <WidthContainer>
        <Grid container className={classes.box}>
          {/* <div className={classes.box}> */}
          <Grid item xs={12}>
            <Grid container className={classes.mainContent}>
              <Grid item xs={12} md={5} className={classes.profilePhoto}>
                <Avatar alt="Emily Cook" src={profilePhoto} className={classes.avatar} />
              </Grid>
              <Grid item xs={12} md={7} className={classes.aboutMe}>
                <div className={classes.top}>
                  <Typography variant="h2" className={classes.title}>
                    Hello, I'm <span className={classes.bold}>Emily</span>.
                  </Typography>
                  <Typography variant="h5" className={classes.subTitle}>
                    <span className={classes.italics}>Software Developer</span>
                  </Typography>
                  <Divider variant="fullWidth" className={classes.divider} />
                  <Typography paragraph>
                    lalallalala cats and things and computers exploring apis
                  </Typography>
                </div>

                <div className={classes.locationContainer}>
                  <Icon className={clsx(classes.locationIcon, 'fa fa-home')} />{' '}
                  <Typography className={classes.locationText}>Seattle, WA</Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.footer}>
            {/* <Button> */}
            <a
              href="https://www.linkedin.com/in/emilylc/"
              className={classes.iconContainer}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon className={clsx(classes.icon, 'fa fa-linkedin')} />
            </a>
            <a
              href="https://www.instagram.com/fulminee/"
              className={classes.iconContainer}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon className={clsx(classes.icon, 'fa fa-instagram')} />
            </a>
            <a
              href="mailto:emilycookx@gmail.com"
              className={classes.iconContainer}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon className={clsx(classes.icon, 'fa fa-envelope')} />
            </a>
          </Grid>
        </Grid>
      </WidthContainer>
    </section>
  )
}

export default Home
