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
class Logout extends React.Component {
  
  constructor(props){
    super(props)
    sessionStorage.setItem("userId", null);
    sessionStorage.setItem("userName", null);
    sessionStorage.setItem("userEmail", null);

    window.location.href="http://muneeds-backend.herokuapp.com/logout"


  }




  render() {
    
        return (
          <div className="">

      Logout

        
     
 
         
          </div>
        )
  }
}




export default Logout
