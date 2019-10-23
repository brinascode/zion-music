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
      mainImage:"", //the url
     // otherImages:[""],
      sellerId:sessionStorage.getItem("userId"),
      datePosted:new Date(),
      product:[]

    }

    this.getMyProduct = this.getMyProduct.bind(this)

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeArray = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleImages = this.handleImages.bind(this)
    this.formStyle = {width:"50%"}

  }

  getMyProduct(){

    const params = this.props.match.params.id
    const component = this
     
      axios.post("/getMyProduct",{_id:params.substring(1)})
      .then(function(response){
        var product = response.data[0]
       
        component.setState({ 
            _id:params.substring(1),
            name:product.name,
            mainCategory:product.mainCategory,
            //subCategories:[], 
            description:product.description,
            price:product.price,
            quantity:product.quantity, //listed in the UI as number
            mainImage:product.mainImage, //the url
            otherImages:[""]
            
  
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

  

  submitForm(){
      //make sure every aspect is checked
      //Post function

      //Pass to decide whether or not form is complete.
      //Next: make sure it's also the proper type

      const component = this
     

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
              axios.post("/editProduct",this.state)
              .then(function(response){
                // console.log(response.data) //Do something with this later. Return showing them their new addition
                component.props.clickView("e","viewMyProductsTab")
              })
              .catch(function(error){console.log(error)})
        }
        
      }
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


    //We get signature from server. Then, we upload the file immediately.
    function getSignedRequest(file){
  
      const xhr = new XMLHttpRequest();
      
      xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
          if(xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            uploadFile(file, response.signedRequest, response.url); //where to place this better??
          }
          else{
            alert('Could not get signed URL.');
          }
        }
      };
      xhr.send();
         
    }


    function uploadFile(file, signedRequest, url){
    
      const xhr = new XMLHttpRequest();
      xhr.open('PUT', signedRequest);
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
          if(xhr.status === 200){
            document.getElementById('preview').src = url; //dont confuse this url for the repsonse.url
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

  }




  render() {

    
      
      return (
        <div className="">

        
       
      
                <Column  large={12} small={12} medium={12} style={{padding:"5%",height:"20vh",borderRadius:"5px"}} >
                      
                     <h1 style={{fontFamily:"moon"}}> <img src={process.env.PUBLIC_URL + "/images/icons/edit.png"} width="8%" style={{float:"inherit "}}></img> Edit: {this.state.name} </h1>

                 </Column>
           
                <Column  large={12} small={12} medium={12} style={{padding:"5%",height:"30vh"}} >

                 <form >
                   <label > Product Name or Name of textbook <br></br>
                      <input style={this.formStyle}
                      name="name"
                      type="text" 
                      value={this.state.name} 
                      onChange={this.handleChange}
                      placeholder={this.state.name}/> 

                   
                   </label>

                   <label> Main Category <br></br>
                     <select style={this.formStyle}
                     name="mainCategory"
                     type="select"
                     value={this.state.mainCategory}
                     onChange={this.handleChange}>
                          <option>textbooks</option>
                          <option>other</option>
                       
                     </select>

                     
                   </label>

                

                   <label>Description<br></br>
                   
                          <textarea style={this.formStyle}
                          name="description"
                          type="textarea"
                          value={this.state.description}
                          onChange={this.handleChange}
                          placeholder="If your item is a textbook, include the name of the author and other important references."
                          />
                          
                  </label>


                  <label>Price ($) <br></br>
                     <input style={this.formStyle}
                     name="price"
                     type="number"
                     value={this.state.price}
                     onChange={this.handleChange}
                     />
                  
                  </label>




                   <label>Number Available<br></br>
                     <input style={this.formStyle}
                     name="quantity"
                     type="number"
                     value={this.state.quantity}
                     onChange={this.handleChange}
                     />
                  
                  </label>

                    <label>Upload your product's main image</label>
                    <p>You can add up to 3 more images later.</p>
                    <p id="status">Please select a file</p>
                      <input type="file" id="file-input" onChange={this.handleImages}/>
                        
                        <img id="preview" src="/images/default.png" width="25%"/>

                        

                </form>

                <button onClick={this.submitForm} style={{backgroundColor:"#02bcd2",fontSize:"1.5vh",borderRadius:"5px",padding:"1vw"}}>Save changes</button>
                        
                        
                      
                </Column>

      
   

       
        </div>
      )
    
        
  }
}




export default EditProduct

