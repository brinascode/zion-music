//Our react imports
import React, { Component } from 'react';

//Foundation UI:
import Foundation from "react-foundation"
import { Row, Column} from "react-foundation"


class Footer extends Component {
  render() {
    return (
     <div >
         
         <Row large={12} small={12} medium={12} 
         style={{position:"relative",fontFamily:"moonbold",color:"white",backgroundColor:"black",height:"20vh",
        width:"105vw",marginLeft:"0.01vw",padding:"5%"}}>


        
            Copyrights 
          
          
         </Row>

      </div>
       
     
    );
  }
}

export default Footer;

/* 

  <Row large={12} style={{backgroundColor:"",width:"100vw"}}>
                  <Column large={3} medium={3} small={3} class="pred" >
                    <img src="images/neptune.png" width="80%" style={{border:"none",borderColor:"red"}} />
                    <h2 style={{marginLeft:"1.5vw",marginTop:"-13vw"}} onClick={this.style = {color:'black'} }> Web Apps</h2>
                  </Column>
                  <Column large={3} medium={3} small={3}>
                    <img src="images/venus.png" width="80%" style={{border:"none",borderColor:"red"}} />
                    <h2 style={{marginLeft:"4vw",marginTop:"-13vw"}}>Games</h2>
                  </Column>
                  <Column large={3} medium={3} small={3}>
                    <img src="images/3dearth.png" width="80%" style={{marginTop:"1vw",padding:"0vw",border:"none",borderColor:"red"}} />
                    <h2 style={{marginLeft:"3vw",marginTop:"-13vw"}}>Designs</h2>
                  </Column>
                  <Column large={3} medium={3} small={3}>
                    <img src="images/saturn.png" width="80%" style={{border:"none",borderColor:"red"}} />
                    <h2 style={{marginLeft:"1.5vw",marginTop:"-13vw"}}>About me</h2>
                  </Column>
              
            </Row>




            <Row large={12} style={{backgroundColor:"",width:"100vw"}}>
                  <Column large={3} medium={3} small={3} class="pred" >
                    <img src="images/neptune.pn" width="70%" style={{marginLeft:"4vw",border:"none",borderColor:"red"}} />
                    <h3 style={{marginLeft:"13vw",marginTop:"-10vw"}} onClick={this.style = {color:'black'} }> Web Apps</h3>
                  </Column>
                  <Column large={3} medium={3} small={3}>
                    <img src="images/venus.pn" width="80%" style={{marginTop:"-7vw",border:"none",borderColor:"red"}} />
                    <h3 style={{marginLeft:"vw",marginTop:"-10vw"}}>Games</h3>
                  </Column>
                  <Column large={3} medium={3} small={3}>
                    <img src="images/3dearth.pn" width="70%" style={{marginRight:"-13vw",marginTop:"-5vw",padding:"0vw",border:"none",borderColor:"red"}} />
                    <h3 style={{marginLeft:"10vw",marginTop:"-10vw"}}>Designs</h3>
                  </Column>
                  <Column large={3} medium={3} small={3}>
                    <img src="images/saturn.pn" width="90%" style={{marginTop:"-5vw",border:"none",borderColor:"red"}} />
                    <h3 style={{marginLeft:"1.5vw",marginTop:"-10vw"}}>About me</h3>
                  </Column>
              
            </Row>
*/