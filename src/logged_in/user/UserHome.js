import React from 'react';
import Swipeable from 'react-swipeable';

//Foundation UI:
import Foundation from "react-foundation"
import { Row, Column, Button} from "react-foundation"

//Other views
import Header from "../../main_ui_blocks/Header.js"
//Routing
import { Link } from 'react-router-dom';


//Server routing
const axios = require("axios")


//Userdata






//-------------------------------------------------------------------COMPONENT-----------------------------------
class UserHome extends React.Component {
  
constructor(props){
  super(props)
}
// when the component is not mounted anymore
componentWillMount(){
 

      this.setState({
          userId:sessionStorage.getItem("userId"),
          userName:sessionStorage.getItem("userName").substring(0,sessionStorage.getItem("userName").indexOf(" ")),
          userEmail:sessionStorage.getItem("userEmail")
         
        
          })
}

  getUserInfo() {

    axios.get('http://muneeds-backend.herokuapp.com/auth/getInfo')
		  .then(response => {
		    console.log(response.data);
		    
		  })
		  .catch(error => {
		    console.log(error);
		  });
    
    
  }

 
  render() {

    //For resp design
    var bannerColumnMobile = { margin:"10px",marginTop:"50px",borderRadius:"5px",width:"100%"}
    var bannerColumnPc = {margin:"15%",marginTop:"10%",marginBottom:"3%",borderRadius:"5px"}
    
    var itemColumnMobile = {padding:"0px",margin:"0px",width:"120%"}
    var itemColumnPc = {}

 
    var bannerColumn = {}
    var itemColumn = {}

    if(this.props.mobile){
        bannerColumn.style = bannerColumnMobile
        itemColumn.style = itemColumnMobile
    }else{
        bannerColumn.style = bannerColumnPc
        itemColumn.style = itemColumnPc
    }


    
        return (
          <div >

          
                <Row large={12} medium={12} small={12} style={{width:"100vw",backgroundColor:"white",padding:"vh"}} >


                    <Column  large={12} small={12} medium={12} style={bannerColumn.style} >
                    <h1>Discover</h1>
                    <Row large={12} medium={12} small={12} >

                     

                      <Column large={4} small={4} medium={4}>
                         <img src={process.env.PUBLIC_URL + "/images/welcome_slide/jamily.jpg"}  width="100%"/>
                      </Column>

                    
                      <Column large={4} small={4} medium={4}>
                         <img src={process.env.PUBLIC_URL + "/images/welcome_slide/hollyn.jpg"} width="100%"/>
                      </Column>

                      <Column large={4} small={4} medium={4}>
                         <img src={process.env.PUBLIC_URL + "/images/welcome_slide/isadora.jpg"} width="100%"/>
                      </Column>

                      <Column large={4} small={4} medium={4}>
                         <img src={process.env.PUBLIC_URL + "/images/welcome_slide/gawvi.jpg"}  width="100%"/>
                      </Column>

                      <Column large={4} small={4} medium={4}>
                         <img src={process.env.PUBLIC_URL + "/images/welcome_slide/lecrae2.jpg"} width="100%"/>
                      </Column>

                     

                      <Column large={4} small={4} medium={4}>
                         <img src={process.env.PUBLIC_URL + "/images/welcome_slide/tasha.jpg"}  width="100%"/>
                      </Column>


                      <Column large={4} small={4} medium={4}>
                         <img src={process.env.PUBLIC_URL + "/images/welcome_slide/michely.jpg"}  width="100%"/>
                      </Column>


                      <Column large={4} small={4} medium={4}>
                         <img src={process.env.PUBLIC_URL + "/images/welcome_slide/jottaa.jpg"}  width="100%"/>
                      </Column>



                     
                       
                       
                        </Row>



                  </Column>

              </Row>
         
          </div>
        )
  }
}




export default UserHome

//<h1 style={{fontFamily:"moonbold"}}>Welcome {" " + this.props.userName} ! </h1> 
//dashboard bckcolor backgroundColor:"rgba(255,255,255,0.8)"
/* green

33e700

red
#c51230

green
#54d230
'
*/