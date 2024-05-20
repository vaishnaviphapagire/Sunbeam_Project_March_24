import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import StudentSidebar from './Components/StudentSidebar';
import EventBar from './Components/EventBar';

function App() {

  return <div className='container-fluid'>

    <div>
      <Navbar></Navbar>
    </div>

    <div>
      <div className='col-md-2 col-sm-12 sidebar'>
        <StudentSidebar></StudentSidebar>
      </div>

      <div className='col-md-8 col-sm-12'>
        <Routes>
        </Routes>
      </div>

      <div className='col-md-2 col-sm-12' style={{position:'absolute', right:'0'}}>
        <EventBar></EventBar>
      </div>
    </div>

  </div>




}

export default App;
