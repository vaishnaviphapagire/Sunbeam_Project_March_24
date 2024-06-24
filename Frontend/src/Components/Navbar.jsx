import { useDispatch } from "react-redux"
import { logoutAction } from "../Features/UserSlice"
import { useNavigate } from "react-router-dom"


function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logoutAction())
        navigate('/Login')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarText">

                        <div className='col-md-2' style={{ backgroundColor: 'whitesmoke', height: '60px' }}>
                            {/* Logo image/icon */}
                        </div>

                        <div className="col-md-8" style={{ fontSize: 'large', color: 'white' }} >
                            <center>
                                <h3>Exam Portal</h3>
                            </center>
                        </div>
                        <div className="d-flex flex-row-reverse" style={{ position: 'absolute', right: '0', marginRight: '2%' }}>
                            <div className="p-2" style={{ backgroundColor: 'whitesmoke', height: '60px', width: '60px', borderRadius: '50%' }}>
                                {/* Logo image/icon */}
                            </div>
                            <div className="p-2" style={{ color: 'white', marginTop: '4%' }}>
                                Welcome, Name{/* Name  */}
                            </div>
                            <div className="p-2" style={{ color: 'whitesmoke', marginTop: '4%' }}>
                                |
                            </div>
                            <div style={{ marginTop: '4%' }}>
                                <button className="btn" style={{ color: 'white' }} onClick={onLogout}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}
export default Navbar