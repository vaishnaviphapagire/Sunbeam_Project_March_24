export default function EventBar() {

    return (
        <div> 

            <div className="card mb-2 mt-2" style={{maxWidth:'18rem'}}>
                <div className="card-header" style={{backgroundColor:'rgb(247, 172, 80)', color:'white'}}>EVENT</div>
                <div className="card-body">
                    <h5 className="card-title">Primary card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {/* Mapping to event table, return <h> and <p> */}

                </div>
            </div>

            <div className="card mb-2" style={{maxWidth:'18rem'}}>
                <div className="card-header" style={{backgroundColor:'rgb(247, 172, 80)', color:'white'}}>ANNOUNCEMENT</div>
                <div className="card-body">
                    <h5 className="card-title">Primary card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {/* Mapping to amnnouncement table, return <h> and <p> */}
                   
                </div>
            </div>

        </div>
    )
}