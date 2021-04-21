import React from "react"
import Head from "./Head.js"
import ChooseMenu from "./ChooseMenu.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import "./font.css"
import { Collapse } from "react-bootstrap";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      homemenustart:false,
      homemenu:false,
      wait:""
    }
  }
  sethomemenu(event){
    this.setState({wait:500})
    this.setState({homemenu:event}) 
    this.space(event);
  }
  space(event){
    if(event){
      setTimeout(function() {
        this.setState({homemenustart:event})
      }.bind(this), 200);  
    }    
  }
  
  render() {
    return (
      <body >
        <div className="APPbackground">
          <Head/>    
          <Collapse  in={this.state.homemenu}>
            <div><ChooseMenu/></div>
          </Collapse>        
          <Collapse  in={!this.state.homemenustart}>
            <card>
            <div className="center APPtexthead APPtexthead2"><div className="APPtexthead1">
                <b>NUMERICAL METHOD</b>
                </div>
                <div className="center APPtexthead2">
                <p>นิวเมอร์ นรกที่คุณสร้างสรรค์เอง</p>
                </div>
                <br/><div>
                </div>
            </div>
            <div className="center"/>
              <button 
              onClick={()=>this.sethomemenu(!this.state.homemenustart)}
              className="btn btn-lg btn-light menustartcss" 
              ><b>เริ่มใช้สูตรโกง</b>
            </button>
            <div className="homemenubottom"/>
            </card>
          </Collapse >
        </div>
        <footer className="footer center">
          <div>Official Statement : <a href="https://www.facebook.com/GuilKung/" target="_self">LightOfficialStudio</a></div >
        </footer>
      </body>
    )
  }
}

export default App;