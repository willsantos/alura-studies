import { ITask } from '../../types/tasks';
import Item from './Item';
import style from './List.module.scss';

interface Props{
  tasks: ITask[];
  selectTask: (task: ITask) => void;
}


function List({tasks,selectTask}:Props) {
  

  return(
    <aside className={style.listaTarefas}>
      <h2 >Estudos do dia</h2>
      <ul>
        {tasks.map((item) => (
          //sem especificar todos os atributos são passados para o componente filho
          //se forem muitos dados de uma api, é melhor passar cada atributo
          <Item 
            key={item.id} 
            selectTask={selectTask}
            {...item}
          />
        ))}
      </ul>
    </aside>
  );
}

export default List;