import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Increment } from './Actions';
import { Decrement } from './Actions';
import newState from './Reducers/upDown';

function App() {

  const currentState = useSelector((state)=>state.newState)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div className="content">
<div className="headerText">React-Redux Counter App</div> 

<br/>
<div className="counter"> 
<button  onClick={()=>dispatch(Decrement())}> - </button>
<input type="text" value={currentState}/>
<button onClick={()=>dispatch(Increment())}> + </button>

</div>

    </div>

    </div>
  );
}

export default App;