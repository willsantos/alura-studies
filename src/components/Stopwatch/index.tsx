import Button from "../Button";
import Clock from "./clock";
import style from "./Stopwatch.module.scss";

function StopWatch(){
 return( 
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
    <div className={style.relogioWrapper}>
      <Clock/>
    </div>
    <Button>
      Começar!
    </Button>
  </div>);
}

export default StopWatch;