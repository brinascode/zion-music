//Our react imports
import React, { Component } from 'react';

//Foundation UI:
import Foundation from "react-foundation"
import { Row, Column} from "react-foundation"

//Routing
import {Route, Switch} from "react-router";
import { Link } from 'react-router-dom';


//Needed Blocks
import UserHeader from "./UserHeader.js"
import UserHeaderMobile from "./UserHeaderMobile.js"
import SideBar from "./SideBar.js"
import MobileSideBar from "./MobileSideBar.js"
import Footer from "./Footer.js"

//Needed views
import UserHome from "../logged_in/user/UserHome.js"
import Catalog from "../logged_in/catalog/Catalog.js"
import CatalogTypeView from "../logged_in/catalog/CatalogTypeView.js"
import ProductView from "../logged_in/catalog/ProductView.js"
import ServiceView from "../logged_in/catalog/ServiceView.js"
import Sell from "../logged_in/seller/Sell"
import EditProduct from "../logged_in/seller/EditProduct"
import DeleteProduct from "../logged_in/seller/DeleteProduct"
import Settings from "../logged_in/user/Settings"
import Logout from "../authen/Logout"

class UserView  extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
          windowWidth: window.innerWidth
                  };
        this.handleWindowSizeChange =  this.handleWindowSizeChange.bind(this)
       
      }

      handleWindowSizeChange(){
        this.setState({windowWidth:window.innerWidth})
      }

       
// when the component is not mounted anymore
  componentWillMount(){
      /*
    window.addEventListener("resize",this.handleWindowSizeChange) // make sure to remove the listener
    const params = new URLSearchParams(document.location.search.substring(1))
        this.setState({
            userId:params.get("id"),
            userName:params.get("name"),
            userEmail:params.get("email")
            })*/

            //Handling window resize
            window.addEventListener("resize",this.handleWindowSizeChange)
            const params = new URLSearchParams(document.location.search.substring(1))
          
            //Session storage and user
          
            
            if(params.get("id")){ //if no session, set session.
               
                  sessionStorage.setItem("userId", params.get("id"));
                  sessionStorage.setItem("userName", params.get("name"));
                  sessionStorage.setItem("userEmail", params.get("email"));


                this.setState({
                    userId:params.get("id"),
                    userName:params.get("name"),
                    userEmail:params.get("email")
                    })
           
          
            }else if(sessionStorage.getItem("userId")){


                this.setState({
                    userId:sessionStorage.getItem("userId"),
                    userName:sessionStorage.getItem("userName"),
                    userEmail:sessionStorage.getItem("email")
                    })
           

            }
           

            

               
  }

  componentDidMount(){
      
    if(sessionStorage.getItem("userId") == "null" || sessionStorage.getItem("userId") == null || sessionStorage.getItem("userId") == null){
              
        alert("Unauthorized. Redirecting you to login page")
        window.location.href = "/"
    }

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange(){
    this.setState({windowWidth:window.innerWidth})
  }
    

    render(){
        const width = this.state.windowWidth
        const isMobile = width <= 500
       
          
        

    if(isMobile){ //MOBILE VIEW -------------------------------------------------------------------------------------------
          
            return(

         <div >
    
               
                    
    <Row large={12} small={12} medium={12} style={{}} >
                  
                    
                
                   
                <Column large={12} small={12} medium={12} >
                           <UserHeaderMobile/>
                    </Column>
    
    
                     <Column large={12} small={12} medium={12} style={{backgroundColor:"white",height:"90vh",marginTop:"3%"}}>
                    

                        <Switch>
                            <Route exact path="/userview" render={(props) => <UserHome userId={this.state.userId}  
                            userName={this.state.userName} userEmail={this.state.userEmail} mobile="true"/>}  />

            
                            <Route  path={`${this.props.match.path}/catalog`} render={(props) => <Catalog  location={this.props.location}  mobile="true" />} />
                            <Route  path={`${this.props.match.path}/catalog:type`}  render={(props) => <CatalogTypeView  location={this.props.location}  mobile="true" />} />
                            <Route  path={`${this.props.match.path}/product:id`} render={(props) => <ProductView location={this.props.location} mobile="true" />}  />
                            <Route  path={`${this.props.match.path}/service:id`} render={(props) => <ServiceView  location={this.props.location} mobile="true" />}  />
                            <Route  path={`${this.props.match.path}/sell:id`} render={(props) => <Sell  id={this.props.match.path.substring(1)} location={this.props.location}  mobile="true"/>}/>
                        

                            <Route path="/userview/sell:id" render={(props) => <Sell id={this.props.match.path.substring(1)} location={this.props.location}  mobile="true"/>} />

                            
                            <Route  path={`${this.props.match.path}/editProduct:id`} render={(props) => <EditProduct location={this.props.location}  mobile="true" />}  />
                            <Route  path={`${this.props.match.path}/deleteProduct:id`} render={(props) => <DeleteProduct location={this.props.location} mobile="true" />}  />
                            <Route  path={`${this.props.match.path}/settings`} render={(props) => <Settings location={this.props.location} mobile="true" />}  />
                            <Route  path={`${this.props.match.path}/logout`} component={Logout} />
                        </Switch>
                    
                          
                    </Column>
    
    
                    <Column large={12} small={12} medium={12} >
                           <MobileSideBar/>
                    </Column>
    
                    
    
                
              </Row>
    



 </div>

         )



        }
        else {

            return (

                <div >
    
               
                    
                <Row large={12} small={12} medium={12} style={{backgroundImage:'url("images/welcome_slide/walk.jp")',backgroundSize:"100%"}} >
                  
                    
                   <Column large={12} small={12} medium={12} >
                         <SideBar />
                    </Column>
    
                    <Column large={12} small={12} medium={12} >
                           <UserHeader/>
                    </Column>
    
                     
    
                     <Column large={12} small={12} medium={12} style={{backgroundColor:"white",height:"100%",marginLeft:"3vh",marginTop:"2vh"}}>
                    
                 
                        <Switch>
                            <Route exact path="/userview" render={(props) => <UserHome userId={this.state.userId}  userName={this.state.userName} userEmail={this.state.userEmail} />}  />

            
                            <Route  path={`${this.props.match.path}/catalog`} component={Catalog} />
                            <Route  path={`${this.props.match.path}/catalog:type`} component={CatalogTypeView}/>
                            <Route  path={`${this.props.match.path}/product:id`} component={ProductView} />
                            <Route  path={`${this.props.match.path}/service:id`} component={ServiceView} />
                            <Route  path={`${this.props.match.path}/sell:id`} component={Sell} />
                            <Route  path="/userview/sell:id" Component={Sell} />

                            
                            <Route  path={`${this.props.match.path}/editProduct:id`} component={EditProduct} />
                            <Route  path={`${this.props.match.path}/deleteProduct:id`} component={DeleteProduct} />
                            <Route  path={`${this.props.match.path}/settings`} component={Settings} />
                            <Route  path={`${this.props.match.path}/logout`} component={Logout} />
                        </Switch>
                    
                          
                    </Column>
    
    
    
                    <Row large={12} medium={12} small={12} >
                                          <Column large={12} medium={12} small={12}>
                                              <Footer/>
                                        </Column>

                                    </Row>
    
                
              </Row>
    
    
    
             </div>
    
    
    
    
            )
    

        }


    }

}
    export default UserView

    /*
        #f1f5f8

          

    */