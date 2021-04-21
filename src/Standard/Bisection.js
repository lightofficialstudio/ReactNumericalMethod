import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'
import {compile} from 'mathjs'
import { Collapse } from "react-bootstrap"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'
var labelBic=[]
const  dataBic=[]

class Standard extends React.Component {
    constructor(props){
        super(props)
        this.state={
          SumX:"",
          errorX:"",
          Xl:"",
          Xr:"",
          Xm:"",
          Iteration:"",
          talang:false
        }
        this.setSumX=this.setSumX.bind(this);
        this.setXl=this.setXl.bind(this);
        this.setXr=this.setXr.bind(this);
        this.setIteration=this.setIteration.bind(this);
    }
    zero = () =>{
        console.log("sads")
        this.setzero()
    }
    setzero(){
        document.getElementById('InputBic').value = ''
    }
    setSumX(event){
        this.setState({SumX:event.target.value})
    }
    setXl(event){
        this.setState({Xl:event.target.value})
    }
    setXr(event){
        this.setState({Xr:event.target.value})
    }
    setIteration(event){
        this.setState({Iteration:event.target.value})
    }
    runfun(event){
        this.setState({talang:event})
        if(event){
            labelBic.length=0
           this.fun(this.state.Iteration)
        }
        
    }
    showfun(){
        return labelBic
    }
    fun(event){
        var one =compile(this.state.SumX)
        let xl=parseFloat(this.state.Xl)
        let xr=parseFloat(this.state.Xr)
        let iteration=event
        let xmold=(xl+xr)/2
        let xmnew=""
        let errorxm=""
        var scopeXr ={x:parseFloat(this.state.Xr)}
        var scopeXm ={x:parseFloat(xmold)}
        var sumxr =one.evaluate(scopeXr)
        var sumxm =one.evaluate(scopeXm)
        var sumvalue=parseFloat(sumxm)*parseFloat(sumxr)
        if(sumvalue<0){
          xl=xmold
        }
        else{
          xr=xmold
        }
        labelBic.push(<tr>
                        <td>0</td>
                        <td>{xl}</td>
                        <td>{xr}</td>
                        <td>{xmold}</td>
                        <td>null</td>
                    </tr>)
        dataBic.push({
            Interation:0,
            xm:xmold
        })
        for(var i=1;i-1<iteration;i++){
          xmnew=(xl+xr)/2
          scopeXm ={x:parseFloat(xmnew)}
          sumxr =one.evaluate(scopeXr)
          sumxm =one.evaluate(scopeXm)
          sumvalue=parseFloat(sumxm)*parseFloat(sumxr)
          if(sumvalue<0){
            xl=xmnew
          }
          else{
            xr=xmnew
          }
          errorxm=(xmnew-xmold)/xmnew
          labelBic.push(<tr>
                <td>{i}</td>
                <td>{xl}</td>
                <td>{xr}</td>
                <td>{xmnew}</td>
                <td>{errorxm}</td>
            </tr>)
            dataBic.push({
                Iteration:{i},
                xm:xmnew
            })
          xmold=xmnew
        }
    }
    render(){
        const styles={
			width: "250px"
        }
        const styles2={
                width: "200px"
        }
        return(
            <div className="card">
                <label className="alert">
                    <div className="center">Bisection</div>
                    <br/>
                    <div className="input-group" >
                        <div className="input-group-prepend"><span className="input-group-text">f(x)</span></div>
                            <input type="text" style={styles} value={this.state.SumX} onChange={this.setSumX} id="InputBic"/>
                        </div><br/>
                        <div className="input-group">
                            <div className="input-group-prepend"><span className="input-group-text">XL</span></div>
                                <input type="number" style={styles} value={this.state.Xl} onChange={this.setXl}/>
                        </div><br/>
                        <div className="input-group">
                            <div className="input-group-prepend"><span className="input-group-text">XR</span></div>
                                <input type="number" style={styles} value={this.state.Xr} onChange={this.setXr}/>
                        </div><br/>
                        <div className="input-group" >
                            <div className="input-group-prepend"><span className="input-group-text">Iteration</span></div>
                                <input type="number" style={styles2} value={this.state.Iteration} onChange={this.setIteration}/>
                        </div><br/>
                        <button onClick={()=>this.runfun(true)} className="btn btn-danger">sum</ button>
                </label>
                <Collapse in={this.state.talang}>
                <LineChart width={600} height={300} data={dataBic} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="xm" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="Interation" />
                        <YAxis />
                </LineChart>
                </Collapse>
                <Collapse in={this.state.talang}><Table>
                    <thead>
                        <tr>
                        <th>Iteration</th>
                        <th>XL</th>
                        <th>XR</th>
                        <th>XM</th>
                        <th>ERROR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showfun()}
                    </tbody>
                </Table></Collapse>
            </div>
        )
    }
}
export default Standard;