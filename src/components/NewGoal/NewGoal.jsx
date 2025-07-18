import React, {useState} from 'react';
import "./NewGoal.css"

const NewGoal = ({onAddGoal}) => {
    const [enteredText,setEnteredText] = useState('')
    const addGoalHandler = (event) => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText,
        }
        setEnteredText('')
       onAddGoal(newGoal);
    }
    const textChangedHandler = (event) => {
        setEnteredText(event.target.value);
    }
    return (
      <form className="new-goal" onSubmit={addGoalHandler}>
          <input type="text" value={enteredText} onChange={textChangedHandler}/>
          <button type="submit" > Add Goal</button>
      </form>
    );
};

export default NewGoal;