import React,{useContext} from 'react';
import {ProductsContext} from '../Data/Products'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

const Categories=()=>{
    const [products,setProducts] =useContext(ProductsContext)
    const categories=[
        {id:0,type:"vehicle"},
        {id:1,type:"Mobile"},
        {id:2,type:"Toys"},
        {id:3,type:"Houses"},
        {id:4,type:"MotoCycles"},
        {id:5,type:"Tablets"},
        {id:6,type:"Toys"},
        {id:7,type:"Houses"},
        {id:8,type:"MotoCycles"},
        {id:9,type:"Tablets"}
    ]
    return(
        <div>
            <ul className="nav bg-white m-0 pl-5 p-1" >
                <div className="d-flex mr-2">
                <li className="pr-1">ALL CATEGORIES</li>
                <box-icon type='solid' color="black" name='chevron-down' size="sm"/>
                </div>
                {
                    categories.map((list)=>
                            <li className="pr-3"  key={list.id}>
                                <NavLink to="Categoris" style={{color:"black"}}>
                                {list.type}
                                </NavLink>
                            </li>
                        
                    )
                }
            </ul>
        </div>
    )
}
export default Categories;