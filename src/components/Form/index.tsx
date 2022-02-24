import React from 'react';
import { ITask } from '../../types/tasks';
import Button from '../Button';
import style from './Form.module.scss';
import {v4 as uuidv4} from 'uuid';

class Form extends React.Component<{
  setTask: React.Dispatch<React.SetStateAction<ITask[]>>;
}>{
  state = {
    task: '',
    time: '00:00:00'
  }

  addTask(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    this.props.setTask(tasks => 
      [
        ...tasks,
        {...this.state, 
          selected:false,
          completed:false,
          id: uuidv4()
        }
      ]
    );
    this.setState({task: '',time: '00:00:00'});
  }
  render(): React.ReactNode {
      return(
        <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar"
            value={this.state.task}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{this.setState({...this.state,task: e.target.value})}}
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
            value={this.state.time}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{this.setState({...this.state,time: e.target.value})}}
            required
          />
        </div>
        <Button type="submit">
          Adicionar
        </Button>
      </form>
      );
  }
}

export default Form;