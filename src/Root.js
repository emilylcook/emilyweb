import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ConnectedRouter } from 'connected-react-router'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// import { SnackbarProvider } from 'notistack'
import { makeStyles } from '@material-ui/core/styles'

import themeConfig from './theme'
import App from './App'
const theme = createMuiTheme(themeConfig)

const useStyles = makeStyles(() => ({
  success: { backgroundColor: theme.palette.primary.main },
  error: { backgroundColor: 'blue' },
  warning: { backgroundColor: 'green' },
  info: { backgroundColor: 'yellow' }
}))

export default function Root({ store, history, persistor }) {
  //   const classes = useStyles()

  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <ConnectedRouter history={history}>
            {/* <SnackbarProvider
                  classes={{
                    variantSuccess: classes.success,
                    variantError: classes.error,
                    variantWarning: classes.warning,
                    variantInfo: classes.info
                  }}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                  }}
                > */}
            <App />
            {/* </SnackbarProvider> */}
          </ConnectedRouter>
        </PersistGate>
      </MuiThemeProvider>
    </Provider>
  )
}
