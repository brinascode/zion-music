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
      showPic:"visible"
    }

     this.tabClick = this.tabClick.bind(this)
  }

/*
 componentDidMount(){
  const component = this
  //const id = this.props.match.params.id.substring(1)
  const id = this.props.id
    switch(id){
      case "sellProductsTab":
        this.setState({
          showSellProducts:true,
          showOfferServices:false,
          showViewMyProducts:false,
          showViewMyServices:false,
          showPic:"hidden"
          })
        break;
      case "offerServicesTab":
        this.setState({ 
          showSellProducts:false,
          showOfferServices:true,
          showViewMyProducts:false,
          showViewMyServices:false,
          showPic:"hidden"
         })
        break;
      case "viewMyProductsTab":
        this.setState({ 
          showSellProducts:false,
          showOfferServices:false,
          showViewMyProducts:true,
          showViewMyServices:false,
          showPic:"hidden"
          })
        break;
      case "viewMyServicesTab":
        this.setState({ 
          showSellProducts:false,
          showOfferServices:false,
          showViewMyProducts:false,
          showViewMyServices:true,
          showPic:"hidden"
         })
        break;
      
       
    }


 }
 */

 

  componentDidUpdate(prevProps) {
  
    if (this.props.location !== prevProps.location) {
      this.tabClick();
    }
  }


 tabClick(){ //Because it doesnt detect tab changes when user clicks on tabs rather than getting at location from redirects
 
  var index = this.props.location.pathname.indexOf(":")
  var id = this.props.location.pathname.substring(index+1)

     
    switch(id){
      case "sellProductsTab":
        this.setState({
          showSellProducts:true,
          showOfferServices:false,
          showViewMyProducts:false,
          showViewMyServices:false,
          showPic:"hidden"
          })
        break;
      case "offerServicesTab":
        this.setState({ 
          showSellProducts:false,
          showOfferServices:true,
          showViewMyProducts:false,
          showViewMyServices:false,
          showPic:"hidden"
         })
        break;
      case "viewMyProductsTab":
        this.setState({ 
          showSellProducts:false,
          showOfferServices:false,
          showViewMyProducts:true,
          showViewMyServices:false,
          showPic:"hidden"
          })
        break;
      case "viewMyServicesTab":
    
        this.setState({ 
          showSellProducts:false,
          showOfferServices:false,
          showViewMyProducts:false,
          showViewMyServices:true,
          showPic:"hidden"
         })
        break;
      
       
    }


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
          <div className="">

          
          <Row large={12} medium={12} small={12} style={{width:"100vw",backgroundColor:"white"}}>
        
              
          <Column  large={12} small={12} medium={12} style={bannerColumn.style} className="gradient-back2">
                       
                       <h1 style={{fontFamily:"moonbold",color:"white"}} > Sell / Provide   </h1> 
                             <h4 style={{fontFamily:"moon"}}> 
                                     And start earning!
                                     
                                     
                             </h4>  

                             <Row large={12} small={12} medium={12} >
                
                  

                      
                          <Column  large={3} small={12} medium={12} >
                              <Link to="/userview/sell:sellProductsTab" > 
                                      <div  style={{borderRight:"solid"}}   >
                                          <h4  style={{color:"black",fontFamily:"moonbold",padding:"20px"}}> Sell a New Product<br></br> </h4>
                                       
                                      </div>
                                </Link>
                          </Column>
                      
                      

                      
                      <Column  large={3} small={12} medium={12}  >
                            <Link to="/userview/sell:offerServicesTab">
                                <div  style={{borderRight:"solid"}}   >
                                    <h4 style={{color:"black",fontFamily:"moonbold",padding:"20px"}}> Provide a Service </h4>
                                </div>
                            </Link>
                      </Column>
                      

                        
                        <Column  large={3} small={12} medium={12}  >
                            <Link to="/userview/sell:viewMyProductsTab">
                                <div  style={{borderRight:"solid"}}>
                                      <h4  style={{color:"black",fontFamily:"moonbold",padding:"20px"}}> My products and sales </h4>
                                </div>
                            </Link>
                        </Column>
                      

                        
                        <Column  large={3} small={12} medium={12}  >
                            <Link to="/userview/sell:viewMyServicesTab">
                            <div  style={{borderRight:""}}>
                               <h4  style={{color:"black",fontFamily:"moonbold",padding:"20px"}}> My services  </h4>
                               
                               </div>
                            </Link>
                        </Column>


                      

                     
                  </Row>
                
          </Column>


        
      

               

                   <Column  large={12} small={12} medium={12} >
                        
                          <center>
                           

                           <SellProducts show={this.state.showSellProducts}  />
                           <OfferServices show={this.state.showOfferServices}  />
                           <ViewMyProducts show={this.state.showViewMyProducts}  />
                           <ViewMyServices show={this.state.showViewMyServices}   />
                           </center>
                    
                       

                      <div >
                            <Column  large={12} small={12} medium={12} 
                          style={{height:"50vh",borderRadius:"5px",
                                visibility:""+this.state.showPic+"",
                                backgroundImage:"url('/images/catalog/business.jpeg')",
                                backgroundSize:"100%", 
                                backgroundPosition:"center",
                                marginTop:"%"}} >

                          
                        </Column>
                     </div>
                       
                   </Column>
                


                  
        
     
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
