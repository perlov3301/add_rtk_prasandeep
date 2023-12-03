import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const alist = [
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
  },
];
function App() {
    const [tasks, setTasks] = useState([
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
    },
    ]);
    // useEffect(() => {
    //     setTasks([...tasks,
    //         alist.map((el) => { tasks.push(el); })]);
    // },[]);
    const deleteTask = (id) => {
      console.log('Appjs;delete ',id)
    };
  return (
    <div className="container">
      <Header  />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
