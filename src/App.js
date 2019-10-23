//Our react imports
import React, { Component } from 'react';


import './App.css';

//Foundation UI:
import Foundation from "react-foundation"
import { Row, Column} from "react-foundation"

//Routing
import {Route, Switch} from "react-router";
import { Link } from 'react-router-dom';

//Our main UI Blocks
import Welcome from "./main_ui_blocks/Welcome.js"
import UserView from "./main_ui_blocks/UserView.js"




/* Notes about tags:
The 2nd column is not visible and not meant to be seen, it's just us defining all the routes and 
links of our application. What is seen from it tho is the exact path: the Welcome component.
Any other link will be shown in this SPACE.
*/


class App extends Component {
  render() {
    return (

      <div >
        
          <Row  large={12} medium={12} small={12} style={{maxWidth:"initial"}}>


              <Column large={12} medium={12} small={12} > 
             
                  <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/userview" component={UserView} />
                  

                   
                  </Switch>
              </Column>

              

             
          </Row>

      </div>
    );
  }
}

export default App;
