import React from 'react';
import Swipeable from 'react-swipeable';

//Foundation UI:
import Foundation from "react-foundation"
import { Row, Column, Button} from "react-foundation"

//Other views
import Header from "../main_ui_blocks/Header.js"
import Login from "../authen/Login.js"
import Footer from "../main_ui_blocks/Footer.js"


//Not using this no more
const IMG_WIDTH = "100";
const IMG_HEIGHT = "500px";

const RIGHT = '-1';
const LEFT = '+1';

const buttonStyles = {
  height: IMG_HEIGHT,
  color: "#eeeeee",
  fontSize: "2em",
  backgroundColor: 'rgba(230,230,230,.2)',
  border: '0',
  cursor: 'pointer',
};

const buttonLeft = {...buttonStyles, float: 'left'};
const buttonRight = { ...buttonStyles, float: 'right' };

//-------------------------------------------------------------------COMPONENT-----------------------------------
 class Welcome extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { 
      imageIdx: 0,
      windowWidth: window.innerWidth
              };
    this.handleWindowSizeChange =  this.handleWindowSizeChange.bind(this)
   
  }

  // make sure to remove the listener
// when the component is not mounted anymore
  componentWillMount(){
    window.addEventListener("resize",this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange(){
    this.setState({windowWidth:window.innerWidth})
  }


  onSwiped(direction) {
    const {images} = this.props;
    const change = direction === RIGHT ? RIGHT : LEFT;
    const adjustedIdx = this.state.imageIdx + Number(change);
    let newIdx;
    if (adjustedIdx >= images.length) {
      newIdx = 0;
    } else if (adjustedIdx < 0) {
      newIdx = images.length - 1
    } else {
      newIdx = adjustedIdx;
    }
    this.setState({ imageIdx: newIdx });
  }

  render() {


        const { images } = this.props;
        const { imageIdx = 0 } = this.state;
        const { messages } = this.props

        const imageStyles = {
        
          backgroundColor: "white",
          backgroundSize: "1040%",
          backgroundImage: `url(images/welcome_slide/${images[imageIdx]})`

        };

        const width = this.state.windowWidth
        const isMobile = width <= 500
        
        
        if(isMobile){ //MOBILE VIEW -------------------------------------------------------------------------------------------
          return(


            <div>
              <Row large={12} small={12} medium={12} className="gradient-back2" >
                  <Column  large={12} small={12} medium={12} >
                          <Swipeable

                            trackMouse
                            preventDefaultTouchmoveEvent
                            onSwipedLeft={() => this.onSwiped(LEFT)}
                            onSwipedRight={() => this.onSwiped(RIGHT)}
                          >

                            <div className="gradientBack">
                            
                              
                              <Header/>

                            

                              <Row large={12} medium={12} small={12} style={{height:"95vh"}} >
                              
                                    <Column large={12} medium={12} small={12} style={{height:"30vh"}}  >
                                    
                                        <br></br> <br></br><br></br><br></br>

                                          <center>

                                                <div style={{padding:"2%",width:"40vh",backgroundColor:"rgba(255,255,255,0.8)",borderRadius:"6px"}}>
                                              
                                                        <h4 style={{fontFamily:"moonbold"}}> 
                                                              <p>  
                                                                  {messages[imageIdx]} 
                                                              </p> 
                                                              <img src="images/icons/sell.png" width="30%"></img>
                                                        </h4>

                                                        <center>
                                                              <button 
                                                                  onClick={() => this.onSwiped(RIGHT)}
                                                                  style={{}}> <h1>  ⇦  </h1>
                                                                </button>

                                                              <button
                                                                  onClick={() => this.onSwiped(LEFT)}
                                                                  style={{}}><h1> ⇨</h1>
                                                              </button>

                                                                <Login/> 
                                                          </center>
                                                  </div>

                                          </center>
                                      
                                                
                                    </Column>


                                    </Row>

                                

                                  

                                    <Row large={12} medium={12} small={12} >
                                          <Column large={12} medium={12} small={12}>
                                              <Footer/>
                                        </Column>

                                    </Row>
                                  
                              
                          </div>


                          </Swipeable>
                </Column>
              </Row>
            </div>
              
          
          ) 

        }
        else {//PC  VIEW -------------------------------------------------------------------------------------------

              return(
              
              <div>
                    
                <Row large={12} small={12} medium={12} >
                  <Column  large={12} small={12} medium={12} style={imageStyles}>
                          <Swipeable

                            trackMouse
                            preventDefaultTouchmoveEvent
                            onSwipedLeft={() => this.onSwiped(LEFT)}
                            onSwipedRight={() => this.onSwiped(RIGHT)}
                          >

                          

                            <div className="welcome-slide " >
                            
                              
                              <Header/>

                            

                              <Row large={12} medium={12} small={12} style={{height:"95vh"}} >
                              
                                    <Column large={6} medium={12} small={12}
                                     style={{height:"30vh",backgroundColor:"",padding:"5vw"}} >
                                       

                                          

                                                <div style={{padding:"3%",width:"90%",backgroundColor:"rgba(255,255,255,0.8)",borderRadius:"6px"}}>
                                                       <center>
                                                        <h4 style={{fontFamily:"moon"}}> 
                                                              <p>  
                                                                  {messages[imageIdx]} 
                                                              </p> 
                                                           
                                                        </h4>

                                                        
                                                              <button 
                                                                  onClick={() => this.onSwiped(RIGHT)}
                                                                  style={{}}> <h1>  ⇦  </h1>
                                                                </button>

                                                              <button
                                                                  onClick={() => this.onSwiped(LEFT)}
                                                                  style={{}}><h1> ⇨</h1>
                                                              </button>

                                                                <Login/> 
                                                          </center>
                                                  </div>

                                       
                                      
                                                
                                    </Column>


                                  

                                    </Row>

                                

                                  

                                    <Row large={12} medium={12} small={12} >
                                          <Column large={12} medium={12} small={12}>
                                              <Footer/>
                                        </Column>

                                    </Row>
                                  
                              
                          </div>


                          </Swipeable>
                </Column>
              </Row>
            
              </div>
              
              )
               
                  


        }
        
        
        
  }
}

Welcome.defaultProps = {

    images : [".jpg",".jpg",".jpg"],
    messages :
     ["Discover Christian artists and music that you will love.", 
   "Join the Zion Music Revival Movement!"]
   

}


export default Welcome


//<p>Image: {imageIdx + 1}</p>
/*     <div style={imageStyles}>
                        
<br></br>
<Header/>



<Row large={12} medium={12} small={12}>
                          
                          
                          
                              <Column large={4} medium={4} small={12}>
                                  
                                      <button 
                                            onClick={() => this.onSwiped(RIGHT)}
                                            style={buttonLeft}> <h1>  ⇦  </h1>
                                      </button>


                                          
                                
                                </Column>

                                <Column large={4} medium={4} small={12} style={{padding:"2vw",backgroundColor:"rgba(255,255,255,0.65)",borderRadius:"6px"}} >
                                    
                                      
                                            <h4 style={{marginLeft:"2vw",fontFamily:"moonbold"}}> 
                                                  <p>  
                                                      {messages[imageIdx]} 
                                                  </p> 
                                            </h4>

                                             

                                            <center>
                                            <button 
                                                onClick={() => this.onSwiped(RIGHT)}
                                                style={{}}> <h1>  ⇦  </h1>
                                              </button>

                                            <button
                                                onClick={() => this.onSwiped(LEFT)}
                                                style={{}}><h1> ⇨</h1>
                                            </button>

                                              <Login/> </center>

                                            

                                </Column>

                              <br></br>

                                <Column large={4} medium={4} small={6} >
                                      <button
                                          onClick={() => this.onSwiped(LEFT)}
                                          style={buttonRight}><h1> ⇨</h1>
                                      </button>

                                </Column>
                              
                           
                          
                       


                          
                          </Row>



*/
