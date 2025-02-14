import User from './User';
import './App.css';
import Interface from './Interface';
import Llm from './Llm';
import {myContext} from './Interface';

function App() {
  return (
    <div>
      <User/>
      <Interface/>
        {/* <Llm/> */}
      
    </div>
  );
}

export default App;
