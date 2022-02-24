import React, { useState } from 'react';
import { ITask } from '../../types/tasks';
import Button from '../Button';
import style from './Form.module.scss';
import {v4 as uuidv4} from 'uuid';


interface Props{
    setTask: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function Form({setTask: setTasks}:Props){

    const [task,setTask] = useState<string>('');
    const [time,setTime] = useState<string>('00:00');

  function addTask(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setTasks(tasks => 
      [
        ...tasks,
        {task,
          time, 
          selected:false,
          completed:false,
          id: uuidv4()
        }
      ]
    );
    setTask('');
    setTime('00:00');
  }

  return(
    <form className={style.novaTarefa} onSubmit={addTask}>
    <div className={style.inputContainer}>
      <label htmlFor="tarefa">
        Adicione um novo estudo
      </label>
      <input
        type="text"
        name="tarefa"
        id="tarefa"
        placeholder="O que você quer estudar"
        value={task}
        onChange={(e)=>{setTask(e.target.value)}}
        required
      />
    </div>
    <div className={style.inputContainer}>
      <label htmlFor="tempo">
        Tempo
      </label>
      <input
        type="time"
        step="1"
        name="tempo"
        id="tempo"
        min="00:00:00"
        max="01:30:00"
        value={time}
        onChange={(e)=>{setTime(e.target.value)}}
        required
      />
    </div>
    <Button type="submit">
      Adicionar
    </Button>
  </form>
  );
}

export default Form;