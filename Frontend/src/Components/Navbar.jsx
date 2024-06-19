function Navbar() {


    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarText">
                        
                            <div className='col-md-2' style={{ backgroundColor: 'whitesmoke', height: '60px' }}>
                                {/* Logo image/icon */}
                            </div>
                            
                            <div className="col-md-8" style={{ fontSize: 'large', color: 'white'}} >
                            <center>
                            <h3>Student Portal</h3>
                            </center>
                            </div>
                            <div className="d-flex flex-row-reverse col-md-2" style={{ position: 'absolute', right: '0', marginRight: '2%' }}>
                                <div className="p-2" style={{ backgroundColor: 'whitesmoke', height: '60px', width: '60px', borderRadius: '50%' }}>
                                    {/* Logo image/icon */}
                                </div>
                                <div className="p-2" style={{ fontSize: 'large', color: 'white', marginTop: '4%' }}>
                                    Name{/* Name  */}
                                </div>
                            </div>
                        
                    </div>
                </div>
            </nav>
        </div>
    )

}
export default Navbar