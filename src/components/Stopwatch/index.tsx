import { useState } from "react";
import { TimeToSeconds } from "../../common/utils/date";
import { ITask } from "../../types/tasks";
import Button from "../Button";
import Clock from "./clock";
import style from "./Stopwatch.module.scss";


interface Props{
  selected: ITask | undefined;
}

function StopWatch({selected}:Props) {
  const [time, setTime] = useState<number>();
  if(selected?.time){
    setTime(TimeToSeconds(selected.time));
  }

 return( 
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      Tempo: {time}
    <div className={style.relogioWrapper}>
      <Clock/>
    </div>
    <Button>
      Começar!
    </Button>
  </div>);
}

export default StopWatch;