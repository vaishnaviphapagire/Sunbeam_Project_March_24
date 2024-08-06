import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../Features/UserSlice';
import { useNavigate } from 'react-router-dom';
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPopover, setShowPopover] = useState(false);

    const onLogout = () => {
        dispatch(logoutAction());
        navigate('/Login');
    };

    const onEditProfile = () => {
        setShowPopover(!showPopover);
    };

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3" style={{ backgroundColor: `rgb(255, 241, 224)` }}>Edit Profile</Popover.Header>
            <Popover.Body>
                <form>
                    <div className="mb-3">
                        <label htmlFor="profileName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="profileName" placeholder="Enter your name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="profileEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="profileEmail" placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="profilePassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="profileEmail" placeholder="Enter your Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </Popover.Body>
        </Popover>
    );

    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse"  id="navbarText">
                        <div className='col-md-2 col-xs-2' style={{ backgroundColor: 'whitesmoke', height: '60px' }}>
                            Logo image/icon
                        </div>
                       
                        <div className="col-md-10 col-xs-8" style={{ fontSize: 'large', color: 'white' }}>
                            <center>
                                <h3>Exam Portal</h3>
                            </center>
                        </div>
                        <div className="d-flex flex-row-reverse col-md-2 col-xs-2" style={{ position: 'absolute', right: '0', marginRight: '2%' }}>
                            <OverlayTrigger
                                trigger="click"
                                placement="bottom"
                                overlay={popover}
                                show={showPopover}
                                onToggle={onEditProfile}>
                                <Button variant="light" className="p-2" style={{ backgroundColor: 'whitesmoke', height: '60px', width: '60px', borderRadius: '50%' }}>
                                    Profile Icon
                                </Button>
                            </OverlayTrigger>
                            <div className="p-2" style={{ color: 'white', marginTop: '4%' }}>
                                Welcome, Name
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
            </nav> */}
            <nav class="navbar navbar-expand-lg sticky-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Logo image/icon
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse  flex-row-reverse" id="navbarNav">
                        <ul class="navbar-nav ">
                       
                            <li class="nav-item">
                            Welcome, Name
                                <OverlayTrigger
                                    trigger="click"
                                    placement="bottom"
                                    overlay={popover}
                                    show={showPopover}
                                    onToggle={onEditProfile}>
                                    <Button variant="light" className="p-2" style={{ backgroundColor: 'whitesmoke', height: '60px', width: '60px', borderRadius: '50%', marginRight:'5px', marginLeft:'5px'  }}>
                                        Profile Icon
                                    </Button>
                                </OverlayTrigger>                               
                            </li>
                            <li class="nav-item" style={{ marginTop: '4%' }} >
                            <button className="btn " style={{ color: '#efe1d1' }} onClick={onLogout}>Logout</button>                          
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

