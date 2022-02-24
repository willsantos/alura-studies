import { useState } from 'react';
import style from './App.module.scss'
import Form from './components/Form';
import List from './components/List';
import StopWatch from './components/Stopwatch';
import { ITask } from './types/tasks';

function App() {
  const [tasks,setTasks] = useState<ITask[]>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTask={setTasks}/>
      <List tasks={tasks}/>
      <StopWatch/>
    </div>
  );
}

export default App;
