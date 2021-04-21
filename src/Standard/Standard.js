import React from "react"
import Graphical from "./Graphical"
import Bisection from "./Bisection"
import FlasePosition from "./FalsePosition"
import OnePoint from "./OnePoint"
import NewtonRaphson from "./NewtonRaphson"
import Secant from "./Secant"
import { Row, Container } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import { Collapse} from "react-bootstrap"

class Standard extends React.Component {
    constructor(props){
        super(props)
        this.state={
          menucontent:false,
          menuon1:false,
          menuon2:false,
          menuon3:false,
          menuon4:false,
          menuon5:false,
          menuon6:false
        }
        this.setmenucontent=this.setmenucontent.bind(this)
        this.setmenuzero=this.setmenuzero.bind(this)
        this.setmenuon1=this.setmenuon1.bind(this)
        this.setmenuon2=this.setmenuon2.bind(this)
        this.setmenuon3=this.setmenuon3.bind(this)
        this.setmenuon4=this.setmenuon4.bind(this)
        this.setmenuon5=this.setmenuon5.bind(this)
        this.setmenuon6=this.setmenuon6.bind(this)
        this.delaytime=this.delaytime.bind(this)
        this.delaytimezero=this.delaytimezero.bind(this)
    }
    setmenuzero(){
        this.setState({menucontent:false})
        this.delaytimezero()
    }
    setmenucontent(event){
        this.setState({menucontent:event})
    }
    setmenuon1(event){
        this.setState({menuon1:event})
        this.delaytime(event)
    }
    setmenuon2(event){
        this.setState({menuon2:event})
        this.delaytime(event)
    }
    setmenuon3(event){
        this.setState({menuon3:event})
        this.delaytime(event)
    }
    setmenuon4(event){
        this.setState({menuon4:event})
        this.delaytime(event)
    }
    setmenuon5(event){
        this.setState({menuon5:event})
        this.delaytime(event)
    }
    setmenuon6(event){
        this.setState({menuon6:event})
        this.delaytime(event)
    }
    callGraphical(){
        return <Graphical/>
    }
    callBisection(){
        return <Bisection/>
    }
    callFlasePosition(){
        return <FlasePosition/>
    }
    callOnePoint(){
        return <OnePoint/>
    }
    callNewtonRaphson(){
        return <NewtonRaphson/>
    }
    callSecant(){
        return <Secant/>
    }
    delaytime(event){
        if(event){
            setTimeout(function() {
                this.setState({menucontent:event})
            }.bind(this), 100);
        }
    }
    delaytimezero(){
        setTimeout(function() {
            this.setState({menuon1:false})
            this.setState({menuon2:false})
            this.setState({menuon3:false})
            this.setState({menuon4:false})
            this.setState({menuon5:false})
            this.setState({menuon6:false})
        }.bind(this), 300);  
    }
    render(){
        const styles={ backgroundColor: '#333', borderColor: '#333' }
        return(
            <div className="card col-mb-12" style={styles}>
                <div className="CMspacetop"/>
                <div className="CMspacebutton"/>
                <div></div>
                <Collapse in={!this.state.menucontent}>
                <Container>
                    <Row>
                        <Col>
                            <div className="cardlistST" style={styles}><div className="card mb-4 shadow-sm">
                                <div className="card card-body center">
                                    <div className=" STspacetop"/>
                                    Graphical
                                    <div className=" STspacebottom"/>
                                </div>
                                <div className="card card-body">
                                    <button className="btn btn-outline-outline-secondary" onClick={()=>this.setmenuon1(!this.state.menuon1)}>View</button>
                                </div>
                            </div></div>
                        </Col>
                        <Col>
                            <div className="cardlistST" style={styles}><div className="card mb-4 shadow-sm">
                                <div className="card card-body center">
                                    <div className=" STspacetop"/>
                                Bisection
                                    <div className=" STspacebottom"/>
                                </div>
                                <div className="card card-body">
                                    <button className="btn btn-outline-outline-secondary" onClick={()=>this.setmenuon2(!this.state.menuon2)}>View</button>
                                </div>
                            </div></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="cardlistST" style={styles}><div className="card mb-4 shadow-sm">
                                <div className="card card-body center">
                                    <div className=" STspacetop"/>
                                FlasePosition
                                    <div className=" STspacebottom"/>   
                                </div>
                                <div className="card card-body">
                                    <button className="btn btn-outline-outline-secondary" onClick={()=>this.setmenuon3(!this.state.menuon3)}>View</button>
                                </div>
                            </div></div>
                        </Col>
                        <Col>
                            <div className="cardlistST" style={styles}><div className="card mb-4 shadow-sm">
                                <div className="card card-body center">
                                    <div className=" STspacetop"/> 
                                    OnePoint
                                        <div className=" STspacebottom"/>   
                                </div>
                                <div className="card card-body">
                                    <button className="btn btn-outline-outline-secondary" onClick={()=>this.setmenuon4(!this.state.menuon4)}>View</button>
                                </div>
                            </div></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className="cardlistST" style={styles}><div className="card mb-4 shadow-sm">
                                <div className="card card-body center">
                                    <div className=" STspacetop"/>
                                    NewtonRaphson
                                        <div className=" STspacebottom"/>
                                </div>
                                <div className="card card-body">
                                    <button className="btn btn-outline-outline-secondary" onClick={()=>this.setmenuon5(!this.state.menuon5)}>View</button>
                                </div>
                            </div></div>
                        </Col>
                        <Col>
                            <div className="cardlistST" style={styles}><div className="card mb-4 shadow-sm">
                                <div className="card card-body center">
                                    <div className=" STspacetop"/>
                                    Secant
                                        <div className=" STspacebottom"/>
                                </div>
                                <div className="card card-body">
                                    <button className="btn btn-outline-outline-secondary" onClick={()=>this.setmenuon6(!this.state.menuon6)}>View</button>
                                </div>
                            </div></div>
                        </Col>
                    </Row>
                </Container>
                </Collapse>
                <Collapse in={this.state.menuon1}>
                    <div className="card">
                        {this.state.menuon1 && this.callGraphical()}
                        <button onClick={()=>this.setmenuzero()} className="btn btn-primary">Back</button>
                    </div>
                </Collapse>
                <Collapse in={this.state.menuon2}>
                    <div className="card">
                        {this.state.menuon2 && this.callBisection()}
                        <button onClick={()=>this.setmenuzero()} className="btn btn-primary">Back</button>
                    </div>
                </Collapse>
                <Collapse in={this.state.menuon3}>
                    <div className="card">
                        {this.state.menuon3 && this.callFlasePosition()}
                        <button onClick={()=>this.setmenuzero()} className="btn btn-primary">Back</button>
                    </div>
                </Collapse>
                <Collapse in={this.state.menuon4}>
                    <div className="card">
                        {this.state.menuon4 && this.callOnePoint()}
                        <button onClick={()=>this.setmenuzero()} className="btn btn-primary">Back</button>
                    </div>
                </Collapse>
                <Collapse in={this.state.menuon5}>
                    <div className="card">
                        {this.state.menuon5 && this.callNewtonRaphson()}
                        <button onClick={()=>this.setmenuzero()} className="btn btn-primary">Back</button>
                    </div>
                </Collapse>
                <Collapse in={this.state.menuon6}>
                    <div className="card">
                        {this.state.menuon6 && this.callSecant()}
                        <button onClick={()=>this.setmenuzero()} className="btn btn-primary">Back</button>
                    </div>
                </Collapse>
            <div className="ContainerCM"/></div>
        )
    }
}
export default Standard;