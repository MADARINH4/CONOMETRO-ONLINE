import { useEffect, useState } from 'react';
import ControlButtons from './components/ControlButtons';
import Cronometro from './components/Cronometro';
import Status from './components/Status';

const titles = ['START', 'RESET', 'PAUSE'];
const id = ['start_button', 'reset_button', 'pause_button'];
let status = [];

function App() {
  const [state, setState] = useState({ isActive: false, isPaused: true });
  const [timer, setTimer] = useState({ oldTimer: 0, timer: 0 });

  useEffect(() => {
    let key = null;
    if (state.isActive && state.isPaused === false) {
      key = setInterval(() => {
        setTimer((time) => {
          return {
            oldTimer: time.oldTimer + 10,
            timer: time.timer + 10,
          };
        });
      }, 10);
    } else {
      clearInterval(key);
    }
    return () => {
      clearInterval(key);
    };
  }, [state.isActive, state.isPaused]);

  function handleStart() {
    if (!state.isActive) {
      setTimer((time) => {
        return {
          ...time,
          oldTimer: 0,
        };
      });
    }
    setState({ isActive: true, isPaused: false });
  }

  function handlePause() {
    setState((prevState) => {
      return {
        ...prevState,
        isPaused: !prevState.isPaused,
      };
    });
  }

  function handleReset() {
    setState((prevState) => {
      return {
        ...prevState,
        isActive: false,
      };
    });
    setTimer((time) => {
      return {
        ...time,
        timer: 0,
      };
    });

    if (status.length < 3) {
      status.push(timer.oldTimer);
    } else {
      let newMap = [...status.slice(1)];
      newMap.push(timer.oldTimer);
      status = [...newMap];
    }
  }

  return (
    <div
      id="extern"
      style={state.isActive ? { height: 270 + 'px' } : { height: 400 + 'px' }}
    >
      <div id="primary">
        <Cronometro result={timer.timer} />
        <div id="bodyBtn">
          <ControlButtons
            onFunctions={[handleStart, handleReset, handlePause]}
            Id={id}
            title={titles}
            state={state}
          />
        </div>
        <Status timer={status} state={state} />
      </div>
    </div>
  );
}

export default App;
