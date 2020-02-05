import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'
import CarIndex from "./cars/CarIndex";
import CarCreate from "./cars/CarCreate";
import CreateTrip from "./auth/trip/createTrip"
import TripIndex from "./auth/trip/TripIndex"
import ShowTip from './auth/trip/showTrip'
import CarShow from './cars/CarShow'
import CarEdit from "./cars/CarEdit";
import Footer from './header/footer'
class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {/* {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))} */}
        {/* <main className="container"> */}
        <div className="auth-wrapper">
        <div className="auth-inner">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          {/* ------------ */}
          
          <AuthenticatedRoute user={user} exact path='/cars' render={()=>(
            <CarIndex user={user} />
            
          )}/>
            <AuthenticatedRoute user={user} exact path='/trips/:id' render={(props)=>(
            <ShowTip user={user} />
            
          )}/>
          <AuthenticatedRoute user={user} exact path='/create' render={()=>(
            <CarCreate user={user} />
            
          )}/>
            <AuthenticatedRoute user={user} exact path='/trips' render={()=>(
            <TripIndex user={user} />
            
          )}/>
            <Route user={user} exact path='/tripsnew' render={()=>(
            <CreateTrip user={user} />
            
          )}/>
          <AuthenticatedRoute user={user} exact path='/cars/:carid' render={(props)=>(
            <CarShow user={user} carid={props.match.params.carid}/>
          )}/>
          <AuthenticatedRoute user={user} exact path='/cars/:carid/edit' render={()=>(
            <CarEdit user={user} />
         
            )}/>

          </div></div>
        {/* </main> */}
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
