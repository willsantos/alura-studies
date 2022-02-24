import { useEffect } from "react";
import { useState } from "react";
import { TimeToSeconds } from "../../common/utils/date";
import { ITask } from "../../types/tasks";
import Button from "../Button";
import Clock from "./clock";
import style from "./Stopwatch.module.scss";


interface Props{
  selected: ITask | undefined;
  completeTask: () => void;
}

function StopWatch({selected,completeTask}:Props) {
  const [time, setTime] = useState<number>();
  
  useEffect(() =>{
   if(selected?.time){
     setTime(TimeToSeconds(selected.time));
   }
  },[selected]);

  function countdown(counter:number =0){
    setTimeout(() =>{
      if(counter > 0){
        setTime(counter -1);
        return countdown(counter -1);
      }
      completeTask();
    },1000);
  }

 return( 
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      
    <div className={style.relogioWrapper}>
      <Clock time={time}/>
    </div>
    <Button onClick={()=>countdown(time)}>
      Começar!
    </Button>
  </div>);
}

export default StopWatch;