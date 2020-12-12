import './App.css';
import React, { useEffect } from "react"
import Menu from "components/Menu"
import AddButton from "components/AddButton"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Add from "routes/Add"
import Login from "routes/Login/Login"
import Policy from "routes/Policy"
import Rules from "routes/Rules"
import Maps from "./routes/Maps"
import RouteWraper from "components/RouteWraper"
import Protected from "routes/Protected"
import Profile from "routes/Profile"
import { Provider } from "react-redux";
import store from "redux/store";
import useAuth from 'utils/useAuth';
import Logout from 'routes/Logout';

function App() {
  const { handleOnMount } = useAuth()
  useEffect(() => {
    handleOnMount()
  }, [handleOnMount])

  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Menu></Menu>
          <RouteWraper>
            <Switch>
              <Route path="/" exact component={Maps} />
              <Protected path="/add" exact component={Add}></Protected>
              <Protected path="/profile" exact component={Profile}></Protected>
              <Route path="/logout" component={Logout} />
              <Route path="/login" exact component={Login} />
              <Route path="/policy" component={Policy} />
              <Route path="/rules" exact component={Rules} />
            </Switch>
          </RouteWraper>
          <AddButton></AddButton>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

