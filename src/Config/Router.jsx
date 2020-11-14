import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from '../Container/Home';
import {ProductsProvider} from '../Data/Products'
import ViewProducts from '../Container/ViewProducts';
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer';
import CatogoryNav from '../Components/CatogoryNav'
import Chat from '../Container/Chat'

const AppRouter=()=>{
    
    return(
        <div>
            <ProductsProvider>
            
            <Navigation/>
            <CatogoryNav/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/view" component={ViewProducts}/>
                <Route exact path="/chat" component={Chat}/>
                
            </Switch>
            <Footer></Footer>
            </ProductsProvider>
        </div>
    )
}
export default AppRouter;