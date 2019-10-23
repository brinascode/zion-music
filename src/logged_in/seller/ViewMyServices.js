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
class ViewMyServices extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        userId:sessionStorage.getItem("userId"),
        services:[""]
    }

    this.getMyServices = this.getMyServices.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    

  }

  getMyServices(){
    
    const component = this

    axios.post("/getMyServices",{userId:this.state.userId})
    .then(function(response){
      component.setState({services:response.data})
      console.log(component.state)
       console.log(response.data)
    }).catch(function(error){console.log(error)})


  }

  deleteItem(e){
    e.stopPropagation()
    alert("het")
    if(e.target.id === "deleteItem"){
      alert("hey")
    } 

    if(window.confirm("Do you really want to delete this posted sale?")){
          axios.post("/deleteItem",{itemId:"itemId"})
          .then(function(response){
           
          }).catch(function(error){console.log(error)})
    }

  }

  componentDidMount(){
    this.getMyServices()
    
    
    
  }

 

  render() {

    //Manually adding handlers to stuf
    /*if(this.state.services.length > 0){

      var button = document.getElementById("deleteItem")
    
    }*/
    

    if(this.props.show){
       
      return (
        <div className="">

        
                  <Column  large={12} small={12} medium={12} style={{height:"20vh",borderRadius:"5px"}} >
                      
                      <h1 style={{fontFamily:"moon"}}> My Services, Requests and History </h1>
 
                  </Column>

                  <Column   large={6} small={12} medium={6}  >
                        <div style={{marginLeft:"40%"}}>

                            <h4 style={{fontFamily:"moon",fontSize:"4vh"}}> Services I offer </h4>
                                You can edit or delete.
                              <Row>

                              {this.state.services.map( service => 
                                      <Column large={12} small={12} medium={6} style={{border:"solid 1.5px",marginTop:"3px"}}>
                                        <center>
                                        <h4>{service.name}</h4>
                                        <p> Role: {service.mainCategory}</p>
                                           
                                          
                                           
                                                <Link to={`/userview/editProduct:${service._id}`}>
                                                  <img src={process.env.PUBLIC_URL + "/images/icons/edit.png"} width="10%" style={{float:"left"}}></img>
                                              </Link>
                                            
                                           
                                            
                                            <Link to={`/userview/deleteProduct:${service._id}`}>
                                              <img src={process.env.PUBLIC_URL + "/images/icons/delete.png"} width="7%" style={{float:"right"}}></img>
                                              </Link>
                                            
                                              <img src={service.mainImage} width="100px" ></img>
                                          

                                        </center>
                                                
                                      </Column>
                                    
                                      )}
                              
                              </Row>
                            
                          </div>
                 </Column>

                 <Column  large={6} small={12} medium={6}  >
                    <div style={{marginRight:"40%"}}>
                          
                        <h4 style={{fontFamily:"moon",fontSize:"4vh"}}> Requests </h4>
                    </div>
                 </Column>














                
             
      
       
        </div>
      )
    }else{
      return(null)
    }
        
  }
}




export default ViewMyServices
