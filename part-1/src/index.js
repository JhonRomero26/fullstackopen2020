import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => (
  <h1>{course}</h1>
)

const Part = ({ part, exercises }) => (
  <p>{part} {exercises}</p>
)

const Content = ({ parts }) => (
  <div>
    {
      parts.map((item, id) => (
        <Part key={id} part={item.name} exercises={item.exercises} />
      ))
    }
  </div>
)


const Total = ({ exercises }) => {
  let total = exercises.reduce((sum, value) => (sum + value.exercises), 0)

  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} />
      <Total exercises={[part1, part2, part3]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
