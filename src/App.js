import React from "react";
import "./App.css";
import Drawer from "./components/Drawer/Drawer";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./components/screens/dashboard/Dashboard";
import Vendors from "./components/screens/vendors/Vendors";

function App() {
  const userInfo = { accessToken: true };

  const PrivateRoute = ({ component: Component, userInfo, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => {
          return userInfo.accessToken ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
    );
  };

  return (
    <div className="App">
      {userInfo.accessToken && <Drawer />}

      <Switch>
        {/* <Route path="/login" component={Login} /> */}
        <PrivateRoute
          userInfo={userInfo}
          path="/dashboard"
          component={Dashboard}
        />
        <PrivateRoute userInfo={userInfo} path="/vendors" component={Vendors} />
        {/* <PrivateRoute userInfo={userInfo} path="/orders" component={Orders} />
        <PrivateRoute
          userInfo={userInfo}
          path="/customers"
          component={Customers}
        />

        <PrivateRoute userInfo={userInfo} path="/users" component={Users} />

        <PrivateRoute userInfo={userInfo} path="/banners" component={Banners} /> */}

        <Redirect to="/dashboard" />
      </Switch>
    </div>
  );
}

export default App;
