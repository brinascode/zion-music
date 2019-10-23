import React from 'react';

//Routing
import { Link } from 'react-router-dom';
import axios from "axios"


//Foundation UI:
import Foundation from "react-foundation"
import { Row, Column, Button}

from "react-foundation"

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';




//-------------------------------------------------------------------COMPONENT-----------------------------------
class CatalogTypeView extends React.Component {


  
  constructor(props){
    super(props)

    this.findAllSales = this.findAllSales.bind(this);
    this.findAllServices = this.findAllServices.bind(this);
    this.setPagination = this.setPagination.bind(this);
    this.pageTurnLeft = this.pageTurnLeft.bind(this);
    this.pageTurnRight = this.pageTurnRight.bind(this);
    this.changeItemsPerPage = this.changeItemsPerPage.bind(this);
    this.searchCatalog = this.searchCatalog.bind(this);
    this.handleSearchText = this.handleSearchText.bind(this);
 

    const index = this.props.location.pathname.indexOf(":")
    const params = this.props.location.pathname.substring(index)

    this.stateObj = {
            allSales:[],
            allServices:[],
            productsToDisplay:[],
            servicesToDisplay:[],
            searchResults:[],
            type:"",
            mainCategory:"",
            totalItems:0,
            totalPages:1,
            itemsPerPage:10,
            startIndex:0,
            onPage:1,
            schemaType:"", //product or service
            searchText:"",
            display:{productsId:1,servicesId:2},
            searchState:false
    }
    this.state = this.stateObj
 
    
   
    switch(params) {
        
        
        case  ":textbooks":
          this.stateObj.type = "Textbooks"
          this.stateObj.mainCategory = "textbooks"
          this.stateObj.schemaType = "Product"
          this.state =  this.stateObj;
          break;

        case ":sales":
          this.stateObj.type = "Things on sale"
          this.stateObj.mainCategory = "other"
          this.stateObj.schemaType = "Product"
          this.state = this.stateObj
          break;

        case  ":makeup":
          this.stateObj.type = "Makeup Artists"
          this.stateObj.mainCategory = "makeup artist"
          this.stateObj.schemaType = "Service"
          this.state = this.stateObj
          break;

      

        case ":hair":
          this.stateObj.type = "Hair braiding/ styling"
          this.stateObj.mainCategory = "hair stylist"
          this.stateObj.schemaType = "Service"
          this.state = this.stateObj
           break;

        case ":artists":
            this.stateObj.type = "Digital Artists and Designers"
            this.stateObj.mainCategory = "artist or designer"
            this.stateObj.schemaType = "Service"
            this.state = this.stateObj
           break;

           case ":photographers":
              this.stateObj.type = "Photographers"
              this.stateObj.mainCategory = "photographer"
              this.stateObj.schemaType = "Service"
              this.state = this.stateObj
           
              break;

           case ":models":
            this.stateObj.type = "Models"
            this.stateObj.mainCategory = "model"
            this.stateObj.schemaType = "Service"
            this.state = this.stateObj
           
            break;

           case ":performers":
              this.stateObj.type = "Performers"
              this.stateObj.mainCategory = "performer"
              this.stateObj.schemaType = "Service"
              this.state = this.stateObj
            
           break;

           case ":developer":
              this.stateObj.type = "App/Website developers"
              this.stateObj.mainCategory = "developer"
              this.stateObj.schemaType = "Service"
              this.state = this.stateObj
             
             break;

           case ":carpool":
              this.stateObj.type = "Carpool"
              this.stateObj.mainCategory = "carpool"
              this.stateObj.schemaType = "Service"
              this.state = this.stateObj
              break;

           case ":businesses":
              this.stateObj.type = "Other Student Owned Businesses and Brands"
              this.stateObj.mainCategory = "brand or business owner"
              this.stateObj.schemaType = "Service"
              this.state = this.stateObj
           break;

      default:
       null
    } 

  }

  


  componentDidMount(){

   if(this.state.mainCategory == "textbooks" || this.state.mainCategory =="other"){
      
      this.findAllSales();
      this.setPagination(this.state.itemsPerPage)

   }
   else {
     
     this.findAllServices();
     this.setPagination(this.state.itemsPerPage)
   }
    
    

  }


  findAllSales(){ // when mainCategory == "textbook" or "other"
     const component = this

       axios.post("/allSales",{mainCategory:this.state.mainCategory})
         .then(function(response){  
              

               component.stateObj.allSales = response.data.reverse()
               component.setState({allSales:component.stateObj.allSales})

                component.stateObj.productsToDisplay = response.data.reverse().slice(0,component.stateObj.itemsPerPage )//slow loading
                component.setState({productsToDisplay:component.stateObj.productsToDisplay})


               
                
             })
         .catch(function(error){console.log(error)})
        
   }


   findAllServices(){// when mainCategory !== "textbook" or "other"
    const component = this

    axios.post("/allServices",{mainCategory:this.state.mainCategory})
      .then(function(response){
         //if there are too many items in each category this code must change. 
     //Limit each req to 100 items, and most recent for sales, and services, find a smart way to do it.
         
            component.stateObj.allServices = response.data.reverse()
            component.setState({allServices:component.stateObj.allServices})

            component.stateObj.servicesToDisplay = response.data.reverse().slice(0,component.stateObj.itemsPerPage )//slow loading
            component.setState({servicesToDisplay :component.stateObj.servicesToDisplay })
  
              
          })
      .catch(function(error){console.log(error)})

   }


  

   setPagination(itemsPerPage,totalItemsFromSearch){ //Defines the number of pages there are to be turned
    const component = this

    if(this.state.searchState){//pagination after a search

      var totalItems = totalItemsFromSearch
       component.setState({totalItems:totalItemsFromSearch})

      //Calculating number of pages needed to display results
      var totalPages = totalItems/itemsPerPage
      if(totalItems % itemsPerPage){ //if its a decimal value, we round down, then we add one
       totalPages = Math.floor(totalPages) + 1
      }
      component.setState({totalPages:totalPages})



    }else {//pagination before a search
      axios.post("/getTotalItemsNumber",{schemaType:this.state.schemaType,mainCategory:this.state.mainCategory})
     .then(function(response){

       var totalItems = response.data.total
       component.setState({totalItems:totalItems})

      //Calculating number of pages needed to display results
      var totalPages = totalItems/itemsPerPage
      if(totalItems % itemsPerPage){ //if its a decimal value, we round down, then we add one
       totalPages = Math.floor(totalPages) + 1
      }
      component.setState({totalPages:totalPages})

      

     }).catch(function(error){
       console.log(error)
     })
    }
    

   }

   changeItemsPerPage(event){

    var newItemsPerPage = event.target.value
   


    if(this.state.schemaType == "Product"){
      if(this.state.searchState){
        this.setPagination(newItemsPerPage,this.state.searchResults.length)
        this.stateObj.itemsPerPage = newItemsPerPage
        this.setState({itemsPerPage:newItemsPerPage})

        var newDisplay= this.state.searchResults.slice(0,newItemsPerPage)//slow loading
        this.setState({productsToDisplay:newDisplay})
      }else{
        this.setPagination(newItemsPerPage)
        this.stateObj.itemsPerPage = newItemsPerPage
        this.setState({itemsPerPage:newItemsPerPage})

        this.stateObj.productsToDisplay = this.stateObj.allSales.slice(0,newItemsPerPage)//slow loading
        this.setState({productsToDisplay:this.stateObj.productsToDisplay})
      }
    

    }else if(this.state.schemaType == "Service"){
      if(this.state.searchState){
       
        this.setPagination(newItemsPerPage,this.state.searchResults.length)
        this.stateObj.itemsPerPage = newItemsPerPage
        this.setState({itemsPerPage:newItemsPerPage})

        var newDisplay= this.state.searchResults.slice(0,newItemsPerPage)//slow loading
        this.setState({servicesToDisplay:newDisplay})

      }else{
        this.setPagination(newItemsPerPage)
        this.stateObj.itemsPerPage = newItemsPerPage
        this.setState({itemsPerPage:newItemsPerPage})

        this.stateObj.servicesToDisplay = this.stateObj.allServices.slice(0,newItemsPerPage)//slow loading
        this.setState({servicesToDisplay:this.stateObj.servicesToDisplay})
      }
      
    }

    //We return to the first page after this (for simplicity's sake)
    this.setState({onPage: 1})
 
   }


   

  pageTurnLeft(){
    //Updating page number if we're not on the first page
    if(this.state.onPage > 1){
      
     
      var newPageNum = this.state.onPage-1 //decreasing page number
      var startIndex = this.state.itemsPerPage*(newPageNum-1)
      var stopIndex =  this.state.itemsPerPage*(newPageNum)
      var toDisplay = []

      if(this.state.schemaType == "Product"){
              if(this.state.searchState){
                toDisplay = this.stateObj.searchResults.slice(startIndex,stopIndex) //returning a new set of items to display slice(startIndex,stopIndex)
              this.setState({productsToDisplay:toDisplay})
              }else{
                  toDisplay = this.stateObj.allServices.slice(startIndex,stopIndex) //returning a new set of items to display slice(startIndex,stopIndex)
                  this.setState({productsToDisplay:toDisplay})
              }

      }else if(this.state.schemaType == "Service"){
        if(this.state.searchState){
          toDisplay = this.stateObj.searchResults.slice(startIndex,stopIndex) //returning a new set of items to display slice(startIndex,stopIndex)
          this.setState({servicesToDisplay:toDisplay})
        }else{
          toDisplay = this.stateObj.allServices.slice(startIndex,stopIndex) //returning a new set of items to display slice(startIndex,stopIndex)
          this.setState({servicesToDisplay:toDisplay})

        }

        
      }
      //  debugging alert(startIndex+ "" + stopIndex)
    
     this.setState({onPage: newPageNum})
              
    }

   
  }

  pageTurnRight(){
    //Updating page number only if we're not on the last page 
    if(this.state.onPage < this.state.totalPages){

      var newPageNum = this.state.onPage+1 //increasing page number
      var startIndex = this.state.itemsPerPage*this.state.onPage
      var stopIndex = this.state.itemsPerPage*(newPageNum)
      var toDisplay = []

      if(this.state.schemaType == "Product"){
        
        if(this.state.searchState){
          toDisplay = this.stateObj.searchResults.slice(startIndex,stopIndex) //returning a new set of items to display slice(startIndex,stopIndex)
          this.setState({productsToDisplay:toDisplay})
        }else{
          toDisplay = this.stateObj.allSales.slice(startIndex,stopIndex) //returning a new set of items to display slice(startIndex,stopIndex)
          this.setState({productsToDisplay:toDisplay})
        }
      
      }
      else if(this.state.schemaType == "Service"){
        if(this.state.searchState){
          toDisplay = this.stateObj.searchResults.slice(startIndex,stopIndex) //returning a new set of items to display slice(startIndex,stopIndex)
         this.setState({servicesToDisplay:toDisplay})
        }else{
          toDisplay = this.stateObj.allServices.slice(startIndex,stopIndex) //returning a new set of items to display slice(startIndex,stopIndex)
          this.setState({servicesToDisplay:toDisplay})
        }
        
      }
      //for debugging alert(startIndex+ "" + stopIndex)
   
     this.setState({onPage: newPageNum})
    
    }
 
  }

  handleSearchText(e){
     var value = e.target.value
     this.setState({searchText:value})

  }
 

  searchCatalog(e){
    const component = this

    if(e.target.id == "searchBtn1"){

      axios.post("/searchCatalog",{schemaType:this.state.schemaType,
        searchText:this.state.searchText,mainCategory:this.state.mainCategory})
  
      .then(function(response){
  
            component.setState({searchState:true})
            component.setState({searchResults:response.data})
            component.setPagination(component.state.itemsPerPage,response.data.length)
            
    
            //No need to affect the allServices array, since it would already be in it or not
        
  
            //Know what to show when there's nothing
           
            //Affecting what does get displayed
            if(component.state.schemaType == "Product"){
  
            component.stateObj.productsToDisplay = []
            component.setState({productsToDisplay:[]}) 
            component.stateObj.productsToDisplay = response.data.reverse().slice(0,component.stateObj.itemsPerPage )//slow loading
            component.setState({productsToDisplay:component.stateObj.productsToDisplay})
  
            
           
            }else if(component.state.schemaType == "Service"){
              
            component.stateObj.toDisplay = []
            component.setState({servicesToDisplay:[]})
            component.stateObj.servicesToDisplay = response.data.reverse().slice(0,component.stateObj.itemsPerPage )//slow loading
            component.setState({servicesToDisplay:component.stateObj.servicesToDisplay})
  
            }
  
           
           
              
          })
      .catch(function(error){console.log(error)})

    }else if(e.target.id == "clearBtn1"){
      
      //Setting it like brand new
      if(component.state.schemaType == "Product"){
        component.setState({searchState:true})
        component.setPagination(component.state.itemsPerPage,component.state.allSales.length)
  
        component.stateObj.productsToDisplay = component.state.allSales.slice(0,component.stateObj.itemsPerPage )//slow loading
        component.setState({productsToDisplay:component.stateObj.productsToDisplay})

        component.setState({searchState:false})
      
        }else if(component.state.schemaType == "Service"){
        component.setState({searchState:true})
        component.setPagination(component.state.itemsPerPage,component.state.allServices.length)

        component.stateObj.servicesToDisplay = component.state.allServices.slice(0,component.stateObj.itemsPerPage )//slow loading
        component.setState({servicesToDisplay:component.stateObj.servicesToDisplay})

        component.setState({searchState:false}) //clearing the search state

        }


    }
 

  }

 
   
  render() {

//share these instead of copying and pasting all the time
    var imgStyle = {
      boxShadow:"0px 0px 0px #888888",
      borderRadius:"px",
      width:"100%"
  }

  var descriptionStyle = {
      boxShadow:"0px 0px 1px #888888",
      padding:"3px",
      fontFamily:"moonbold",
      borderRadius:"6px",
      
   
  }

  var bannerStyle= {
      boxShadow:"0px 0px px #888888",
      padding:"5%",
      height:"20vh",
      borderRadius:"5px"
     
  }

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
            <div className="">
  
            
            <Row large={12} medium={12} small={12} style={{width:"100vw",backgroundColor:"white"}}>
          
                <Column  large={12} small={12} medium={12}  style={bannerColumn.style} className="gradient-back2">
                     
                                  <Column large={12} medium={6} small={6} >
                                      <h1 style={{fontFamily:"moonbold",color:"white"}}> {this.state.type}   </h1> <br></br> <br></br> 
                                    
                                  </Column>

                                
                                        <Column large={6} medium={12} small={12} >
                                            <div className="gradient-back2k" >
                                          
                                          <label>
                                                <h3 style={{fontFamily:"moon"}}>Search 
                                                </h3>
                                            </label>
                                                          <center>
                                                          <input type="text" style={{width:"80%"}} placeholder="Search" value={this.state.searchText} onChange={this.handleSearchText} />

                                                                  <button onClick={this.searchCatalog}  style={{color:"white"}} 
                                                                        style={{backgroundColor:"#02bcd2",fontSize:"1.5vh",borderRadius:"5px",padding:"1vw",margin:"3px"}} id="searchBtn1">
                                                                        Search 
                                                                    </button>

                                                                    <button onClick={this.searchCatalog}  style={{color:"white"}} 
                                                                        style={{backgroundColor:"#02bcd2",fontSize:"1.5vh",borderRadius:"5px",padding:"1vw"}} id="clearBtn1">
                                                                        Clear
                                                                    </button>
                                                                </center>

                                            
                                                  
                                            </div>
                                              
                                        </Column>


                                        <Column large={6} medium={12} small={12}  >
                                            <div className="gradient-back2000" style={{}}>
                                                  
                                                                  <center>
                                                                    
                                                                    <h3 style={{fontFamily:"moon"}}> {this.state.totalItems} result(s)
                                                                    
                                                                    </h3>

                                                                    
                                                                    <h3 style={{fontFamily:"moon"}}> 
                                                                      <b onClick={this.pageTurnLeft}> {"<<"} </b>
                                                                      Page <span style={{color:""}}> {this.state.onPage} </span> 
                                                                         of {this.state.totalPages}
                                                                      <b onClick={this.pageTurnRight}> {">>"} </b> 
                                                                   </h3>
                                                                    

                                                                    

                                                                    
                                                                    <br></br>
                                                                  
                                                                    <select className="form-control" style={{display:"inline",width:"10%"}}>
                                                                        <option value={10} onClick={this.changeItemsPerPage} >10</option>
                                                                        <option value={20} onClick={this.changeItemsPerPage}>20</option>
                                                                        <option value={50} onClick={this.changeItemsPerPage}>50</option>
                                                                        <option value={100} onClick={this.changeItemsPerPage}>100</option>
                                                                      
                                                                    </select> 
                                                                     items per page
                                                                  
                                                                   
                                                                   

                                                                  </center>


                          
                                                            

                                                
                                                </div>
                                        </Column>

                     </Column>
                   

                      <Column large={12} medium={12} small={12} >
                   
                             
                      </Column>


                        {this.state.productsToDisplay.map(product => 
                                 
                                        <Column large={3} small={12} medium={4} style={itemColumn.style} key={this.state.display.productsId}>
                                            <Link to={`/userview/product:${product._id}`} >
                                                  
                                                <div style={descriptionStyle}  className=" gradient-ba">
                                                      <img src={product.mainImage} style={imgStyle} width="100%"/>
                                                      <div style={{marginLeft:"5%"}}>
                                                       <center> <h4   className="catalog-item gradient-back2k2"> {product.name} </h4> </center>
                                                        <h4 style={{fontFamily:"moon"}}>  {product.mainCategory} </h4>
                                                        <h4 style={{fontFamily:"moon"}}> ${product.price}</h4>
                                                        <h4 style={{fontFamily:"moon"}}> Available: {product.quantity}</h4>
                                                      </div>
                                                  </div>
                                              </Link>
                                                
                                            </Column>
                                         

                                  )}


                    {this.state.servicesToDisplay.map(service => 
                              
                                        <Column large={3} small={12} medium={4}  style={itemColumn.style} >
                                        <Link to={`/userview/service:${service._id}`} style={{color:"black"}}>
                                              
                                           <div  style={descriptionStyle} className=" gradient-bac">
                                                <img src={service.mainImage} style={imgStyle}/>
                                                <div style={{padding:"5%"}}>
                                                <center>   <h4 style={{color:'',fontFamily:"moonbold"}} className="gradient-back2k2"> {service.name} </h4>  </center> 
                                                  
                                                </div>
                                                
                                              </div>
                                           </Link>
                                            
                                            </Column>
                               
                                  )}  
                          

                 
                          
       
    </Row>
           
            </div>
          )
       
        
  }
}




export default CatalogTypeView
 /* getServices(startIndex,stopIndex){ //it's for products and services, but we just using this name
     const component = this
     axios.post("/getServices",{mainCategory:this.state.mainCategory,beginSearch:startIndex,endSearch:stopIndex})
      .then(function(response){
        console.log(response)
        component.setState({toDisplay:response.data}) //do we reverse or??let them pick filter
       // alert(response.data)

      }).catch(function(error){
        console.log(error)
      })
    
   } */