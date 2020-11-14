import React,{useContext,useState} from 'react';
import {connect} from 'react-redux'
import {useLocation} from 'react-router'
import './styles.css'
function ViewProducts (){
        const location = useLocation();
        console.log(location.state.item.id)
        return (
            <div className="container-fluid pt-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="container  border slider mb-2">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner ">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={location.state.item.imgsrc}  alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={location.state.item.imgsrc}  alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={location.state.item.imgsrc}  alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev bg-dark" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next bg-dark" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>


                        {/* slider end */}

                        <div className="container=fluid border border-dark p-3 mb-3">
                            <h4>Details</h4>
                            <div className="row">
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6">Make</div>
                                        <div className="col-6">FX</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">Year</div>
                                        <div className="col-6">2020</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">Fuel</div>
                                        <div className="col-6">Hybrid</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">Registerd in</div>
                                        <div className="col-6">Karchi</div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6">Make</div>
                                        <div className="col-6">FX</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">Make</div>
                                        <div className="col-6">FX</div>
                                    </div>
                                </div>
                            </div>
                            <hr className="border" />

                            <h4>Description</h4>
                            <p>{location.state.item.dspt}</p>

                        </div>
                        <div>
                            <div id="carouselExampleControls" className="carousel" data-ride="carousel">
                                <h4>Related ads</h4>
                                <div className="carousel-inner ">
                                    <div className="carousel-item active  d-flex">
                                        
                                    </div>
                                    <a className="carousel-control-prev  bg-light" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next bg-light" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                    
                    <div className="col-md-4">
                        <div className="container border p-3 mb-3">
        <h3>Rs {location.state.item.price}</h3>
                            <p>{location.state.item.used}</p>
                            <p className="">{location.state.item.dspt}</p>

                            <div class="d-flex">
                                <div class="p-2">{location.state.item.city}, {location.state.item.streat}</div>
                                <div class="ml-auto p-2">25- oct</div>
                            </div>
                        </div>

                        <div className="container border p-3 mb-3">
                            <h3>Seller Description</h3>
                            <div className="d-flex">
                                <div class="p-2 ">
                                    <i className="bx bxs-user-circle bx-md"><box-icon type='solid' name='user-circle'></box-icon></i>

                                </div>
                                <div class="p-2">
                                    <p className="m-0">Parkash suthar</p>
                                    <p className="m-0">Member scince jan 2020</p>
                                </div>
                                <div class="ml-auto p-2">
                                    <button className="btn btn-default">
                                        <box-icon type='solid' name='chevron-right'></box-icon>
                                    </button>
                                </div>
                            </div>
                            <button className="btn btn-dark w-100">chat with seller</button>
                            <div class="d-flex justify-content-center mt-2">
                                <div class="p-2">
                                    <box-icon name='phone' ></box-icon> ** *** ****
                                </div>
                                <div class="p-2"><a href="#">show number</a></div>
                            </div>
                        </div>


                        <div className="container border p-3 mb-3">
                            <h3>Car Inspection</h3>
                            <div className="d-flex">
                                <div class="p-2 ">
                                    <img width="70" src="https://tpc.googlesyndication.com/simgad/12480674539933903844?" />
                                </div>
                                <div class="p-2">
                                    <p className="m-0">Find out the real condition of this car for just Rs 2500</p>
                                </div>
                                <div class="ml-auto p-2">
                                    <button className="btn btn-default">
                                        <box-icon type='solid' name='chevron-right'></box-icon>
                                    </button>
                                </div>
                            </div>
                            <button className="btn btn-primary w-100">chat with seller</button>

                        </div>

                        <div className="container border p-3 mb-3">
                            <h3>Posted in</h3>
                            <p>Karachi, Sindh</p>
                            <div className="d-flex">
                                <img width="370" src="https://maps.googleapis.com/maps/api/staticmap?center=31.474%2C74.304&language=en&size=640x256&zoom=15&scale=1&channel=olx-latam-ar-web-dev&key=AIzaSyAChxbDof4fywIkC6U-7MCgXBpUp4t2DiA&signature=MnxVl1prwpMG9E5YS8WBNFHPZ1I=" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

const mapStateToProps =(state)=>({
    current_user: state.current_user
})

export default connect(mapStateToProps,null)(ViewProducts);
