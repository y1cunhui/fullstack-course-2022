const Header = (props) => (
    <h1>
      {props.course}
    </h1>
  )

const Part = (props) => (
  <p>{props.part} {props.exercises}</p>
)

const Content = (props) => (
  props.parts.map(
    part => (
      <Part part={part.name} exercises={part.exercises}/>
    )
  )
)

const Total = (props) => {
  let total = 0
  props.parts.forEach(element => {
    total += element.exercises
  });
  return (
    <p>Number of exercises {total}</p>
  )
}
  

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name}/>
      <Content 
        parts = {course.parts}
        />
      <Total 
        parts = {course.parts}
      />
    </div>
  )
}

export default App