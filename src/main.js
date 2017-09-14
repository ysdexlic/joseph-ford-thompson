import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './components/home'
import NotFound from './components/common/notFound'

export class Main extends Component {
  render() {
    return (
      <main className={this.props.sticky ? 'sticky' : ''}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={Home}/>
          <Route exact path='/portfolio' component={Home}/>
          <Route path="/*" component={NotFound}/>
        </Switch>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    sticky: state.header.sticky
  }
}

export default connect(mapStateToProps)(Main)
