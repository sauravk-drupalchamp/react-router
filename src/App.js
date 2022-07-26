import './App.css';
import {Homepage, About} from './components';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path='/' exact element={<Homepage />}/>
        <Route path='/about' exact element={<About />}/>
      </Routes>
  );
}

export default App;
