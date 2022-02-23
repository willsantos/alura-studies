import React from 'react';
import './ListStyle.scss';

function List(){
  const tasks = [
    {
      task: 'React',
      time: '02:00:00'
    },
    {
      task: 'Typescript',
      time: '03:00:00'
    },
  ];
  return(
    <aside className='listaTarefas'>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <li key={index} className='item'>
            <h3>{item.task}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;