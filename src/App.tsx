import React from 'react';
import style from './App.module.scss'
import Form from './components/Form';
import List from './components/List';
import StopWatch from './components/Stopwatch';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form/>
      <List/>
      <StopWatch/>
    </div>
  );
}

export default App;
