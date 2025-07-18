import React, {useState} from 'react'
import './App.css'
import GoalList from "./components/GoalList/GoalList.jsx";
import NewGoal from "./components/NewGoal/NewGoal.jsx";
function App() {
   const [courseGoals , setCourseGoals] =  useState([
        {id:'cg1',text:'Finish the Course'},
        {id:'cg2',text:'Learn all about the Course Main Topic'},
        {id:'cg3',text:'Help other students in the Course Q&amp;A'},])

    const addNewGoalHandler = (newGoal) => {
          // setCourseGoals(courseGoals.concat(newGoal) );
        setCourseGoals(prevCourseGoals => [...prevCourseGoals, newGoal] );
    }

  return (
      <div className="course-goals">
     <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
     <GoalList goals={courseGoals} />
      </div>
   // <h1 title="This works!">Hi, this ReactJs</h1> // React.createElement('h1',{title: 'This works'},"Hi, this ReactJs!")
  )
}

export default App
