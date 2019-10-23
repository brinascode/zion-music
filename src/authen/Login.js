//Our react imports
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

//Foundation UI:
import Foundation from "react-foundation"
import { Row, Column,Button} from "react-foundation"

//Tutorial

import axios from "axios"


//const URL = 'ws://muneeds-backend.herokuapp.com:3002'
//const URL = 'ws://muneeds-backend.herokuapp.com'
//const ws = new WebSocket(URL)


class Login extends Component {
  
  constructor(props){

		super(props)
		this.state = {
			worked:"No",
			user:[]

		}


	}

	componentDidMount() {
  
    /*
    ws.onopen = (evt) => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
   
     
    }

    ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      console.log(evt.data)
       
      //The message will be the user id first, and then the user's name
    }

    ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss ==does it work?
      this.setState({
        ws: new WebSocket(URL),
      })
    }
*/
    

	}


  loginWithGoogle(){
/*
    const xhr = new XMLHttpRequest();
      
      xhr.open('GET', "/auth/google");
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
          if(xhr.status === 200){
            alert("yeah")
          }
          else{
            alert('Could not get signed URL.');
          }
        }
      };
      xhr.withCredentials = true;
      xhr.send(); */

   //alert(document.cookie[0])
 window.location.href = "http://muneeds-backend.herokuapp.com/auth/google"
 
 /*
   axios.get("/auth/google")
      .then(function(response){
       // document.getElementsByTagName("html")[0].innerHTML = response.data
       //document.write("")
        console.log(response.data) //Do something with this later. Return showing them their new addition
      })
      .catch(function(error){console.log(error)}) */
  
  }

  render() {
    return (
      <div>

          
               <Row large={12} medium={12} small={12} style={{maxWidth:"initial"}}> 
                  
                  <Column large={12} medium={12} small={12}>

                
                          <Button  onClick={this.loginWithGoogle} style={{backgroundColor:"#1DB954",color:"black",fontSize:"1.5vw",fontFamily:"moon",borderRadius:"5px",padding:"1vw"}}
                          > 
                              <span  class="glyphicon glyphicon-user">
                              </span>
                              Log in with Spotify!
                              {this.user}

                    
                          </Button>
                   
                      
              
          
                  </Column>
               

               </Row>
               
         
           


      </div>
    );
  }
}

export default Login;
