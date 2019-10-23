//Our react imports
import React, { Component } from 'react';

//Foundation UI:
import Foundation from "react-foundation"
import { Row, Column} from "react-foundation"


//Routing
import { Link } from 'react-router-dom';

//Sidebar stuff
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

class UserHeaderMobile extends Component {
  
 
  render() {

   
      return (
        <div >
  
          <Row large={12} medium={12} small={12}>
                
                <Column large={12} 
                style={{width:`105vw`,position:"fixed",boxShadow:"0px 1px 2px #888888",backgroundColor:"white",borderBottom:"",borderColor:"black"}}
                className="">
                    <center > 
                     
                        <h1 style={{fontSize:`8vw`,color:"black"}} >     
                         <img src={process.env.PUBLIC_URL + "/images/icons/hamburger.png"} width="8%" style={{marginTop:"2.8%",float:"left"}}/> 
                         MuNeeds </h1> 
                    
  
                        
                      </center>
  
                     </Column>
          </Row>
  
        </div>
      );
    
    
    
  }
}

export default UserHeaderMobile;
