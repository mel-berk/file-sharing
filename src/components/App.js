import React from "react"
import Signup from "./authentication/Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Landing from "./authentication/Landing"
import Profile from "./authentication/Profile"
import Login from "./authentication/Login"
import Navbar2 from "./authentication/navbar2"
import PrivateRoute from "./authentication/PrivateRoute"
import ForgotPassword from "./authentication/ForgotPassword"
import UpdateProfile from "./authentication/UpdateProfile"
import Dashboard from "./google-drive/Dashboard"
import Send from "./google-drive/Send"
import Recieve from "./google-drive/Recieve"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Drive */}
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/folder/:folderId" component={Dashboard} />
          <PrivateRoute exact path="/send" component={Send} />
          <PrivateRoute exact path="/recieve" component={Recieve} />
          {/* Profile */}
          <PrivateRoute path="/user" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <div>
            <Navbar2/>
            <Route path="/landing" component={Landing} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </div>
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App
