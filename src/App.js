import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Components/Layouts'
import Exercices from './Components/Exercices/index'
import { muscles, exercises } from './store'

export default class App extends Component {
  states = {
    exercises
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Exercices />
        <Footer 
          muscles={muscles}/>
      </React.Fragment>
    )
  }
}
