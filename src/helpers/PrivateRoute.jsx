import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ children, isAuthenticated, ...rest }) {
  {
    console.log('isAuthenticated', isAuthenticated)
  }
  return <Route {...rest} render={() => (isAuthenticated ? children : <Redirect to="/" />)} />
}

export default PrivateRoute
