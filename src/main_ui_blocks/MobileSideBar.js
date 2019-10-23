//Our react imports
import React, { Component } from 'react';

//Foundation UI:
import Foundation from "react-foundation"
import { Row, Column} from "react-foundation"


//Routing
import { Link } from 'react-router-dom';

//Sidebar stuff
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

class MobileSideBar extends Component {
  
 
  
  render() {

      return (
        <div >
  
          <Row large={12} medium={12} small={12}>
                
                <Column large={12} 
                style={{height:"100%",width:`105vw`,position:"fixed",padding:"4%",boxShadow:"0px 1px 4px #888888",backgroundColor:"white",borderColor:"black"}}
                className="gradient-backk">
                   
              
                                          <center >
                                              <Link to='/userview' style={{color:"black",marginLeft:"-2%"}} >
                                                    <img src={process.env.PUBLIC_URL + "/images/icons/home.png"} width="7%"></img>
                                              </Link>
                                              
                                              <Link to='/userview/catalog' style={{color:"black",marginLeft:"20%"}} >
                                                    <img src={process.env.PUBLIC_URL + "/images/icons/shop.png"} width="7%"></img>
                                              </Link>

                                              <Link to='/userview/sell:menu' style={{color:"black",marginLeft:"20%"}}>
                                                      <img src={process.env.PUBLIC_URL + "/images/icons/banknotes.png"} width="7%"></img>
                                              </Link>


                                              <Link to='/userview/settings' style={{color:"black",marginLeft:"20%"}}>
                                                    <img src={process.env.PUBLIC_URL + "/images/icons/settings.png"} width="7%"></img>
                                            </Link>
                                        </center>
                        
                </Column>
       
          </Row>
  
        </div>
      );

  }
}

export default MobileSideBar;
