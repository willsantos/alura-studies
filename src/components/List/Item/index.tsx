import { ITask } from "../../../types/tasks";
import style from "./Item.module.scss";

interface Props extends ITask {
  selectTask: (task: ITask) => void;
}

function Item(
  {
    task, 
    time, 
    selected, 
    completed,
     id,
     selectTask
    }:Props) {
  return(
    <li  className={`${style.item} ${selected ? style.itemSelecionado : ''}`} onClick={()=>selectTask({
      task,
      time,
      selected,
      completed,
      id
    })}>
            <h3>{task}</h3>
            <span>{time}</span>
          </li>
  );
}

export default Item;