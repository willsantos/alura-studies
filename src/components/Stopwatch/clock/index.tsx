import style from './clock.module.scss';

interface Props{
  time: number | undefined;
}


function Clock({time =0}:Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [tenMinutes,oneMinutes] = String(minutes).padStart(2,'0').split('');
  const [tenseconds,oneSeconds] = String(seconds).padStart(2,'0').split('');


  return (
    <>
    <span className={style.relogioNumero}>{tenMinutes}</span>
    <span className={style.relogioNumero}>{oneMinutes}</span>
    <span className={style.relogioDivisao}>:</span>
    <span className={style.relogioNumero}>{tenseconds}</span>
    <span className={style.relogioNumero}>{oneSeconds}</span>
    </>
  )
}

export default Clock;