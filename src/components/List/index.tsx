import Item from './Item';
import style from './List.module.scss';

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
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          //sem especificar todos os atributos são passados para o componente filho
          //se forem muitos dados de uma api, é melhor passar cada atributo
          <Item key={index} {...item}/>
        ))}
      </ul>
    </aside>
  );
}

export default List;