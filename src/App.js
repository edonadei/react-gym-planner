import React, {Component, Fragment} from 'react'
import {Header, Footer} from './Components/Layouts'
import Exercices from './Components/Exercices/index'

export default function App() {
  return (
    <React.Fragment>
      <Header/>
      <Exercices/>
      <Footer/>
    </React.Fragment>
  )
}
