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
import CompletedQuiz from './Pages/CompletedQuiz';
import TeacherDashboard from './Pages/TeacherDashboard';
import AddQuiz from './Pages/AddQuiz';
import TeachResult from './Pages/TeachResult';
import QuizDetails from './Pages/QuizDetails';
import ScheduledQuiz from './Pages/ScheduledQuiz';

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
           {/* <Route path='/StudentDashboard' element={<StudentDashboard />} /> */}
           <Route path='/TeacherDashboard' element={<TeacherDashboard/>}/>

           <Route path='/completed-quiz' element={<CompletedQuiz />} />
           <Route path='/ScheduledQuiz' element={<ScheduledQuiz/>}/>
           <Route path='/AddQuiz' element={<AddQuiz/>}/>
           <Route path='/TeachResult' element={<TeachResult/>}/>
           <Route path='/Help' element={<Help />} /> 
           <Route path='/QuizDetails' element={<QuizDetails/>}/>

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
