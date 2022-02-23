import style from './clock.module.scss';

function Clock(){
  return (
    <>
    <span className={style.relogioNumero}>0</span>
    <span className={style.relogioNumero}>0</span>
    <span className={style.relogioDivisao}>:</span>
    <span className={style.relogioNumero}>0</span>
    <span className={style.relogioNumero}>0</span>
    </>
  )
}

export default Clock;