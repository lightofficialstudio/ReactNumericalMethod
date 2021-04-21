import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
//import Table from 'react-bootstrap/Table'
import { Collapse } from "react-bootstrap"
import {create,all} from'mathjs'
var A = [], B = [], answer = [], matrixA = [], matrixB = []
const math = create(all)

class CramersRule extends React.Component{
    constructor(props){
        super(props)
        this.state={
          row:parseInt(0),
          col: parseInt(0),
          talang:false,
          talang2:false
        }
        this.setrow=this.setrow.bind(this)
        this.setcol=this.setcol.bind(this)
    }
    setrow(event){
        this.setState({row:event.target.value})
    }
    setcol(event){
        this.setState({col:event.target.value})
    }
    cramer() {
        this.initMatrix();
        var counter=0; 
        while (counter < this.state.row) { 
            var transformMatrix = JSON.parse(JSON.stringify(A));
            for (var i=0 ; i<this.state.row ; i++) {
                for (var j=0 ; j<this.state.col ; j++) {
                    if (j === counter) {

                        transformMatrix[i][j] = B[i]
                        break;
                    }
                }
            } 
            counter++;
            console.log(counter)
            console.log() 
            answer.push(<h2>X<sub>{counter}</sub>={math.det(transformMatrix)/math.det(A)}</h2>)
            answer.push(<br/>) 
        }
    }
    createMatrix(row, column) {
        for (var i=1 ; i<=row ; i++) {
            for (var j=1 ; j<=column ; j++) {
                matrixA.push(<input id={"a"+i+""+j} key={"a"+i+""+j} placeholder={"a"+i+""+j} />)  
            }
            matrixA.push(<br/>)
            matrixB.push(<input id={"b"+i} key={"b"+i} placeholder={"b"+i} />)
        }   

    }
    initMatrix() {
        for(var i=0 ; i<this.state.row ; i++) {
            A[i] = []
            for(var j=0 ; j<this.state.col ; j++) {
                A[i][j] = (parseFloat(document.getElementById("a"+(i+1)+""+(j+1)).value));
            }
            B.push(parseFloat(document.getElementById("b"+(i+1)).value));
        }
    }
    runfun2(event){
        this.setState({talang2:event})
        this.setState({talang:false})
        if(event){
            answer=[]
           this.cramer()
        }
        
    }
    runfun(event){
        this.setState({talang:event})
        if(event){
            matrixA=[]
            matrixB=[]
           this.createMatrix(this.state.row,this.state.col)
        }
        
    }
    showfun(){
        return answer
    }
    render(){
        const styles={
			width: "250px"
        }
        return(
            <div>
                <label className="alert">
                    <br/><div className="alert alert-danger">CramersRule</div>
                    <br/>
                        <div className="input-group" >
                        <div className="input-group-prepend"><span className="input-group-text">ROW</span></div>
                            <input type="number" style={styles} value={this.state.row} onChange={this.setrow}/>
                        </div><br/>
                        <div className="input-group">
                            <div className="input-group-prepend"><span className="input-group-text">COLUMN</span></div>
                                <input type="number" style={styles} value={this.state.col} onChange={this.setcol}/>
                        </div><br/>
                        <button onClick={()=>this.runfun(true)} className="btn btn-danger">sum</ button>
                    
                </label>
                <Collapse in={this.state.talang}>
                    <div>
                    <div><h2>Matrix [A]</h2><br/>{matrixA}<h2>Vector [B]<br/></h2>{matrixB}</div>
                    <button onClick={()=>this.runfun2(true)} className="btn btn-danger">sum</ button>
                    </div>
                </Collapse>
                <Collapse in={this.state.talang2}>
                    <div>
                        {this.showfun()}
                    </div>
                </Collapse>
            </div>
        )
    }
}
export default CramersRule;