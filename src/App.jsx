import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import { HomePage } from "./views/HomePage"
import { ContactPage } from "./views/ContactPage"
import { AppHeader } from "./cmps/AppHeader.jsx"
import { StatisticPage } from "./views/StatisticPage"
import { ContactDetails } from "./views/ContactDetails"
import { ContactEdit } from "./views/ContactEdit"
import { SignupPage } from "./views/SignupPage"

import "./assets/styles/style.scss"

import React from "react"
import { userService } from "./services/UserService"

const PrivateRoute = (props) => {
  const user = userService.getUser()
  return user ? <Route {...props} /> : <Redirect to='/signup' />
}

export default function App() {
  return (
    <Router>
      <div className='App flex column'>
        <header className='app-header-container'>
          <AppHeader />
        </header>
        <main className='main-content'>
          <Switch>
            <Route path={'/signup'} component={SignupPage} />
            <PrivateRoute path={"/contact/edit/:id?"} component={ContactEdit} />
            <PrivateRoute path='/contact/:id' component={ContactDetails} />
            <PrivateRoute path='/contact' component={ContactPage} />
            <Route path='/statistics' component={StatisticPage} />
            <PrivateRoute path='/' component={HomePage} />
            {/* <Route path='/about' component={AboutPage} /> */}
          </Switch>
        </main>
      </div>
    </Router>
  )
}
