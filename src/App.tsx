import { useState } from 'react';
import style from './App.module.scss'
import Form from './components/Form';
import List from './components/List';
import StopWatch from './components/Stopwatch';
import { ITask } from './types/tasks';

function App() {
  const [tasks,setTasks] = useState<ITask[]>([]);
  const [selected,setSelected] = useState<ITask>();	

  function selectTask(task:ITask){
    setSelected(task);
    setTasks(tasks => tasks.map(task => ({
      ...task,
      selected: task.id === selected?.id ? true : false
    })));
  }


  return (
    
    <div className={style.AppStyle}>
      <Form setTask={setTasks}/>
      <List 
      tasks={tasks} 
      selectTask = {selectTask}
      />
      <StopWatch selected={selected}/>
    </div>
  );
}

export default App;
