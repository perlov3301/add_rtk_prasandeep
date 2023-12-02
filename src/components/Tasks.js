import React, { useState, useEffect } from 'react';

const Tasks = ({ tasks }) => {
    console.log("Tasks1;");
  
    
    
    return (
        <>
          { tasks.map((task) => (
            <h3 key={task.id}> { task.text } </h3>
          )) }
        </>
    );
};

export default Tasks;
/**
 [
    {
        id: 1,
        text: "Doctors Appointment",
        day: 'Feb 4th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30',
        reminder: false,
    }
];
 */
