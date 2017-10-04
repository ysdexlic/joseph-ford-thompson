import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Home from './components/home'
import NotFound from './components/common/notFound'

export class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path="/*" component={Home}/>
        </Switch>
      </main>
    )
  }
}


export default Main
