import React from 'react'
// import Grid from '@material-ui/core/Grid'
import { TextField, Typography, Avatar, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFormState } from 'react-use-form-state'

import WidthContainer from '../WidthContainer'
import catImg from '../assets/catContact.jpg'
import { isFormSubmitDisabled } from '../utils'

const useStyles = makeStyles(theme => ({
  section: {
    // backgroundColor: '#fff',
    // padding: '40px 50px',
    // boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
    // height: 500
  },
  catPhoto: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center'
    }
  },
  avatar: {
    margin: 10,
    width: 300,
    height: 300,
    [theme.breakpoints.down('md')]: {
      marginTop: 50,
      width: 350,
      height: 350
    }
  },
  title: {
    marginBottom: 20,
    textAlign: 'center'
  },
  item: {
    padding: '10px 0'
  },
  submitButton: {
    textAlign: 'right',
    paddingTop: 20
  }
}))

// TODO
// enable/disable submit
// send email with api

const Home = () => {
  const classes = useStyles()
  const [formState, { text, email }] = useFormState({})

  const inputs = {
    name: {
      gridWidth: { xs: 12 },
      name: 'name',
      label: 'Name',
      inputType: text,
      variant: 'outlined',
      validator: {
        required: true
      }
    },
    subject: {
      gridWidth: { xs: 12 },
      name: 'subject',
      label: 'Subject',
      inputType: text,
      variant: 'outlined',
      validator: {
        required: true
      }
    },
    email: {
      gridWidth: { xs: 12 },
      name: 'email',
      label: 'Email',
      inputType: email,
      variant: 'outlined',
      validator: {
        required: true
      }
    },
    message: {
      gridWidth: { xs: 12 },
      name: 'message',
      label: 'Message',
      inputType: text,
      variant: 'outlined',
      multiline: true,
      rows: 4,
      rowsMax: 12,
      validator: {
        required: true
      }
    }
  }

  const disableSubmit = isFormSubmitDisabled(inputs, formState)

  // TODO snackbar on successful sent, clear form (useEffect)
  return (
    <WidthContainer>
      <section id="contactMe">
        <div className={classes.section}>
          <Typography variant="h3" className={classes.title}>
            Contact Me
          </Typography>
          {/* <Typography variant="h5">Contact Me</Typography> */}
          <form>
            <Grid container>
              <Grid item xs={12} sm={12} md={7}>
                <Grid container>
                  {Object.entries(inputs).map(([name, args]) => (
                    <Grid key={name} item {...args.gridWidth} className={classes.item}>
                      <TextField
                        {...args.inputType({
                          name
                        })}
                        fullWidth
                        {...args}
                        error={formState.errors[name] ? true : false}
                        helperText={formState.errors[name]}
                      />
                    </Grid>
                  ))}
                  <Grid item xs={12} className={classes.submitButton}>
                    <Button
                      disabled={disableSubmit}
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      Send Email
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={5} className={classes.catPhoto}>
                <Avatar alt="Sterling Lion" src={catImg} className={classes.avatar} />
              </Grid>
            </Grid>
          </form>
        </div>
      </section>
    </WidthContainer>
  )
}

export default Home
