import React from 'react';
import {connect } from 'react-redux'
import './card.css'
import car from '../Images/car.jpg'
import { withRouter } from "react-router";
import {
    NavLink
  } from "react-router-dom";
import '../App.css';


class Card extends React.Component{
    constructor(props){
        super(props);
        this.goToCarddetails=this.goToCarddetails.bind(this);
        this.state={
            imgsrc:props.imgsrc,
            itemName:props.name,
            price:props.price,
            selectedCard:{}
        }
    }
    goToCarddetails=(cardId)=>{
        this.setState({
            selectedCard:cardId
        })
        console.log("selected card:",this.state.selectedCard)
      }
    render(){
    return(
        <div class="card" onClick={this.goToCarddetails(this.props)}>
			<div class="d-flex mb-3 mt-2 mx-1 position-absolute w-100">
			  <div class="mr-auto px-1 bg-warning">Featured</div>
			  <div class="ml-auto  pr-2">
			  	{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"><path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z"></path></svg> */}
			  </div>
			</div>
			<div class="card_img mx-auto p-1 my-auto">
				<img  src={car}/>
			</div>
			<div class="card-body border-warning border-left">    
				<div class="d-flex flex-column bd-highlight mb-3">
				  <div class="bd-highlight"><h5>Rs ${this.state.price}</h5>
				  <div class="bd-highlight">{this.state.itemName}</div>
				  <div class="bd-highlight">
				  	<div class="d-flex w-100 position-relative">
					  <div class="mr-auto">Malir, Karchi</div>
					  <div class="ml-auto  ">cot 13</div>
					</div>
				  </div>
				</div>
            </div>
		</div>
        </div>
      
    )
    }
}

const mapStateToProps =(state)=>({
    products: state.products
    
})

const mapDispatchToProp =(dispatch)=>({
    // set values to the store
})
export default connect(null,null)(Card);