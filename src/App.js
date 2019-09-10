import React, { Component } from 'react'
import { Header, Footer } from './Components/Layouts'
import Exercises from './Components/Exercises/index'
import { muscles, exercises } from './store'

export default class App extends Component {
  state = {
    exercises
  }

  getExercisesByMuscles() {
    return Object.entries ( // We use this method to iterate easily throught categories then exercices
      this.state.exercises.reduce((exercises, exercise) => {
        // exercices = accumulator / exercice = object we are looking over
        const { muscles } = exercise; // We are looking at the properties muscle (as described in store)
        exercises[muscles] = exercises[muscles] // Does the muscle scanned equals the one being looked over ? 
          ? [...exercises[muscles], exercise] // If we do, we iterate the object itself
          : [exercise] // else we just return an array with the exercice alone 

        return exercises;
      }, {})
    )
  }

  render() {
    const exercises = this.getExercisesByMuscles();
    return (
      <React.Fragment>
        <Header />
        <Exercises exercises={exercises} />
        <Footer
          muscles={muscles} />
      </React.Fragment>
    )
  }
}
