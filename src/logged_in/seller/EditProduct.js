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
class EditProduct extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      name:"",
      mainCategory:"textbooks", // Higher level is either textbooks or other stuff. 
      subCategories:[], //using different sections to identify item. Ex: ['dorm','girls',"boys",] etc. This  will be used for filters, hashtags etc
      //subCategory:"", //a helper variable to work with checkboxes                
      description:"",
      price:5,
      quantity:1, //listed in the UI as number
      mainImage:"", //a url
      otherImages:[""],
      sellerId:sessionStorage.getItem("userId"),
      datePosted:new Date(),
      product:[]
    }

    this.stateHelper = {
      imageFile:"",
      signedRequest:{},
      url:""

    }

    


    this.getMyProduct = this.getMyProduct.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeArray = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleImages = this.handleImages.bind(this)
    this.uploadFile = this.uploadFile.bind(this)
  
  }


  getMyProduct(){
    var index = this.props.location.pathname.indexOf(":")
    var id = this.props.location.pathname.substring(index+1)
  
    const component = this
     
      axios.post("/getMyProduct",{_id:id})
      .then(function(response){
        var product = response.data[0]
       
        component.setState({ 
            _id:id,
            name:product.name,
            mainCategory:product.mainCategory,
            description:product.description,
            price:product.price,
            quantity:product.quantity, //listed in the UI as number
            mainImage:product.mainImage, //the url
            otherImages:product.otherImages
            })
      
      })
      .catch(function(error){console.log(error)})
  

  }

  componentDidMount(){
       this.getMyProduct()
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

  //Getting the file once user selects it (uploads it to CLIENT) / once there's a change
  handleImages(e){
    const component = this
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
                          component.stateHelper={imageFile:file,signedRequest:response.signedRequest,url:response.url} //but all of this is going to editProducts!!
                          document.getElementById('preview').src = response.url; //dont confuse this url for the response.url
                }
                else{
                  alert('Could not get signed URL.');
                }
            }
        };
        xhr.send(); //this is when the request actually gets sent! The top part is just 'defining/definitions of stuff
    }   
}



//Gets called after Submit Button is clicked
uploadFile(){

  var file = this.stateHelper.imageFile
  var signedRequest = this.stateHelper.signedRequest
  var url = this.stateHelper.url

  if(file == ""){ //aka The value from the stateHelper has never been changed
      alert("No file to upload")
  }else{
    

  //We upload image to AWS Bucket
  const xhr = new XMLHttpRequest();
  const component = this
  xhr.open('PUT', signedRequest);
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4){
      if(xhr.status === 200){
          component.setState(prevState => ({ //isolate this for my documentation ...coding practices
            otherImages: [...prevState.otherImages, url] //adding the image to the end of our otherImages array
          }))  
      }
      else{
        alert('Could not upload file.');
      }
    }
  };
  xhr.send(file);

  //Then we post the update to our backend
  axios.post("/editProduct",this.state) //the issue is that it also sends the form!! 
          .then(function(response){

            //Clearing our stateHelper
              component.stateHelper = {
                imageFile:"",
                signedRequest:{},
                url:""
          
              }
              
            
          })
          .catch(function(error){console.log(error)})

  //Then we refresh the page to reflect that update
  this.getMyProduct()
  // alert(JSON.stringify(component.state)) helps for the ajax issue
  } 
}


submitForm(){
  //make sure every aspect is checked
  //Post function

  //Pass to decide whether or not form is complete.
  //Next: make sure it's also the proper type

  var pass = true
  for(var key in this.state){
    if(this.state[key] !== "otherImages" && (this.state[key] === "" || this.state[key] === 0) ){
      alert("Please complete the form");
      pass = false
      break;
    }
  }

  if(pass){
    if(window.confirm("Are you sure you want to make these changes?")){
      this.uploadFile(this.state.imageFile, this.state.imageResponse.signedRequest, this.state.imageResponse.url); 
      this.setState({mainImage:this.state.imageResponse.url}) //?
          axios.post("/editProduct",this.state)
          .then(function(response){            
          })
          .catch(function(error){console.log(error)})
          window.location.href = "/userview/sell:viewMyProductsTab"
    }
    
  }
}

  render() {

      //For resp design
      var bannerColumnMobile = { margin:"10px",marginTop:"50px",borderRadius:"5px",width:"100%"}
      var bannerColumnPc = {margin:"15%",marginTop:"10%",marginBottom:"3%",borderRadius:"5px"}
      
      var itemColumnMobile = {padding:"10px",width:"100%",borderRadius:"5px"}
      var itemColumnPc = {}
      var innerPaddingPc = {marginLeft:"40%"}
 
      var bannerColumn = {}
      var itemColumn = {}
      var innerPadding = {}
 
      if(this.props.mobile){
          bannerColumn.style = bannerColumnMobile
          itemColumn.style = itemColumnMobile
      }else{
          bannerColumn.style = bannerColumnPc
          itemColumn.style = itemColumnPc
          innerPadding.style  = innerPaddingPc

      }
      
      return (
        <div className="">

        <Row large={12} medium={12} small={12} >
       
      
                <Column  large={12} small={12} medium={12} style={bannerColumn.style} className="gradient-back2">
                      
                    <h1 style={{fontFamily:"moonbold",color:"white"}}> 
                      <img src={process.env.PUBLIC_URL + "/images/icons/edit.png"}
                      width="8%" style={{float:"inherit "}}></img> Editing: {this.state.name} </h1>

                 </Column>
           
                <Column  large={6} small={12} medium={12} style={itemColumn.style} >
                  <div style={innerPadding.style}>
                          <form>
                            <label style={{fontFamily:"moon",fontSize:"3vh"}}> Product Name or Name of textbook <br></br>
                                <input style={{width:"100%"}}
                                name="name"
                                type="text" 
                                value={this.state.name} 
                                onChange={this.handleChange}
                                placeholder={this.state.name}/> 

                            
                            </label>

                            <label style={{fontFamily:"moon",fontSize:"3vh"}}> Main Category <br></br>
                              <select style={{width:"100%"}}
                              name="mainCategory"
                              type="select"
                              value={this.state.mainCategory}
                              onChange={this.handleChange}>
                                    <option>textbooks</option>
                                    <option>other</option>
                                
                              </select>

                              
                            </label>

                          

                            <label style={{fontFamily:"moon",fontSize:"3vh"}}>Description<br></br>
                            
                                    <textarea style={{width:"100%"}}
                                    name="description"
                                    type="textarea"
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                    placeholder="If your item is a textbook, include the name of the author and other important references."
                                    />
                                    
                            </label>


                            <label style={{fontFamily:"moon",fontSize:"3vh"}}>Price ($) <br></br>
                              <input style={{width:"100%"}}
                              name="price"
                              type="number"
                              value={this.state.price}
                              onChange={this.handleChange}
                              />
                            
                            </label>




                            <label style={{fontFamily:"moon",fontSize:"3vh"}}>Number Available<br></br>
                              <input style={{width:"100%"}}
                              name="quantity"
                              type="number"
                              value={this.state.quantity}
                              onChange={this.handleChange}
                              />
                            
                            </label>

                          </form>

                          <center><button onClick={this.submitForm} 
                          style={{backgroundColor:"#02bcd2",fontSize:"3vh",borderRadius:"5px",padding:"1vw"}}>
                          Save changes</button></center>
                    </div>

                </Column>


                <Column  large={6} small={12} medium={12} style={itemColumn.style} >

                <h4 style={{fontFamily:"moonbold",fontSize:"3vh"}}>Images</h4>
               
                
                    <h4 style={{fontFamily:"moon",fontSize:"3vh"}}>Your main image</h4>
                    <p>Click on another image to make it your main image.</p>
                    <img src={this.state.mainImage} style={{borderRadius:"5px",border:"solid red"}} width="50%" />
                    <br></br><br></br>

                    <h4 style={{fontFamily:"moon",fontSize:"3vh"}}>All of your images</h4>
                    {this.state.otherImages.map( url =>  
                       <img src={url} style={{borderRadius:"5px"}} width="20%" />) }

                
                    <h4 style={{fontFamily:"moon",fontSize:"3vh"}}>Upload more images</h4>
                    <input type="file" id="file-input" onChange={this.handleImages}/>
                    <img id="preview" src="/images/default.png" width="25%"/>

                    <center>
                      <button 
                      onClick={this.uploadFile} 
                          style={{backgroundColor:"#02bcd2",fontSize:"3vh",borderRadius:"5px",padding:"1vw"}}>
                         Upload Image</button> <br></br></center>

               
              </Column>

               

        </Row>
      
   

       
        </div>
      )
    
        
  }
}




export default EditProduct

