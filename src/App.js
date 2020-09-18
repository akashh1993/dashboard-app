import React, { Component } from 'react';
import './App.css';import './assets/css/style.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Messenger from './components/messenger/messenger';
import Profile from './components/profile/profile';
import Sidebar from './components/sidebar/sidebar';
import SidebarSub from './components/sidebar/sidebar-sub';
import Help from './components/help/help';
import Header from "./components/header/header";
import Setting from './components/setting/setting';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <main className="page-wrapper">
            <Sidebar></Sidebar>
            <SidebarSub></SidebarSub>
            <section className="center-pannel">
              <Header></Header>
              <Switch>
                <Route exact path='/message/:user' component={Messenger}></Route>
                <Route exact path='/help' component={Help}></Route>
                <Route exact path='/setting' component={Setting}></Route>
                <Redirect from="/" to="/message/1"></Redirect>
              </Switch>
            </section>
            <Profile></Profile>

          </main>
        </div>
      </Router>
  )};
}

export default App;