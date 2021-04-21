import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Collapse } from "react-bootstrap"
import {create,all} from'mathjs'
const math = create(all)
var dataTra=[]

class Trapezidal extends React.Component{
    constructor(props){
        super(props)
        this.state={
          sumx:"",
          spoint:"",
          epoint:"",
          npoint:"",
          talang:false,
          talang2:false
        }
        this.setsumx=this.setsumx.bind(this)
        this.setspoint=this.setspoint.bind(this)
        this.setepoint=this.setepoint.bind(this)
        this.setnpoint=this.setnpoint.bind(this)
    }
    setsumx(event){
        this.setState({sumx:event.target.value})
    }
    setspoint(event){
        this.setState({spoint:event.target.value})
    }
    setepoint(event){
        this.setState({epoint:event.target.value})
    }
    setnpoint(event){
        this.setState({npoint:event.target.value})
    }
    runfun(event){
        this.setState({talang:event})
        if(event){
            dataTra=[]
            this.fun()
        }
        
    }
    showfun(){
        return dataTra
    }
    fun(){
        var one=math.compile(this.state.sumx)
        var start=parseFloat(this.state.spoint)
        var end=parseFloat(this.state.epoint)
        var n=parseInt(this.state.npoint)
        var h=(end-start)/n
        var round=start+h
        //var integrate=math.integrate(one,start,end)
        var data=0
        for(var i=1;i<n;i++){
            var scope={x:round}
            data+=one.evaluate(scope)
            round+=h
        }
        var scopes={x:start}
        var scopee={x:end}
        var sum=(h/2)*(one.evaluate(scopes)+one.evaluate(scopee)+(2*data))
        //var error=(integrate-sum)/integrate
        dataTra.push(<div><p>integrate</p><br/><p>{sum}</p><br/><p>error</p></div>)
    }
    render(){
        const styles={
			width: "250px"
        }
        return(
            <div>
                <label className="alert">
                    <br/><div className="alert alert-danger">Trapezidal</div>
                    <br/>
                        <div className="input-group" >
                        <div className="input-group-prepend"><span className="input-group-text">f(x)</span></div>
                            <input type="text" style={styles} value={this.state.sumx} onChange={this.setsumx}/>
                        </div><br/>
                        <div className="input-group">
                            <div className="input-group-prepend"><span className="input-group-text">start point</span></div>
                                <input type="number" style={styles} value={this.state.spoint} onChange={this.setspoint}/>
                        </div><br/>
                        <div className="input-group">
                            <div className="input-group-prepend"><span className="input-group-text">end point</span></div>
                                <input type="number" style={styles} value={this.state.epoint} onChange={this.setepoint}/>
                        </div><br/>
                        <div className="input-group">
                            <div className="input-group-prepend"><span className="input-group-text">point</span></div>
                                <input type="number" style={styles} value={this.state.npoint} onChange={this.setnpoint}/>
                        </div><br/>
                        <button onClick={()=>this.runfun(true)} className="btn btn-danger">sum</ button>
                    
                </label>
                <Collapse in={this.state.talang}>
                    <div>
                    {this.showfun()}
                    </div>
                </Collapse>
            </div>
        )
    }
}
export default Trapezidal;