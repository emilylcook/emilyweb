import React, { useState, useEffect } from 'react'
// import Grid from '@material-ui/core/Grid'
import { TextField, Typography, Avatar, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFormState } from 'react-use-form-state'
import axios from 'axios'
import { useSnackbar } from 'notistack'

import WidthContainer from '../WidthContainer'
import catImg from '../assets/catContact.jpg'
import { isFormSubmitDisabled } from '../utils'
import config from '../config'

// TODO
// send email with api

const Home = () => {
  const classes = useStyles()
  const [formState, { text, email }] = useFormState({})
  const [emailSent, setEmailSent] = useState(false)
  const { enqueueSnackbar } = useSnackbar()

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

  function sendEmail() {
    const { subject, message, email } = formState.values
    axios
      .post(`${config.API}/sendEmail`, {
        subject,
        message,
        fromEmail: email
      })
      .then(function(response) {
        setEmailSent(true)
        // TODO set response then have a use effect on the response
      })
      .catch(function(error) {
        setEmailSent(false)
      })
  }

  useEffect(() => {
    const touchedForm = Object.keys(formState.touched).some(name => {
      return formState.touched[name]
    })

    if (emailSent && touchedForm) {
      formState.reset()

      enqueueSnackbar('Email Sent', {
        variant: 'success',
        autoHideDuration: 4500
      })

      setEmailSent(false)
    }
  }, [emailSent, formState, enqueueSnackbar])

  const disableSubmit = isFormSubmitDisabled(inputs, formState)

  // TODO
  // snackbar on successful sent, clear form (useEffect)

  return (
    <WidthContainer>
      <section>
        <div className={classes.section}>
          <Typography variant="h3" className={classes.title}>
            Contact Me
          </Typography>
          <Typography variant="subtitle2" className={classes.subTitle}>
            *Resume available upon request
          </Typography>
          <form>
            <Grid container>
              <Grid item xs={12} sm={12} md={7}>
                <Grid container>
                  {Object.entries(inputs).map(
                    ([index, { gridWidth, name, inputType, ...rest }]) => (
                      <Grid key={index} item {...gridWidth} className={classes.item}>
                        <TextField
                          {...inputType({
                            name
                          })}
                          name={name}
                          fullWidth
                          {...rest}
                          error={formState.errors[name] ? true : false}
                          helperText={formState.errors[name]}
                        />
                      </Grid>
                    )
                  )}
                  <Grid item xs={12} className={classes.submitButton}>
                    <Button
                      disabled={disableSubmit}
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      onClick={sendEmail}
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

const useStyles = makeStyles(theme => ({
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
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 50,
      width: 280,
      height: 280
    }
  },
  subTitle: {
    marginBottom: 40,
    textAlign: 'center',
    color: 'rgb(141, 141, 141)',
    marginLeft: 35
  },
  title: {
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
