import React from 'react'
import { Icon, Typography, Grid, Tooltip, Divider } from '@material-ui/core'
import { makeStyles, darken } from '@material-ui/core/styles'
import clsx from 'clsx'

import WidthContainer from '../WidthContainer'

const useStyles = makeStyles(theme => ({
  box: {
    padding: 40,
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
  iconContainer: {
    margin: '5px 10px'
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

const Interests = () => {
  const classes = useStyles()

  return (
    <section id="interests">
      <WidthContainer>
        <Grid container justify="center">
          <Grid xs={12} item>
            <Grid container justify="center" className={classes.box}>
              <Grid item xs={11} sm={8} md={7} className={classes.heading}>
                <Typography gutterBottom variant="h3" className={classes.title}>
                  My Interests
                </Typography>
                <Typography paragraph>
                  Outside of work, you'll often find me in the mountains, cheering on the Sounders,
                  playing with my cats, or enjoying one of the following:
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.dividerContainer}>
                <Divider variant="middle" className={classes.divider} />
              </Grid>
              <Grid item className={classes.iconContainer}>
                {Object.entries(interests).map(([name, { icon, title }]) => (
                  <ArrowTooltip title={title}>
                    <Icon className={clsx(classes.icon, icon)} />
                  </ArrowTooltip>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </WidthContainer>
    </section>
  )
}

const interests = {
  cat: {
    icon: 'fa fa-cat',
    title: 'Cats'
  },
  skiing: {
    icon: 'fa fa-skiing',
    title: 'Skiing'
  },
  coding: {
    icon: 'fa fa-laptop-code',
    title: 'Coding'
  },
  running: {
    icon: 'fa fa-running',
    title: 'Running'
  },
  soccer: {
    icon: 'fa fa-futbol',
    title: 'Sounders'
  },
  cat: {
    icon: 'fa fa-cat',
    title: 'Cats'
  },
  hiking: {
    icon: 'fa fa-hiking',
    title: 'Backpacking'
  },
  headphones: {
    icon: 'fa fa-headphones',
    title: 'Tswiftie'
  }
}

function arrowGenerator(color) {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.95em',
      width: '2em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${color} transparent`
      }
    }
  }
}

const useStylesArrow = makeStyles(theme => ({
  tooltip: {
    position: 'relative'
  },
  arrow: {
    position: 'absolute',
    fontSize: 6,
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid'
    }
  },
  popper: arrowGenerator(theme.palette.grey[700])
}))

function ArrowTooltip(props) {
  const { arrow, ...classes } = useStylesArrow()
  const [arrowRef, setArrowRef] = React.useState(null)

  return (
    <Tooltip
      classes={classes}
      PopperProps={{
        popperOptions: {
          modifiers: {
            arrow: {
              enabled: Boolean(arrowRef),
              element: arrowRef
            }
          }
        }
      }}
      {...props}
      title={
        <React.Fragment>
          {props.title}
          <span className={arrow} ref={setArrowRef} />
        </React.Fragment>
      }
    />
  )
}

export default Interests
