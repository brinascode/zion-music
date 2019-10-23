import React from 'react';

//Routing
import { Link } from 'react-router-dom';


//Foundation UI:
import Foundation from "react-foundation"
import { Row, Column, Button} from "react-foundation"

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';




//-------------------------------------------------------------------COMPONENT-----------------------------------
class SideBar extends React.Component {
  
    constructor(props){
        super(props)
        this.state = { 
            windowWidth: window.innerWidth
                    };
          this.handleWindowSizeChange =  this.handleWindowSizeChange.bind(this)

    }

      // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillMount(){
    window.addEventListener("resize",this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange(){
    this.setState({windowWidth:window.innerWidth})
  }


    
    render() {


        const width = this.state.windowWidth
        const isMobile = width <= 500
    
        
    
        if(isMobile){
          
        }
        else{
         
        }
      
          return (
                        <SideNav
                            onSelect={(selected) => {
                                // Add your code here
                            }}
                            style={{boxShadow:"0px 2px 1.5px #888888",position:"fixed",background:"white",width:"10px"}}
                            
                            >

                            <SideNav.Toggle style={{backgroundColor:"black"}} className="gradient-back2"/>

                                <SideNav.Nav defaultSelected="home" style={{backgroundColor:"white"}} >

                                <NavItem eventKey="home" className="gradientHover">
                                            <NavIcon>
                                                <Link to='/userview' style={{color:"black"}}>
                                                     <img src={process.env.PUBLIC_URL + "/images/icons/home.png"} width="40%"></img>
                                                 </Link>
                                            </NavIcon>
                                            <NavText >
                                             
                                               <Link to='/userview' style={{color:"black"}}>Home</Link>
                                            </NavText>
                                    </NavItem>

                                    <NavItem eventKey="home" className="gradientHover">
                                            <NavIcon>
                                                <Link to='/userview/catalog' style={{color:"black"}}>
                                                     <img src={process.env.PUBLIC_URL + "/images/icons/shop.png"} width="50%"></img>
                                                 </Link>
                                            </NavIcon>
                                            <NavText >
                                             
                                               <Link to='/userview/catalog' style={{color:"black"}}>Buy or obtain a service</Link>
                                            </NavText>
                                    </NavItem>

                                   

                                    <NavItem eventKey="home" className="gradientHover">
                                            <NavIcon>
                                                <Link to='/userview/sell:menu' style={{color:"black"}}>
                                                      <img src={process.env.PUBLIC_URL + "/images/icons/banknotes.png"} width="50%"></img>
                                                 </Link>
                                            </NavIcon>
                                            <NavText >
                                                 <Link to='/userview/sell:menu' style={{color:"black"}}>Sell or offer your services</Link>
                                            </NavText>
                                    </NavItem>

                            





                                    <NavItem eventKey="charts" className="gradientHover">
                                            <NavIcon>
                                                <Link to='/userview/settings' style={{color:"black"}}>
                                                        <img src={process.env.PUBLIC_URL + "/images/icons/settings.png"} width="50%"></img>
                                                  </Link>
                                            </NavIcon>
                                            <NavText>
                                                Settings
                                            </NavText>
                                            <NavItem eventKey="charts/linechart">
                                                <NavText>
                                                    User settings
                                                </NavText>
                                            </NavItem>
                                            <NavItem eventKey="charts/barchart">
                                                <NavText >
                                                <Link to='/userview/logout' style={{color:"black"}}>
                                                        Log out
                                                  </Link>
                                                </NavText>
                                            </NavItem>
                                    </NavItem>
                                </SideNav.Nav>

                    </SideNav>
           
          )
    }
  }
  
  
  export default SideBar


