import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Sigin from './components/Auth/Sigin';
import Portal from './components/Portal/Portal';
import Table from './components/Portal/Table';
import Createurl from './components/Portal/Createurl';
import View from './components/Portal/View';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/Signup' element={<Sigin/>}/>
    <Route path='/home' element={<Portal/>}>
      <Route index element={<Table/>}/>
      <Route path='/home/newurl' element={<Createurl/>}/>
      <Route path='/home/view' element={<View/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
