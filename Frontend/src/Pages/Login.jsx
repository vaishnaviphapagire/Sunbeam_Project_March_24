import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../Features/UserSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const OnLogin = () => {
        // Perform your login logic here (e.g., send credentials to a server)
        // For simplicity, just check if username and password are not empty
        if (username.length === 0)
            alert("Enter Username")
        else if (password.length === 0)
            alert("Enter password")
        else {
            //Call the UserLogin Api
            // get Name, Token, Role 

            // set Role
            // setRole("Teacher"); 
            dispatch(loginAction(role))
            navigate('/')
        }
    };


    return (
        <div className="container" >

            <div className=" row shadow col-md-6 offset-md-3" style={{ borderRadius: '10px', marginTop: '150px' }}>

                <div className="heading" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                    <h2>Exam Portal Login Page</h2>
                </div>

                <div class="mb-3 mt-3">
                    <label for="formGroupExampleInput" class="mb-3">Username</label>
                    <input type="text" class="form-control" placeholder="Username" value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div class="mb-3 mt-3">
                    <label for="formGroupExampleInput2" class="mb-3">Password</label>
                    <input type="text" class="form-control" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div class="mb-3 mt-3">
                    <label for="formGroupExampleInput2" class="mb-3">Role</label>
                    <input type="text" class="form-control" placeholder="Admin/Teacher/Student" value={role}
                        onChange={(e) => setRole(e.target.value)} />
                </div>
                <center>
                    <button className="btn btn-bd-primary mb-3" onClick={OnLogin}>Login</button>
                </center>
            </div>
        </div>
    );
}