import './App.css'
import { MyButton } from './Components/Mybutton'
import { Contador } from './Components/Contador';
import { useState } from 'react';

function App() {

  // Le damos el tiempo
    const [time, setTime] = useState(25*1);

    // Le damos un estado inicial falso para que no decremente hasta que el boton lo diga
    const [isActive, setIsActive] = useState(false);

    // La funcion que decrementa el tiempo
    function handleTick() {
      setTime(prevTime => prevTime -1);
    };

    // Funciones para cada boton
    function startTimer() {
      setIsActive(true);
    }

    function stopTimer() {
      setIsActive(false);
    }

    function resetTimer() {
      setIsActive(false);
      setTime(25*1);
    }
    
  return (
    <>
      <main>
        <h1 className='title'>Pomodoro Thing</h1>

        <h2>Sesion de enfoque!</h2>

        <Contador time={time} isActive={isActive} onTick={handleTick}></Contador>

        <div className='buttons'>
          <MyButton text="Init" onClick={startTimer} color="green"></MyButton>

          <MyButton text="Stop" onClick={stopTimer} color="gray"></MyButton>

          <MyButton text="Reset" onClick={resetTimer} color="red"></MyButton>
        </div>

        <p>Ciclos completados: </p><span></span>

        <MyButton text="Info." onClick={resetTimer} color="red"></MyButton>
      </main>
    </>
  )
}

export default App
