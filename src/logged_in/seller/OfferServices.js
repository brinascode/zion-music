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
class OfferServices extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {

      
      name:"",
      mainCategory:"photographer", 

      //subCategories:[], 
      description:"",
      //price:Number,
      mainImage:"", //the url
      otherImages:[""],
      sellerId:sessionStorage.getItem("userId"),
      dateCreated:new Date(),

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeArray = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleImages = this.handleImages.bind(this);
    this.uploadFile = this.uploadFile.bind(this)
    this.formStyle = {width:"50%"}

  }

  handleChange(event){
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name
    
    this.setState({[name]:value})
  }

  handleChangeArray(event){
    alert(this.state)
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name
    
    this.setState(prevState => ({
      subCategories: [...prevState.subCategories, name,value] 
      //make sure that in database, we start saving from subCategories[1] instead of 0
    }))
   
  }

  handleImages(e){
    const component = this
    //Getting the file once user selects it (uploads it to CLIENT) / once there's a change
    const files = e.target.files
    const file = files[0];
    if(file == null){
    return alert('No file selected.');
    }
    getSignedRequest(file);
    
    //We request a signature from the server
    function getSignedRequest(file){
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
        xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
        if(xhr.status === 200){
              const response = JSON.parse(xhr.responseText);
                  component.setState({imageFile:file,imageResponse:response})
                  component.setState({mainImage:response.url}) //Giving it the url so it can pass the verification (presence) test, later on
                  component.setState({otherImages:[""+response.url+""]})

                  document.getElementById('preview').src = response.url; //dont confuse this url for the response.url

        }
        else{
        alert('Could not get signed URL.');
        }
        }
        };
        xhr.send();
    }
    
   
}


//Gets called after Submit Button is clicked
uploadFile(file, signedRequest, url){

  const component = this
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', signedRequest);
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        
            //but then again, they need a visual to show their updated image...
        component.setState({mainImage:url})
       
      }
      else{
        alert('Could not upload file.');
      }
    }
  };
  xhr.send(file);
}



  submitForm(){
    /* make sure every aspect is checked
    Post function
    Pass to decide whether or not form is complete.
    Next: make sure it's also the proper type */


    var pass = true
    for(var key in this.state){
      if(this.state[key] === "" || this.state[key] === 0){
        alert("Please complete the form");
        pass = false
        break;
      }
    }

    if(pass){
        this.uploadFile(this.state.imageFile, this.state.imageResponse.signedRequest, this.state.imageResponse.url); 
        this.setState({mainImage:this.state.imageResponse.url}) 
        this.setState({otherImages:[""+this.state.imageResponse.url+""]})


        axios.post("/newService",this.state)
        .then(function(response){
          // console.log(response.data) //Do something with this later. Return showing them their new addition
          //component.props.clickView("e","viewMyProductsTab")
          window.location.href= "/userview/sell:viewMyServicesTab"
          
        })
        .catch(function(error){console.log(error)})
    }
  }


  
 

  render() {
    if(this.props.show){
      return (
        <div className="">

                <Column  large={12} small={12} medium={12} style={{height:"20vh",borderRadius:"5px"}} >
                      
                     <h1 style={{fontFamily:"moon"}}> Offer a new service </h1>

                 </Column>

                <Column  large={6} small={12} medium={12}  >
                <div style={{marginLeft:"40%"}}>
                    <form >
                      <label style={{fontFamily:"moon",fontSize:"3vh"}}> Page Name 
                          <input style={{width:"100%"}}
                          name="name"
                          type="text" 
                          value={this.state.name} 
                          onChange={this.handleChange}
                          placeholder=""/> 

                      

                      </label>

                      <label style={{fontFamily:"moon",fontSize:"3vh"}}> What are you? <br></br>
                        <select style={{width:"100%"}}
                        name="mainCategory"
                        type="select"
                        value={this.state.mainCategory}
                        onChange={this.handleChange}>
                              <option>photographer</option>
                              <option>model</option>
                              <option>makeup artist</option>
                              <option>hair stylist</option>
                              <option>artist or designer</option>
                              <option>performer</option>
                              <option>developer</option>
                              <option>brand or business owner</option>


                          
                        </select>
                      </label>

                    

                      <label style={{fontFamily:"moon",fontSize:"3vh"}}>Describe your craft<br></br>
                      
                              <textarea style={{width:"100%"}}
                              name="description"
                              type="textarea"
                              value={this.state.description}
                              onChange={this.handleChange}
                              placeholder="Description of your skill or service."
                              />
                              
                      </label>

                    


                    </form>
                </div>
      
                </Column>

                <Column  large={6} small={12} medium={12}  >
                <div style={{marginRight:"40%"}}>
                    <form>

                        <label style={{fontFamily:"moon",fontSize:"3vh"}}>Upload your page's banner image</label>
                        <p>After this, you will be able to edit your page and add more images.</p>
                        <input type="file" id="file-input" onChange={this.handleImages}/>
                        
                        <img id="preview" src="/images/default.png" width="25%"/>
                    </form>

                    <center> 
                      <br></br>
                 <button onClick={this.submitForm} style={{backgroundColor:"#02bcd2",
                 fontSize:"3vh",borderRadius:"5px",padding:"1vw"}}>Finish</button>

                </center>
                </div>
                </Column>

      
   

       
        </div>
      )
    }else{
      return null
    }
        
  }
}




export default OfferServices


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
