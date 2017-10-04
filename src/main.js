import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Home from './components/home'
import NotFound from './components/common/notFound'
import Header from './components/common/header'

export class Main extends Component {
  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path="/*" component={Home}/>
        </Switch>
      </main>
    )
  }
}


export default Main
