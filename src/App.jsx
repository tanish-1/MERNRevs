import React from 'react'
import './App.css'
import GoalList from "./components/GoalList";
function App() {
  return (
      <div className="course-goals">
     <h2>Course Goals</h2>
     <GoalList />
      </div>
   // <h1 title="This works!">Hi, this ReactJs</h1> // React.createElement('h1',{title: 'This works'},"Hi, this ReactJs!")
  )
}

export default App
