import React from 'react';

//Routing
import {Route, Switch} from "react-router";
import { Link } from 'react-router-dom';






//Foundation UI:
import Foundation from "react-foundation"
import { Row, Column, Button} from "react-foundation"

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';




//-------------------------------------------------------------------COMPONENT-----------------------------------
class Catalog extends React.Component {
  
    constructor(props){
        super(props)
       
       
       
       

    }

   

  render() {

        var imgStyle = {
            boxShadow:"0px 0px 0px #888888",
            borderRadius:"5px"
          
        }

        var descriptionStyle = {
            boxShadow:"0px 0px 1px #888888",
            backgroundColor:"white"
        }

      

        //For resp design
        var bannerColumnMobile = { margin:"10px",marginTop:"50px",borderRadius:"5px",width:"100%",boxShadow: " 0 1px 2px rgba(0,0,0,0.24)"}
        var bannerColumnPc = {margin:"15%",marginTop:"10%",marginBottom:"3%",borderRadius:"5px"}
        
        var itemColumnMobile = {padding:"10px",width:"100%",borderRadius:"5px"}
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

          <div>

          
          <Row large={12} medium={12} small={12} style={{width:"100vw",backgroundColor:"white"}} >
        
                <Column  large={12} small={12} medium={12} style={bannerColumn.style} className="gradient-back2">
                            
                        <h1 style={{fontFamily:"moonbold",color:"white"}}> Catalog </h1> 
                                <h4 style={{fontFamily:"moon"}}> 
                                        Take what you need!

                                                   
                                        
                                        
                                </h4>  
                </Column>
                        
                                                <Column large={3} small={12} medium={4}  style={itemColumn.style}>
                                                    <Link to='/userview/catalog:textbooks'>
                                                                <img style={imgStyle}  src={process.env.PUBLIC_URL + "/images/catalog/textbook.jpeg" } class="grow-on-hover" />
                                                                    <div style={descriptionStyle} className="catalog-item "  > 
                                                                    <center> <h4 style={{fontFamily:"moon"}}> Textbooks</h4></center>
                                                                    </div>
                                                                    </Link>
                                                </Column> 


                                                <Column large={3} small={12} medium={4}  style={itemColumn.style}>
                                                <Link to='/userview/catalog:sales'>
                                                    <img style={imgStyle} src={process.env.PUBLIC_URL + "/images/catalog/things.jpeg" } class="grow-on-hover" />
                                                    <div className="catalog-item "  style={descriptionStyle} > 
                                                    <center> <h4 style={{fontFamily:"moon"}}> Things on sale</h4></center>
                                                    </div>
                                                    </Link>
                                                </Column>

                                            <Column large={3} small={12} medium={4}  style={itemColumn.style}>
                                            <Link to='/userview/catalog:photographers' >
                                                <img style={imgStyle} src={process.env.PUBLIC_URL + "/images/catalog/photographer.jpeg" } class="grow-on-hover" />
                                                <div className="catalog-item "  style={descriptionStyle} > 
                                                <center> <h4 style={{fontFamily:"moon"}}>Photographers</h4></center>
                                                </div>
                                                </Link>
                                            </Column>

                                     <Column large={3} small={12} medium={4} style={itemColumn.style} >
                                        <Link to='/userview/catalog:models' >
                                                    <img style={imgStyle} src={process.env.PUBLIC_URL + "/images/catalog/girlmodel.jpeg" } class="grow-on-hover" />
                                                    <div className="catalog-item " style={descriptionStyle} > 
                                                    <center> <h4 style={{fontFamily:"moon"}}>Models</h4></center>
                                                    </div>
                                                    </Link>
                                                </Column>




                                <Column large={3} small={12} medium={4}  style={itemColumn.style}>
                                         <Link to='/userview/catalog:makeup' >        
                                        <img style={imgStyle} src={process.env.PUBLIC_URL + "/images/catalog/makeupp.jpeg" } class="grow-on-hover"  />
                                        <div className="catalog-item "  style={descriptionStyle} > 
                                            <center> <h4 style={{fontFamily:"moon"}}>Makeup artists</h4></center>
                                        </div>
                                        </Link>
                                     </Column>

                                     <Column large={3} small={12} medium={4}  style={itemColumn.style}>
                                         <Link to='/userview/catalog:businesses' >        
                                        <img style={imgStyle} src={process.env.PUBLIC_URL + "/images/catalog/tailor.jpeg" } class="grow-on-hover"  />
                                        <div className="catalog-item "  style={descriptionStyle} > 
                                            <center> <h4 style={{fontFamily:"moon"}}>Other Student Owned Businesses and Brands </h4></center>
                                        </div>
                                        </Link>
                                     </Column>

                                    
                                    <Column large={3} small={12} medium={4} style={itemColumn.style}>
                                                          <Link to='/userview/catalog:artists' >
                                                    <img style={imgStyle}  src={process.env.PUBLIC_URL + "/images/catalog/coolartistgreen.jpg"} />
                                                        <div className="catalog-item "  style={descriptionStyle} > 
                                                        <center> <h4 style={{fontFamily:"moon"}}> Artists, mediaa* videoGraphical Designers and more </h4></center>
                                                        </div>
                                                        </Link>
                                                </Column>

                                               

                                                


                                                

                                                <Column large={3} small={12} medium={4} style={itemColumn.style}>
                                                <Link to='/userview/catalog:hair' >
                                                    <img style={imgStyle} src={process.env.PUBLIC_URL + "/images/catalog/pinkhair.jpeg"}  />
                                                        <div className="catalog-item "  style={descriptionStyle} > 
                                                                <center><h4 style={{fontFamily:"moon"}}>Hair Braiders/Stylers</h4></center>
                                                        </div>
                                                        </Link>
                                                </Column>

                                                 

                                               
                              
                                   

                                        <Column large={3} small={12} medium={4}  style={itemColumn.style}>
                                                <Link to='/userview/catalog:performers' >
                                                    <img style={imgStyle} src={process.env.PUBLIC_URL + "/images/catalog/performer.jpeg" } class="grow-on-hover" />
                                                    <div className="catalog-item "  style={descriptionStyle} > 
                                                    <center> <h4 style={{fontFamily:"moon"}}>Singers, Dancers, <br></br> Performers</h4></center>
                                                    </div>
                                                    </Link>
                                                </Column>

                                               
                                            
                                

                                                <Column large={3} small={12} medium={4} style={itemColumn.style}>
                                                <Link to='/userview/catalog:developer' >
                                                    <img style={imgStyle} src={process.env.PUBLIC_URL + "/images/catalog/appmaker.jpeg" } class="grow-on-hover" />
                                                    <div className="catalog-item "  style={descriptionStyle} > 
                                                    <center> <h4 style={{fontFamily:"moon"}}>App / <br></br> Website Developers</h4></center>
                                                    </div>
                                                    </Link>
                                                </Column>

     
  </Row>
         
          </div>
        )
  }
}




export default Catalog
