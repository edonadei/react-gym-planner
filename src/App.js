import React, { Component } from "react";
import { Header, Footer } from "./Components/Layouts";
import Exercises from "./Components/Exercises/index";
import { muscles, exercises } from "./store";

export default class App extends Component {
  state = {
    exercises,
    exercise: {}
  };

  handleCategorySelected = category => {
    this.setState({
      category
    });
  };

  // We are going to use setState with PrevValue, propsToAdd
  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id) // If the ID match with the ID we're searching
    }));
  };

  handleExerciseDeleted = id => {
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    }));
  };

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      // Exercises = old array
      exercises: [
        ...exercises,
        exercise // We increment to the old array, the new element
      ]
    }));
  };

  handleSelectEdit = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }));
  };

  handleExerciceEdit = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ]
    }));
  };

  // We're formatting the data as we need it
  getExercisesByMuscles() {
    const initExercises = muscles.reduce(
      (exercises, category) => ({
        ...exercises,
        [category]: []
      }),
      {}
    );

    return Object.entries(
      // We use this method to iterate easily throught categories then exercises
      this.state.exercises.reduce((exercises, exercise) => {
        // exercises = accumulator / exercise = object we are looking over
        const { muscles } = exercise; // We are looking at the properties muscle (as described in store)
        exercises[muscles] = [...exercises[muscles], exercise]; // else we just return an array with the exercise alone

        return exercises;
      }, initExercises)
    );
  }

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise, editMode } = this.state;

    return (
      <React.Fragment>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          exercise={exercise}
          exercises={exercises}
          category={category}
          editMode={editMode}
          muscles={muscles}
          onSelect={this.handleExerciseSelected}
          onDelete={this.handleExerciseDeleted}
          onSelectEdit={this.handleSelectEdit}
          onEdit={this.handleExerciceEdit}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </React.Fragment>
    );
  }
}
