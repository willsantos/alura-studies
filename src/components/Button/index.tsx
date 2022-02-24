import React from 'react';
import style from './Button.module.scss';


interface Props{
  text?:string,
  type?:'button'|'submit'|'reset'|undefined, onClick?:()=>void,
  children?:React.ReactNode,
}

function Button({onClick,type,children}:Props){
  return(
    <button className={style.botao} type={type} onClick={onClick}>{children}</button>
  );
}


export default Button;