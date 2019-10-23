//Our react imports
import React, { Component } from 'react';

//Foundation UI:
import Foundation from "react-foundation"
import { Row, Column} from "react-foundation"


//Routing
import { Link } from 'react-router-dom';

//Sidebar stuff
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

class UserHeader extends Component {

   
  
  render() {

    
      return (
        <div >
  
          <Row large={12} medium={12} small={12}>
                
                <Column large={12} 
                style={{width:`105vw`,position:"fixed",boxShadow:"0px 0px 1.5px #888888",backgroundColor:"black",borderBottom:"",borderColor:"black"}}
                className="">
                    <center>   
                        <h1 style={{fontSize:`2.75vw`,color:"white"}}>ZionMusic</h1> 
  
                        
                      </center>

                      <Column large={3} medium={3} small={3} class="" >

                        <Link to="userview">
                        <center> <h4 style={{color:"white"}}>  Home </h4>  </center>
                        </Link>
                    </Column>


                      <Column large={3} medium={3} small={3} >
                      <Link to="userview/events">
                          <center> <h4 style={{backgroundColor:"",color:"white"}}> Concerts </h4>  </center> 
                        </Link>
                      </Column>


                      <Column large={3} medium={3} small={3} >
                      <Link to="/userview/about">
                      <center><h4 style={{backgroundColor:"",color:"white"}}> About </h4> </center>
                       
                      </Link>
                      </Column>


                      <Column large={3} medium={3} small={3} onClick={this.login}>
                      <Link to='/userview/logout' style={{color:"black"}}>
                            <center><h4 style={{backgroundColor:"",color:"white"}}> Log out </h4> </center>
                      </Link>
                      </Column>
  
                     </Column>



                    
          </Row>
  
        </div>
      );
    
    
    
  }
}

export default UserHeader;
