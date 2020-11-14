import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div className="container-fluid" style={{backgroundColor:"#ebeeef"}}>
                <div className="container p-2">
                    <div className="row">
                        <div className="col-11 mx-auto">
                        <div className="row">
                        <div className="col-md-3">
                            <p>POPULAR CATEGORIES</p>
                            <ul >
                                <li>Cars</li>
                                <li>Flate for rent</li>
                                <li>Jobs</li>
                                <li>Mobile phone</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                        <p>TRENDING SEARCHES</p>
                            <ul>
                                <li>Bikes</li>
                                <li>Watches</li>
                                <li>Books</li>
                                <li>Dogs</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                        <p>ABOUT US</p>
                            <ul>
                                <li>Cars</li>
                                <li>Flate for rent</li>
                                <li>Jobs</li>
                                <li>Mobile phone</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                        <p>OLX</p>
                            <ul>
                                <li>Cars</li>
                                <li>Flate for rent</li>
                                <li>Jobs</li>
                                <li>Mobile phone</li>
                            </ul>
                        </div>
                        
                    </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        )
    }
}
export default Footer;