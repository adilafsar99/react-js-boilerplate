import {
  Signup,
  Login,
} from "../../containers";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";
import {
  onAuthStateChanged,
  auth
} from '../Firebase/Firebase.js';
import {
  useEffect,
  useState
} from 'react';

function PrivateRoute( {
  component: Component, auth, ...rest
}) {
  return (
    <Route
      {...rest}
      component={({ location }) =>
      auth ? (
        <Component />
      ): (
        <Redirect
          to={ {
            pathname: "/",
            state: {
              from: location.pathname,
            },
          }}
          />
      )
      }
      />
  );
}

function PublicRoute( {
  component: Component, auth, ...rest
}) {
  const location = useLocation();
  return (
    <Route
      {...rest}
      component={() =>
      !auth ? (
        <Component />
      ): (
        <Redirect
          to={location.state && location.state.from ? location.state.from: "/profile"}
          />
      )
      }
      />
  );
}


function AppRouter() {
  const [isAuth,
    setIsAuth] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true)
      } else {
        setIsAuth(false)
      }
    })
  }, [])
  return (
    <Router>
            <Switch>
                <PublicRoute auth={isAuth} exact path="/" component={Login} />
                <PublicRoute auth={isAuth} exact path="/signup" component={Signup} />
            </Switch>
        </Router>
  )
}

export {
  AppRouter
};