import logo from './logo.svg';
import './App.css';
import { Routes, Route, redirect } from 'react-router-dom';
import Navbar from './Components/Navbar';
import StudentSidebar from './Components/StudentSidebar';
import AdminSidebar from './Components/AdminSidebar';
import EventBar from './Components/EventBar';
import StudentDashboard from './Pages/StudentDashboard';
import TeacherSidebar from './Components/TeacherSidebar';
import Help from './Pages/Help';
import Login from './Pages/Login';
import { useSelector } from 'react-redux';
import TeacherDashboard from './Pages/TeacherDashboard';
import AdminDashboard from './Pages/AdminDashboard';
import CompletedQuiz from './Pages/CompletedQuiz';
import TeacherAddQuiz from './Pages/AddQuiz';
import TeachResult from './Pages/TeachResult';
import TeacherQuizDetails from './Pages/TeacherQuizDetails';
import ScheduledQuiz from './Pages/ScheduledQuiz';
import AddAnnouncement from './Pages/AddAnnouncement';
import AddCategory from './Pages/AddCategory';
function App() {

  const user = useSelector((state) => state.user)
  return (
    <div>
      {
        user.loginStatus ? (
          <div className='container-fluid'>
            <div className='row col-12'>
              {user.loginStatus && < Navbar></Navbar>}
            </div>
            <div className='container-fluid row' > 
              <div className='col-md-2 sidebar shadow'  onLoad={redirect}>
                {
                  user.loginRole === "Admin" ? <AdminSidebar />
                    : (user.loginRole === "Teacher" ? <TeacherSidebar /> : <StudentSidebar />)
                }
              </div>
              <div className='col-md-8 offset-md-2' >
                <Routes>
                  {
                    user.loginRole === "Admin" ? <Route path='/' element={<AdminDashboard />} />
                      : (user.loginRole === "Teacher" ? <Route path='/' element={<TeacherDashboard />} />
                        : <Route path='/' element={<StudentDashboard />} />)
                  }
                  <Route path='/StudentDashboard' element={<StudentDashboard />} />
                  <Route path='/TeacherDashboard' element={<TeacherDashboard />} />
                  <Route path='/AdminDashboard' element={<AdminDashboard />} />
                  <Route path='/CompletedQuiz' element={<CompletedQuiz />} />
                  <Route path='/ScheduledQuiz' element={<ScheduledQuiz />} />
                  <Route path='/AddQuiz' element={<TeacherAddQuiz />} />
                  <Route path='/TeachResult' element={<TeachResult />} />
                  <Route path='/QuizDetails' element={<TeacherQuizDetails />} />
                  <Route path='/Help' element={<Help />} />
                  <Route path='/AddAnnouncement' element={<AddAnnouncement/>}/>
                  <Route path='/AddCategory' element={<AddCategory/>}/>
                </Routes>
              </div>
              <div className='col-md-2' >

                {(user.loginRole === "Teacher") && <EventBar></EventBar>}
                {(user.loginRole === "Student") && <EventBar></EventBar>}
                {(user.loginRole === "Admin") && <EventBar></EventBar>}
              </div>
            </div>
          </div>

        ) : (
          <div>
            <Login></Login>
          </div>

        )
      }
    </div>



  )

}

export default App;
