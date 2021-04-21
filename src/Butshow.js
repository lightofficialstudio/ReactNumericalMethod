import React from "react"
import Bisection from "./Bisection.js"
//import BisectionSum from "./BisectionSum.js"
import { Tab, Row } from 'react-bootstrap'
import Tabs from 'react-bootstrap/Tabs'
import Col from 'react-bootstrap/Col'
//import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

class Butshow extends React.Component {
    render(){
        return(
                <div>
                    <Tabs defaultActiveKey="profile" >
                        <Tab eventKey="Bisection" title="Bisection">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col sm={1}>
                                        <Nav variant="pills" className="tapslpeeb flex-column">
                                            <Nav.Item>
                                            <Nav.Link eventKey="first">Bisection</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        </Col>
                                    <Col sm={9} >
                                        <Tab.Content >
                                            <Tab.Pane eventKey="first" className="tapslpeeb2">
                                                <Bisection />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                46498
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Tab>
                        <Tab eventKey="No1" title="No1">
                            <div>ttttt</div>
                        </Tab>
                        <Tab eventKey="No2" title="No2">
                            ttttt
                        </Tab>
                        <Tab eventKey="No3" title="No3">
                            ttttt
                        </Tab>
                        <Tab eventKey="No4" title="No4">
                            ttttt
                        </Tab>
                        <Tab eventKey="No5" title="No5">
                            ttttt
                        </Tab>
                        <Tab eventKey="No6" title="No6">
                            ttttt
                        </Tab>
                        <Tab eventKey="No7" title="No7">
                            ttttt
                        </Tab>
                    </Tabs>
                    
                </div>
        )
    }
}
export default Butshow;