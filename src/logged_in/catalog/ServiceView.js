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
class ServiceView extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      service:{name:"",otherImages:[""]},
      
    }

    this.findService = this.findService.bind(this)
    this.findService()
   
  }

  findService(){

    const index = this.props.location.pathname.indexOf(":")
    const productIdFixed = this.props.location.pathname.substring(index+1)
    const component = this

    axios.post("/findService",{productId:productIdFixed})
    .then(function(response){
          
          component.setState({
            service:response.data[0]
          })

          console.log(response)
          
            
        })
    .catch(function(error){console.log(error)})


  }



   
   

  

  render() {

//share these instead of copying and pasting all the time
    var imgStyle = {
      boxShadow:"0px 0px 0px #888888",
      borderRadius:"px"
  }

 
  var bannerStyle= {
      boxShadow:"0px 0px px #888888",
      padding:"5%",
      height:"20vh",
      borderRadius:"5px"
     
  }
    
    const service = this.state.service

   //For resp design
   var bannerColumnMobile = { margin:"10px",marginTop:"50px",borderRadius:"5px",width:"100%"}
   var bannerColumnPc = {margin:"10%",marginTop:"10%",marginBottom:"3%",borderRadius:"5px"}
   var bannerColumnMobile2 = { margin:"10px",marginTop:"50px",borderRadius:"5px",width:"100%",padding:"0px"}
   var bannerColumnPc2 = { margin:"10%",marginTop:"10%",marginBottom:"3%",borderRadius:"5px"}

   var itemColumnMobile = {padding:"10px",width:"100%",borderRadius:"5px"}
   var itemColumnPc = {border:""}
   var innerPaddingPc = {marginLeft:"30%"}
   var innerPaddingPc2 = {marginRight:"30%"}

   var bannerColumn = {}
   var bannerColumn2 = {}
   var itemColumn = {}
   var innerPadding = {}
   var innerPadding2 = {}

   if(this.props.mobile){
       bannerColumn.style = bannerColumnMobile
       itemColumn.style = itemColumnMobile
       bannerColumn2.style = bannerColumnMobile2
   }else{
       bannerColumn.style = bannerColumnPc
       itemColumn.style = itemColumnPc
       innerPadding.style  = innerPaddingPc
       innerPadding2.style  = innerPaddingPc2
       bannerColumn2.style =  bannerColumnPc2
   }
          return (
            <div className="">
  
            
            <Row large={12} medium={12} small={12} style={{width:"100vw",backgroundColor:"white"}}>
          
            <Column large={12} medium={12} small={12}  style={bannerColumn.style} className="gradient-back2">

                  <h1 style={{fontFamily:"moonbold",color:"white"}}>  {service.name}   
                </h1> 
           
             </Column>

             <Column large={6} medium={12} small={12} style={itemColumn.style}>
                                <div style={innerPadding.style}>
                                    <img src={service.mainImage} style={{borderRadius:"5px"}} width="80%" />
                                </div>
                                <br></br>
             </Column>
                     
                      <Column large={6} medium={12} small={12}  style={itemColumn.style} >
                         
                                  <div style={innerPadding2.style}>
                                        <div className="catalog-item gradientBack" >

                                        <button onClick={this.findService} style={{backgroundColor:"#02bcd2",borderRadius:"5px",padding:"1vw"}}>
                                              <h2 style={{color:"white"}}>Request</h2> </button>
                        
                                                  <h4>  <br></br></h4>
                                                    <h4 style={{fontFamily:"moon"}} >{service.description}</h4>
                                                   
                                                    <br></br>

                                              </div>
                                </div>


                            <div style={innerPadding2.style}>
                                    <br></br>
                                    <h4>    <img src={process.env.PUBLIC_URL + "/images/icons/instagram.png"} 
                                    width="7%" style={{float:"left",marginRight:"3px"}}></img> Instagram: @</h4>
                                    
                                    <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
                                  <iframe src="//lightwidget.com/widgets/4e33f2016d0358299d8b270b5478481b.html" 
                                  scrolling="yes" allowtransparency="true" 
                                  class="lightwidget-widget" style={{width:"100%",height:"200px",border:"0",overflow:""}}></iframe>
                            </div>
                                          
                                              
                         
                      </Column>

                      <Column large={12} medium={12} small={12}  style={bannerColumn2.style}  >
                         
                       <h2 style={{color:"white",borderRadius:"5px"}} className="gradient-back2">
                       <span style={{marginLeft:"3%"}}>Portfolio</span></h2>
                       <Row large={12} medium={12} small={12} >
                           
                           {this.state.service.otherImages.map( url =>  
                            <Column large={4} medium={4} small={6}  >
                           <img src={url}  width="50%" />
                           </Column>)}
                     
                        </Row>
                                     
                
                     </Column>

                     <Column large={12} medium={12} small={12}  style={bannerColumn2.style} >
                         
                     <h2 style={{color:"white",borderRadius:"5px"}} className="gradient-back2">
                       <span style={{marginLeft:"3%"}}>Reviews</span></h2>
                      
                                       
                  
                       </Column>
  

                     

                     

                     
  
       
    </Row>
           
            </div>
          )
       
        
  }
}




export default ServiceView
