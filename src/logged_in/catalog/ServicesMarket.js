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
class ServicesMarket extends React.Component {

  constructor(props){
    super(props)
    

  }
  

  render() {
        if(this.props.show === ":servicesMarket") {

          return (


            <div className="">
  
            
            <Row large={12} medium={12} small={12} style={{width:"100vw"}}>
          
                    <Column  large={12} small={12} medium={12} style={{padding:"5%",height:"30vh"}} >
                          
                     <h1>  Obtain Services  <input type="text" style={{width:"30%"}} placeholder="Search Catalog"></input></h1>
                     <button onClick={this.findSales} 
                          style={{backgroundColor:"#02bcd2",fontSize:"1.5vh",borderRadius:"5px",padding:"1vw"}}>
                          Search </button>
                   
  
                          <br></br>

                         
                          
                    </Column>
  
          
       
    </Row>
           
            </div>
          )
        }
        else{
          return null
        }
        
  }
}




export default ServicesMarket
//dashboard bckcolor backgroundColor:"rgba(255,255,255,0.8)"
/* green

33e700

red
#c51230

green
#54d230
'


return (
          <div className="">

          
                <Row large={12} medium={12} small={12} >
        
                    <Column  large={12} small={12} medium={12} style={{padding:"5%",height:"30vh"}} >
                          
                        DASHBOARD  
                       
                        <Button onClick={this.getUserInfo} style={{backgroundColor:"#02bcd2",fontSize:"1.5vh",borderRadius:"5px",padding:"1vw"}} > 
                          <span  class="glyphicon glyphicon-user">
                          </span>
                          
                         Get log in info

                        </Button>
              
                        <br></br><br></br><br></br>
                            
                            
                          
                    </Column>

                    <Column  large={12} small={12} medium={12} style={{padding:"5%"}}>
                          
                         
                              <center> <h2 className="moonbold">Hi ___, what are your needs today? </h2> </center>
                              
                            
                      </Column>
                     

                     <div className="gradient-back2">
                          <Column  large={3} medium={3} small={3} style={{backgroundColor:"",height:"30vh"}}>
                                  
                                
                                  <div style={{padding:"10%"}}>
                                          <center> 
                                            <h4 className="moonbold" > Buy </h4> 
                                            <img src="images/icons/shop.png" width="40%"></img>
                                          
                                          </center>
                                        </div>
                                      
                                      
                                </Column>
              
                                  <Column  large={3} medium={3} small={3} style={{backgroundColor:"",height:"30vh"}}>
                                        
                                        
                                  <div style={{padding:"10%"}}>
                                          <center>
                                              <h4 className="moonbold"> Obtain a service </h4> 
                                              <img src="images/icons/check.png" width="40%" ></img>
                                            
                                              </center>
                                </div>
                                      
                                      
                                      
                                </Column>

                            <Column  large={3}  medium={3} small={3} style={{backgroundColor:"",height:"30vh"}}>
                                  
                                
                                <div style={{padding:"10%"}}>
                                    <center>
                                      <h4 className="moonbold">Sell </h4>
                                      <img src="images/icons/banknotes.png" width="40%"></img>
                                    </center>
                                  </div>
                                  
                                  
                            </Column>

                            <Column  large={3} medium={3} small={3} style={{backgroundColor:"",height:"30vh"}}>
                                  
                                
                                <div style={{padding:"10%"}}>
                                    <center>
                                      <h4 className="moonbold"> Offer your services </h4> 
                                      <img src="images/icons/sell.png" width="40%"></img>
                                    </center>
                                  </div>
                                
                                
                          </Column>
                  </div>
                   
              </Row>
         
          </div>
        )'
*/
