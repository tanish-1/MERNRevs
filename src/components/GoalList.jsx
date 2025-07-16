import React from 'react';

import './GoalList.css'

const GoalList= ({goals}) => {
    console.log(goals)
    return (

        <ul className="goal-list">
            { goals.map((goal,) => {
                return <li key={goal.id}>{goal.text}</li>
            })}
        </ul>
    );
}

export default GoalList;