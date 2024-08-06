// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { loginAction } from "../Features/UserSlice";
// import { useNavigate } from "react-router-dom";

// export default function Register() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');
//     const [phoneNo, setPhoneNo] = useState('');
//     const [role, setRole] = useState('');

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     // const OnLogin = () => {
//     //     // Perform your login logic here (e.g., send credentials to a server)
//     //     // For simplicity, just check if username and password are not empty
//     //     if (username.length === 0) {
//     //         alert("Enter Username");
//     //     } else if (password.length === 0) {
//     //         alert("Enter password");
//     //     } else {
//     //         // Call the UserLogin API
//     //         // get Name, Token, Role 

//     //         // Set Role (this should be based on API response, here it's hardcoded for simplicity)
//     //         setRole("Teacher"); // Example hardcoding, replace with actual logic

//     //         dispatch(loginAction(role));
//     //         navigate('/');
//     //     }
//     // };

//     const OnRegister = () => {
//         alert("User Registration Completed!");
//     };

//     return (
//         <div className="container">
//             <div className="row shadow col-md-6 offset-md-3" style={{ borderRadius: '10px', marginTop: '150px' }}>
//                 <div className="heading" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
//                     <h2><center>Teacher Registration</center></h2>
//                 </div>
//                 <div className="mb-3 mt-3">
//                     <label htmlFor="formGroupExampleInput" className="mb-3">Username</label>
//                     <input type="text" className="form-control" placeholder="Username" value={username}
//                         onChange={(e) => setUsername(e.target.value)} />
//                 </div>
//                 <div className="mb-3 mt-3">
//                     <label htmlFor="formGroupExampleInput" className="mb-3">Email</label>
//                     <input type="email" className="form-control" placeholder="Email" value={email}
//                         onChange={(e) => setEmail(e.target.value)} />
//                 </div>
//                 <div className="mb-3 mt-3">
//                     <label htmlFor="formGroupExampleInput2" className="mb-3">Phone No</label>
//                     <input type="number" className="form-control" placeholder="Phone No" value={phoneNo}
//                         onChange={(e) => setPhoneNo(e.target.value)} />
//                 </div>
//                 <div className="mb-3 mt-3">
//                     <label htmlFor="formGroupExampleInput2" className="mb-3">Password</label>
//                     <input type="password" className="form-control" placeholder="Password" value={password}
//                         onChange={(e) => setPassword(e.target.value)} />
//                 </div>
//                 <div className="mb-3 mt-3">
//                     <label htmlFor="formGroupExampleInput2" className="mb-3">Role</label>
//                     <select
//                         className="form-control"
//                         id="roleSelect"
//                         value={role}
//                         onChange={(e) => setRole(e.target.value)}
//                     >
//                         <option value="">Select Role</option>
//                         <option value="Admin">Admin</option>
//                         <option value="Teacher">Teacher</option>
//                         <option value="Student">Student</option>
//                     </select>
//                 </div>
//                 <center>
//                     <button className="btn btn-bd-primary mb-3" onClick={OnRegister}>Register</button>
//                     {/* <button className="btn btn-bd-success mb-3" onClick={OnLogin}>Login</button> */}
//                 </center>
//             </div>
//         </div>
//     );
// }


import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../Features/UserSlice";
import { useNavigate, useLocation } from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const location = useLocation();
    const role = location.state?.role || '';

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const OnLogin = () => {
        if (username.length === 0) {
            alert("Enter Username");
        } else if (password.length === 0) {
            alert("Enter password");
        } else {
            dispatch(loginAction(role));
            navigate('/');
        }
    };

    const OnRegister = () => {
        alert("User Registration Completed!");
    };

    const renderFormFields = () => {
        if (role === "Teacher") {
            return (
                <>
                    <div className="mb-3 mt-3">
                        <label htmlFor="teacherId" className="mb-3">Teacher ID</label>
                        <input type="text" className="form-control" placeholder="Teacher ID" />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="subject" className="mb-3">Subject</label>
                        <input type="text" className="form-control" placeholder="Subject" />
                    </div>
                </>
            );
        } else if (role === "Student") {
            return (
                <>
                    <div className="mb-3 mt-3">
                        <label htmlFor="studentId" className="mb-3">Student ID</label>
                        <input type="text" className="form-control" placeholder="Student ID" />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="course" className="mb-3">Course</label>
                        <input type="text" className="form-control" placeholder="Course" />
                    </div>
                </>
            );
        }
        return null;
    };

    return (
        <div className="container">
            <div className="row shadow col-md-6 offset-md-3 mt-3 mb-5" style={{ borderRadius: '10px' }}>
                <div className="heading" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                    <h2>Exam Portal Registration Page</h2>
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="formGroupExampleInput" className="mb-3">Username</label>
                    <input type="text" className="form-control" placeholder="Username" value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="formGroupExampleInput" className="mb-3">Email</label>
                    <input type="email" className="form-control" placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="formGroupExampleInput2" className="mb-3">Phone No</label>
                    <input type="number" className="form-control" placeholder="Phone No" value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)} />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="formGroupExampleInput2" className="mb-3">Password</label>
                    <input type="password" className="form-control" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="roleSelect" className="mb-3">Role: {role}</label>
                </div>
                {renderFormFields()}
                <center>
                    <button className="btn btn-bd-primary mb-3" onClick={OnRegister}>Register</button>
                    <button className="btn btn-bd-success mb-3" onClick={OnLogin}>Login</button>
                </center>
            </div>
        </div>
    );
}

