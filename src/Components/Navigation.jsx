import React from 'react';
import { Navbar,Nav,Modal,FormControl,Button,InputGroup,DropdownButton,Dropdown} from 'react-bootstrap';
import {
  NavLink
} from "react-router-dom";
import '../App.css';
import 'boxicons'
import {connect} from 'react-redux';
import {search,setData} from '../Store/Action'
import {bindActionCreators} from 'redux';
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom';
function Search1(){
    return(

      <form className=" btn_white  p-0 ">
                <div className="input-group ">
                <div className="input-group-prepend">
                        <button className="btn btn_white m-0 p-1 rounded-right-0 border-0">
                      <box-icon name='search'></box-icon>
                      </button>
                  </div>
                <input className="input btn_search1 p-2  border-0" 
                  placeholder="Country"></input>
                
                </div>
      </form>
    )
}

function Search2(){
  
    return(
        <div>
              <form className=" border p-0">
                <div className="input-group">
                  <input 
                  className="input btn_search2 p-2  border-right-0" 
                  placeholder="Find Cars, Mobile Phone and more ..."
                  
                  ></input>
                  <div className="input-group-prepend">
                        <NavLink to="/searchProducts" className="btn btn-dark m-0 p-1 rounded-left-0">
                      <box-icon name='search' color='#ffffff'></box-icon>
                      </NavLink>
                  </div>
                </div>
                
                
              </form>
        </div>
    )
}


function LoginModel() {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="default" onClick={setShow}>
          Login
        </Button>
  
        <Modal show={show} size="md" dialogClassName={"primaryModal"}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Button variant="default" className="border border-dark w-100 m-1">Continue with phone</Button>
              <Button variant="default" className="border border-dark w-100 m-1">Continue with Facebook</Button>
              <Button variant="default" className="border border-dark w-100 m-1">Continue with Google</Button>
              <Button variant="default" className="border border-dark w-100 m-1">Continue with Email</Button>
          </Modal.Body>
          <Modal.Footer>
          We won't share your personal details with anyone
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

function Navigation(){
    return(
        <div>
            <Navbar bg="light" className=" p-0" >
                    <Navbar.Brand className="">
                        
                        <Link to="/"><img className="ml-5" src={logo} width="55" ></img></Link>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link>
                        <Search1/>
                    </Nav.Link>
                    <Nav.Link >
                        <Search2/>
                    </Nav.Link>
                    
                    <Nav.Link >
                        <LoginModel/>
                    </Nav.Link>
                    <Button className="btn btn-default round-1 ">Sell</Button>
                    
                    </Nav>
                    
            </Navbar>

        </div>
    )
}


export default Navigation;