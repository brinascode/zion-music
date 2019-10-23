import React from 'react';

//Routing
import { Link } from 'react-router-dom';
import axios from "axios"

//Nested Views/Components:
import SellProducts from "./SellProducts.js"
import OfferServices from "./OfferServices.js"
import ViewMyProducts from "./ViewMyProducts.js"
import ViewMyServices from "./ViewMyServices.js"


//Foundation UI:
import Foundation from "react-foundation"
import { Row, Column, Button} from "react-foundation"



// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';



//-------------------------------------------------------------------COMPONENT-----------------------------------
class Sell extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      showSellProducts:false,
      showOfferServices:false,
      showViewMyProducts:false,
      showViewMyServices:false,
      cleanImage:true,

    }

    this.clickView = this.clickView.bind(this)
 
  
  }

  clickView(e,id){ //our handler to handle our makeshift views
  
    if(!id){
      
      var id = e.currentTarget.id //or e.target.getAttribute("id")

    }

    //e.stopPropagation(); //does it work? Doesnt seem to have improved anything
  
  
    switch(id){
      case "sellProductsTab":
        this.setState({
          showSellProducts:true,
          showOfferServices:false,
          showViewMyProducts:false,
          showViewMyServices:false})
        
        break;
      case "offerServicesTab":
        this.setState({ 
          showSellProducts:false,
          showOfferServices:true,
          showViewMyProducts:false,
          showViewMyServices:false})
        break;
      case "viewMyProductsTab":
        this.setState({ 
          showSellProducts:false,
          showOfferServices:false,
          showViewMyProducts:true,
          showViewMyServices:false})
        break;
      case "viewMyServicesTab":
        this.setState({ 
          showSellProducts:false,
          showOfferServices:false,
          showViewMyProducts:false,
          showViewMyServices:true})
        break;
      
       
    }

  }

 componentDidMount(){
  const component = this
    document.getElementById("sellProductsTab").addEventListener("click",function(e){
      component.clickView(e)
    })

 }
 

  render() {
    
    
    



        return (
          <div className="">

          
          <Row large={12} medium={12} small={12} style={{width:"100vw",backgroundColor:"white",padding:"vh"}}>
        
              
                  <Column  large={12} small={12} medium={12} style={{padding:"5%",borderRadius:"5px"}} 
                  className="gradient-back2k"
                  >
                        
                       <h1 style={{fontFamily:"moonbold"}}> Sell products or offer your services </h1>
                       <h4 style={{fontFamily:"moon"}}> And start earning </h4>
                    
                 

          
          </Column>

          <Column  large={12} small={12} medium={12} show={this.state.cleanImage} style={{height:"40vh"}}>
                    <img src={process.env.PUBLIC_URL + "/images/catalog/clap.png"} width="100%" style={{bottom:"150px"}} ></img>
                  </Column>

      


                <Row large={12} medium={12} small={12} style={{width:"100vw",backgroundColor:"white",marginLeft:"1vw",padding:"10vh"}}>

                     
                   <Column  large={3} small={12} medium={12} style={{backgroundColor:"black"}}  id="sellProductsTab" onClick={this.clickView} >
                        <div  style={{backgroundColor:""}}   >
                            <h4  style={{color:"white",fontFamily:"moon",padding:"20px"}}> Sell a Product </h4>
                        </div>
                   </Column>

                   <Column  large={3} small={12} medium={12} style={{backgroundColor:"black"}} id="offerServicesTab"  onClick={this.clickView}>
                      <div  style={{backgroundColor:""}}   >
                           <h4 style={{color:"white",fontFamily:"moon",padding:"20px"}}> Offer a Service </h4>
                      </div>
                    </Column>

                    <Column  large={3} small={12} medium={12} style={{backgroundColor:"black"}}  id="viewMyProductsTab" onClick={this.clickView} >
                        <div  style={{backgroundColor:""}}>
                              <h5  style={{color:"white",fontFamily:"moon",padding:"20px"}}> View my products and sales </h5>
                        </div>
                    </Column>

                    <Column  large={3} small={12} medium={12} style={{backgroundColor:"black"}} id="viewMyServicesTab" onClick={this.clickView}>
                        
                        <h4  style={{color:"white",fontFamily:"moon",padding:"20px"}}> View my services </h4>
 
                    </Column>

                   
                

                   <Column  large={12} small={12} medium={12} >
                        
                        <div style={{backgroundColor:"green"}}>

                       
                        
                        <SellProducts show={this.state.showSellProducts} clickView={this.clickView}/>
                       <a> <OfferServices show={this.state.showOfferServices} clickView={this.clickView}/></a>
                       <a> <ViewMyProducts show={this.state.showViewMyProducts}/></a>
                       <a> <ViewMyServices show={this.state.showViewMyServices}/></a>
                       </div>
                      

                   </Column>

                 </Row>
        
     
  </Row>
         
          </div>
        )
  }
}




export default Sell


//dashboard bckcolor backgroundColor:"rgba(255,255,255,0.8)"
/* 
  Place this after main category
   <label> Sub categories <br></br>
                              <p>Check all that apply</p>

                            <input style={this.formStyle}
                            name="dorm"
                            type="checkbox"
                            value={this.state.subCategory}
                            onClick={this.handleChangeArray}>
                              </input> Dorm

                              <input style={this.formStyle}
                            name="boys"
                            type="checkbox"
                            value={this.state.subCategory}
                            onChange={this.handleChangeArray}>
                              </input>Boys

                              <input style={this.formStyle}
                            name="girls"
                            type="checkbox"
                            value={this.state.subCategory}
                            onChange={this.handleChangeArray}>
                              </input>Girls

                              
                            {this.state.subCategories[2]}
                     </label>









green

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
