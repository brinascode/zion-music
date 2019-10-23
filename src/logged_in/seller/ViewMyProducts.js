import React from 'react';

//Routing
import { Link } from 'react-router-dom';
import axios from "axios"


//Foundation UI:
import Foundation from "react-foundation"
import { Row, Column, Button} from "react-foundation"

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


//-------------------------------------------------------------------COMPONENT-----------------------------------
class ViewMyProducts extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      userId:sessionStorage.getItem("userId"),
      products:[""]

    }

    this.getMyProducts = this.getMyProducts.bind(this)
 

  }

  

  getMyProducts(){
    
    const component = this
     
      axios.post("/getMyProducts",{userId:this.state.userId})
      .then(function(response){
        component.setState({products:response.data.reverse()})
       
      })
      .catch(function(error){console.log(error)})

  }

  componentDidMount(){

    this.getMyProducts()
  }
 

  render() {
    

    if(this.props.show){
       
      return (
        <div >

                <Column  large={12} small={12} medium={12} style={{height:"20vh",borderRadius:"5px"}} >
                      
                     <h1 style={{fontFamily:"moon"}}> My Products and Sales History </h1>

                 </Column>

                 <Column   large={6} small={12} medium={6}  >
                        <div style={{marginLeft:"40%"}}>

                            <h4 style={{fontFamily:"moon",fontSize:"4vh"}}> Products on sale  </h4>
                                  Here you can edit or delete products.

                                  
                              <Row>

                              {this.state.products.map( product => 
                                      <Column large={12} small={12} medium={6} style={{border:"solid 1.5px",marginTop:"3px"}}>
                                        <center>
                                        <h4>{product.name}</h4>
                                           
                                          
                                           
                                                <Link to={`/userview/editProduct:${product._id}`}>
                                                  <img src={process.env.PUBLIC_URL + "/images/icons/edit.png"} width="10%" style={{float:"left"}}></img>
                                              </Link>
                                            
                                           
                                            
                                            <Link to={`/userview/deleteProduct:${product._id}`}>
                                              <img src={process.env.PUBLIC_URL + "/images/icons/delete.png"} width="7%" style={{float:"right"}}></img>
                                              </Link>
                                            
                                              <img src={product.mainImage} width="100px" ></img>
                                          

                                        </center>
                                                
                                      </Column>
                                    
                                      )}
                              
                              </Row>
                            
                          </div>
                 </Column>

                 <Column  large={6} small={12} medium={6}  >
                 <div style={{marginRight:"40%"}}>
                      
                     <h4 style={{fontFamily:"moon",fontSize:"4vh"}}> Sales History </h4>
                </div>
                 </Column>

        </div>
      )
    }else{
      return(null)
    }
        
  }
}

export default ViewMyProducts
