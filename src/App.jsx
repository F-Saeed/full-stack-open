import { useState } from 'react';
import Content from './Content';
import Header from './Header';

function App() {
  const parts = {
    part1: 'Fundamentals of React',
    part2: 'Using props to pass data',
    part3: 'State of a component',
  };

  const exercises = {
    exercises1: 10,
    exercises2: 7,
    exercises3: 14,
  };

  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
}

export default App;
