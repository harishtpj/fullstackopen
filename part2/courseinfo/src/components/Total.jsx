const Total = ({ course }) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <b>Total of {total} exercises</b>
  )
}

export default Total