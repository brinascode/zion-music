//Our react imports
import React, { Component } from 'react';

//Foundation UI:
import Foundation from "react-foundation"
import { Row, Column} from "react-foundation"



class Header extends Component {

  constructor(props){
    super(props)
    this.login = this.login.bind(this)

  }

  login(){
    window.location.href = "http://muneeds-backend.herokuapp.com/auth/google"
  }


  render() {
    return (
      <div>

        <Row  className="gradient-backk2" large={12} style={{backgroundColor:"black",borderBottom:"",borderColor:"black",boxShadow:"0px 0.5px 1px #888888"}} >
              <Column large={4}>
              </Column>

              <Column large={4} >
                    <center>   
                      <h1  style={{fontSize:"2.75vw",color:"white"}}>ZionMusic</h1> 
                    </center>
              </Column>

                <Column large={4}>
                <h1 style={{textAlign:"right",marginRight:"1vw"}}> <span class="glyphicon glyphicon-menu-hamburger" > </span>   </h1>
              </Column>

               

               <Column large={3} medium={3} small={3} class="" >
                  <a href="/" class="">
                      <center> <h4 style={{backgroundColor:"",color:"white"}}>  Home </h4>  </center>
                    </a>
                  </Column>


                  <Column large={3} medium={3} small={3} >
                  <a href="/games" class="">
                      <center> <h4 style={{backgroundColor:"",color:"white"}}> Concerts </h4>  </center> 
                    </a>
                  </Column>


                  <Column large={3} medium={3} small={3} >
                  <a href="/designs" class="">
                  <center><h4 style={{backgroundColor:"",color:"white"}}> About  </h4> </center>
                    </a>
                  </Column>


                  <Column large={3} medium={3} small={3} onClick={this.login}>
                  <a>
                       <center><h4 style={{backgroundColor:"",color:"white"}}> Log in </h4> </center>
                  </a>
                  </Column>

                 

              
        </Row>


        



      </div>
    );
  }
}

export default Header;
