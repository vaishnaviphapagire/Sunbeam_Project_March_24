import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import StudentSidebar from './Components/StudentSidebar';
import AdminSidebar from './Components/AdminSidebar';
import EventBar from './Components/EventBar';
import StudentDashboard from './Pages/StudentDashboard';
import TeacherSidebar from './Components/TeacherSidebar';
import Help from './Pages/Help';

function App() {

  return (

    <div className='container-fluid'>

      <div className='row col-12'>
        <Navbar></Navbar>
      </div>

      <div className='container-fluid row' style={{ border: "1px solid black" }}>
        <div className='col-md-2 sidebar' style={{ border: "1px solid black" }}>
          {/* <StudentSidebar></StudentSidebar> */}
          {/* <AdminSidebar></AdminSidebar> */}
          <TeacherSidebar></TeacherSidebar>
        </div>

        <div className='col-md-8 offset-md-2' style={{ border: "1px solid black" }}>
          <Routes>
            {/* <Route path='/' element={<Dashboard/>}/>     */}
            <Route path='/StudentDashboard' element={<StudentDashboard />} />
            <Route path='/Help' element={<Help />} />

          </Routes>
        </div>

        <div className='col-md-2' style={{ border: "1px solid black" }}>
          <EventBar></EventBar>
        </div>
      </div>

    </div>

  )

}

export default App;
