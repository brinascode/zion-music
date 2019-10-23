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
class ItemView extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      product:{name:"",otherImages:[""]} //and other empty placeholders for if state gets realllyy slow
    }

    this.findProduct = this.findProduct.bind(this)
    this.findProduct() //what if this fails? Should return proper error
   
  }

  findProduct(){

    const index = this.props.location.pathname.indexOf(":")
    const productIdFixed = this.props.location.pathname.substring(index+1)

    const component = this

    axios.post("/findProduct",{productId:productIdFixed})
    .then(function(response){
          
          component.setState({
            product:response.data[0]
          })

          console.log(response)
         // alert(JSON.stringify(component.state))
            
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
    
    const product = this.state.product


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
            <div >
  
            
            <Row large={12} medium={12} small={12} style={{width:"100vw",backgroundColor:"white"}}>
          
               
                     
                    

                      <Column large={12} medium={12} small={12}  style={bannerColumn.style} className="gradient-back2">

                  <h1 style={{fontFamily:"moonbold",color:"white"}}>  {product.name}   
                </h1> 
           
             </Column>

             <Column large={6} medium={12} small={12} style={itemColumn.style}>
                                <div style={innerPadding.style}>
                                          <img src={product.mainImage} style={{borderRadius:"5px"}} width="80%" />
                                          
                                </div>
                                <br></br>
                                              
                      </Column>
                     
                      <Column large={6} medium={12} small={12}  style={itemColumn.style} >
                         
                                  <div style={innerPadding2.style}>

                                  <button onClick={this.findService} style={{backgroundColor:"#02bcd2",borderRadius:"5px",padding:"1vw"}}>
                                              <h2 style={{color:"white"}}>Buy</h2> </button>
                        

                                      <h4 style={{fontFamily:"moonbold"}}>Sold by: </h4>  <h4 style={{fontFamily:"moon"}}>{product.sellerId} </h4>
                                             <h4 style={{fontFamily:"moonbold"}}> 
                                             Item description:<br></br>
                                             </h4>
                                             <h4 style={{fontFamily:"moon"}}>{product.description}</h4>
                                        

                                </div>


                              
                         
                      </Column>

                      <Column large={12} medium={12} small={12}  style={bannerColumn2.style}  >
                         
                          <h2 style={{color:"white",borderRadius:"5px"}} className="gradient-back2">
                          <span style={{marginLeft:"3%"}}>Pictures</span></h2>
                          <Row large={12} medium={12} small={12} >
                           
                                  {this.state.product.otherImages.map( url =>  
                                   <Column large={4} medium={4} small={6}  >
                                  <img src={url}  width="50%" />
                                  </Column>)}
                            
                          </Row>
                
                     </Column>

                     <Column large={12} medium={12} small={12}  style={bannerColumn2.style}  >
                         
                     <h2 style={{color:"white",borderRadius:"5px"}} className="gradient-back2">
                       <span style={{marginLeft:"3%"}}>Seller Reviews</span></h2>
                      
                                       
                  
                       </Column>

  
                          
             
  
  
                   
          
       
    </Row>
           
            </div>
          )
       
        
  }
}




export default ItemView
/*
<div>
                                        <Column large={3} small={12} medium={4}  >
                                        <Link to='/userview/item:id' style={{color:"black"}}>
                                                <img src={process.env.PUBLIC_URL + "/images/welcome_slide/beach.jpeg"} style={imgStyle}/>
                                                <div className="catalog-item gradientBack" style={descriptionStyle}>
                                                  <h4> {good.name} </h4>
                                                  <h4>  {good.mainCategory} </h4>
                                                  <h4> ${good.price}</h4>
                                                  <h4> Available: ${good.quantity}</h4>
                                              </div>
                                           </Link>
                                            
                                            </Column>


                                      </div>

*/