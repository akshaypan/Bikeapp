import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import AddBike from './Components/AddBike';
import ViewAllBike from './Components/ViewAllBike';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addbi' element={<AddBike/>}/>
        <Route path='/viewbi' element={<ViewAllBike/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
