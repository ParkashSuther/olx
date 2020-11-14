import React from 'react';
import footerImg from '../Images/phone-app.jpg'
import playstore from '../Images/playstore.png'
class FooterAd extends React.Component{
    render(){
        return(
            <div className="container-fluid" style={{backgroundColor:"#f7f7f9"}}>
            <div className="container " >
                        <div className="row">
                            <div className="col-md-12 mx-auto">
                                <div className="row">
                                <div className="col-md-4 pl-3">
                                    <img src={footerImg} />
                                </div>
                                <div className="col-md-4 my-auto pl-5">
                                    <h3>TRY THE OLX APP</h3>
                                    <h6>Buy, sell and find just about anything using the app on your mobile.</h6>
                                </div>
                                <div className="col-md-4">
                                    <div class="d-flex flex-column justify-content-center border-left">
                                        <div className="d-flex justify-content-center ">
                                            <div class="p-2">GET YOUR APP TODAY</div>
                                        </div>
                                        <div className="d-flex justify-content-center ">
                                            <div class="p-2 bd-highlight"><img src={playstore} /></div>
                                            <div class="p-2 bd-highlight"><img src={playstore} /></div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
export default FooterAd;