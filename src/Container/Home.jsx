import React from 'react';
import hdimg from '../Images/background.PNG'
import {connect} from 'react-redux'
import FooterAd from '../Components/FooterAd';
import Card from '../Components/Card'
import ads from '../Images/ads.PNG'
import ads0 from '../Images/ads0.PNG'
import car from '../Images/car.jpg'
import {
    NavLink
  } from "react-router-dom";
import {setProduct} from '../Store/Action'



function Home(props){
    
       
        
    return(
        
        <div className="">
            <div className="">
                <img className="w-100" src={hdimg}/>
            </div>

            <div className="container my-1">
                <div className="d-flex justify-content-center">
                    <img src={ads0} />
                </div>
            </div>

           <div className="container-fluid ">
                <div className="row">
                    <div className="col-11 mx-auto">
                    <h4 className=" pt-5 ">Fresh recommendations</h4>
                    <div className="row">
                    {
                        props.products.map(product=>(
                            
                            <div className="col-md-3 col-sm-12 mb-3 m-0"  key={product.id} >
                                
                                {/* <Card
                                imgsource={product.imgsrc}
                                price={product.price}
                                name={product.name}
                                key={product.id}
                                />
                                */}
                                <NavLink to={
                                    {
                                        pathname:"/view",
                                        state:{
                                            from:'root',
                                            item:product
                                        }
                                    }
                                }>
                                <div class="card m-0" >
                                    <div class="d-flex mb-3 mt-2  position-absolute w-100">
                                        {
                                            product.isFeatured ? <div class="mr-auto px-1 bg-warning">Featured</div>:<div/>
                                        }
                                        
                                        <div class="ml-auto  pr-2">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"><path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z"></path></svg> */}
                                            <box-icon name='heart'size="sm"></box-icon>
                                        </div>
                                    </div>
                                    <div class="card_img mx-auto p-1 my-auto">
                                        <img  src={product.imgsrc}/>
                                    </div>

                                    <div class="card-body border-warning border-left">    
                                        <div class="d-flex flex-column bd-highlight mb-3">
                                    <div class="bd-highlight"><h5>Rs {product.price}</h5>
                                        <div class="bd-highlight">{product.name}</div>
                                        <div class="bd-highlight">
                                            <div class="d-flex w-100 position-relative">
                                    <div class="mr-auto">{product.streat}, {product.city}</div>
                                            <div class="ml-auto  ">{product.postedDate}</div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </NavLink>
                                
                            </div>
                        ))
                        
                    }
                    
            </div>
                    </div>
                </div>
                
           </div>

            <div className="container my-5">
                <div className="d-flex justify-content-center">
                    <img src={ads} />
                </div>
            </div>

          <FooterAd/>
        </div>
    )
    }




const mapStateToProps =(state)=>({
    products: state.products,
    current_user:state.current_user
    
})
const mapDispatchToProp =(dispatch)=>({
    // set values to the store
    setProduct: (product) => dispatch(setProduct(product))
})
export default connect(mapStateToProps,mapDispatchToProp)(Home);
