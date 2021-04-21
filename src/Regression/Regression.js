import React from "react"
import { Tab, Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

class Regression extends React.Component {
    render(){
        const styles={ backgroundColor: '#333', borderColor: '#333' }
        return(
            <card><div className="ContainerCM" style={styles}>
                <div className="CMspacebutton"></div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className="CMcontent">
                        <Col sm={2}>
                            <Nav variant="pills" className="tapslpeeb flex-column">
                                <Nav.Item>
                                <Nav.Link eventKey="ON1">Least-Square Regression</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="ON2">Linear Regression</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="ON3">Multiple linear Regression</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="ON4">Polynomial Regression</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="ON1" >
                                    11111
                                </Tab.Pane>
                                <Tab.Pane eventKey="ON2">
                                    22222
                                </Tab.Pane>
                                <Tab.Pane eventKey="ON3">
                                    3333
                                </Tab.Pane>
                                <Tab.Pane eventKey="ON4">
                                    4444
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div><div className="ContainerCM"/></card>
        )
    }
}
export default Regression;