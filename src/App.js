import React, { Component } from 'react'
import { Header, Footer } from './Components/Layouts'
import Exercises from './Components/Exercises/index'
import { muscles, exercises } from './store'

export default class App extends Component {
  state = {
    exercises,
    exercise: {}
  }

  handleCategorySelected = (category) => {
    this.setState({
      category
    }) 
  }

  // We are going to use setState with PrevValue, propsToAdd
  handleExerciseselected = (id) => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id) // If the ID match with the ID we're searching
    }))
  }

  // We're formatting the data as we need it
  getExercisesByMuscles() {
    return Object.entries ( // We use this method to iterate easily throught categories then exercises
      this.state.exercises.reduce((exercises, exercise) => {
        // exercises = accumulator / exercise = object we are looking over
        const { muscles } = exercise; // We are looking at the properties muscle (as described in store)
        exercises[muscles] = exercises[muscles] // Does the muscle scanned equals the one being looked over ? 
          ? [...exercises[muscles], exercise] // If we do, we iterate the object itself
          : [exercise] // else we just return an array with the exercise alone 

        return exercises;
      }, {})
    )
  }

  render() {
    const exercises = this.getExercisesByMuscles(),
    {category, exercise} = this.state;

    return (
      <React.Fragment>
        <Header />
        <Exercises 
          exercise={exercise}
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseselected} />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected} />
      </React.Fragment>
    )
  }
}
