import React from "react"
import Standard from "./Standard/Standard"
import Direct from "./Direct/Direct"
import Integration from "./Integration/Integration"
import Interpolation from "./Interpolation/Interpolation"
import Regression from "./Regression/Regression"
import Container from 'react-bootstrap/Container'
import {Collapse} from "react-bootstrap"


class ChooseMenu extends React.Component {
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
        window.location.href="#TOP"
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
    callStandard(){
        return <Standard/>
    }
    callDirect(){
        return <Direct/>
    }
    callIntegration(){
        return <Integration/>
    }
    callInterpolation(){
        return <Interpolation/>
    }
    callRegression(){
        return <Regression/>
    }
    callDirect(){
        return <Direct/>
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
        window.location.href="#"
    }
    render(){
        const styles={ backgroundColor: '#333', borderColor: '#333' }
        return(
            <div className="CMbackground ">
                <a id="TOPCM"/>
                <Collapse in={!this.state.menucontent}>
                    <div>
                    <Container className="ContainerCM" >
                        <div className="card col-md-12 " style={styles}>
                        <div className="ContainerCM"> </div>
                            <div className="cardCM"><div className="card shadow-sm">
                                <div className="card card-title center">
                                    <div className="STspacetop"/>
                                        <h4>Standard Methods</h4>
                                    <div className=" STspacebottom"/>
                                </div>
                                <ul>
                                    <li>Graphical</li>
                                    <li>Bisection</li>
                                    <li>FlasePosition</li>
                                    <li>OnePoint</li>
                                    <li>NewtonRaphson</li>
                                    <li>Secant</li>
                                </ul>
                                <div className="card card-body">
                                    <button className="btn btn-outline-outline-secondary" onClick={()=>this.setmenuon1(!this.state.menuon1)}>View</button>
                                </div>
                            </div></div>
                        <div className="ContainerCM"> </div>
                        <div className="cardCM"><div className="card shadow-sm">
                            <div className="card card-title center">
                                    <div className="STspacetop"/>
                                        <h4>Direct Methods</h4>
                                    <div className=" STspacebottom"/>
                                </div>
                                <ul>
                                    <li>Cramer's Rule</li>
                                    <li>Guess Elimination</li>
                                    <li>Guess Jurdan</li>
                                    <li>Lu Decomposition</li>
                                    <li>Cholesky Decomposition</li>
                                </ul>
                                <div className="card card-body">
                                    <button className="btn btn-outline-outline-secondary" onClick={()=>this.setmenuon2(!this.state.menuon2)}>View</button>
                                </div>
                            </div></div>
                        <div className="ContainerCM"> </div>
                        <div className="cardCM"><div className="card shadow-sm">
                        <div className="card card-title center">
                                    <div className="STspacetop"/>
                                        <h4>Integration</h4>
                                    <div className=" STspacebottom"/>
                                </div>
                                <ul>
                                    <li>Trapezidal</li>
                                    <li>Simpsom</li>
                                </ul>
                                <div className="card card-body">
                                    <button className="btn btn-outline-outline-secondary" onClick={()=>this.setmenuon3(!this.state.menuon3)}>View</button>
                                </div>
                            </div></div>
                        <div className="CMspacebutton"/>
                        </div>
                    </Container>
                    <Container className="ContainerCM">
                    <div className="card center col-md-12 " style={styles}>
                    <div className="ContainerCM"> </div>
                    <div className="cardCM"><div className="card shadow-sm">
                    <div className="card card-title center">
                                    <div className="STspacetop"/>
                                        <h4>Interpolation</h4>
                                    <div className=" STspacebottom"/>
                                </div>
                                <ul>
                                    <li>Newton's divided-difference</li>
                                    <li>Lagrange polynomials</li>
                                    <li>Spline interpolation</li>
                                </ul>
                                <div className="card card-body">
                                    <button className="btn btn-outline-outline-secondary" onClick={()=>this.setmenuon4(!this.state.menuon4)}>View</button>
                                </div>
                            </div></div>
                        <div className="ContainerCM"> </div>
                        <div className="cardCM"><div className="card shadow-sm">
                        <div className="card card-title center">
                                    <div className="STspacetop"/>
                                        <h4>Regression</h4>
                                    <div className=" STspacebottom"/>
                                </div>
                                <ul>
                                    <li>Least-Square Regression</li>
                                    <li>Linear Regression</li>
                                    <li>Multiple linear Regression</li>
                                    <li>Polynomial Regression</li>
                                </ul>
                                <div className="card card-body">
                                    <button className="btn btn-outline-outline-secondary" onClick={()=>this.setmenuon5(!this.state.menuon5)}>View</button>
                                </div>
                            </div></div>
                        <div className="ContainerCM"> </div>
                        <div className="cardCM"><div className="card shadow-sm">
                        <div className="card card-title center">
                                    <div className="STspacetop"/>
                                        <h4>Conjugate</h4>
                                    <div className=" STspacebottom"/>
                                </div>
                                <ul>
                                    <li>Conjugate Gradient</li>
                                </ul>
                                <div className="card card-body">
                                    <button className="btn btn-outline-outline-secondary" onClick={()=>this.setmenuon6(!this.state.menuon6)}>View</button>
                                </div>
                            </div></div>
                        <div className="CMspacebutton"/>
                    </div>
                    <br/>
                    </Container>
                    </div>
                </Collapse>
                <Collapse in={this.state.menuon1}>
                    <div className="card ContainerCMA CMbackground" >
                        {this.state.menuon1 && this.callStandard()}
                        <button onClick={()=>this.setmenuzero()} className="btn btn-primary">Back</button>                        
                    </div>
                </Collapse>
                <Collapse in={this.state.menuon2}>
                    <div className="card ContainerCMA CMbackground">
                        {this.state.menuon2 && this.callDirect()}
                        <button onClick={()=>this.setmenuzero()} className="btn btn-primary">Back</button>
                    </div>
                </Collapse>
                <Collapse in={this.state.menuon3}>
                    <div className="card ContainerCMA CMbackground">
                        {this.state.menuon3 && this.callIntegration()}
                        <button onClick={()=>this.setmenuzero()} className="btn btn-primary">Back</button>
                    </div>
                </Collapse>
                <Collapse in={this.state.menuon4}>
                    <div className="card ContainerCMA CMbackground">
                        {this.state.menuon4 && this.callInterpolation()}
                        <button onClick={()=>this.setmenuzero()} className="btn btn-primary">Back</button>
                    </div>
                </Collapse>
                <Collapse in={this.state.menuon5}>
                    <div className="card ContainerCMA CMbackground">
                        {this.state.menuon5 && this.callRegression()}
                        <button onClick={()=>this.setmenuzero()} className="btn btn-primary">Back</button>
                    </div>
                </Collapse>
                <Collapse in={this.state.menuon6}>
                    <div className="card ContainerCMA CMbackground">
                        {this.state.menuon6 && this.callStandard()}
                        <button onClick={()=>this.setmenuzero()} className="btn btn-primary">Back</button>
                    </div>
                </Collapse>
                <div/>
            </div>
        )
    }
}
export default ChooseMenu;