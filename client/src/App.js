import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Home from './component/home.js';
import Topic from './component/topic.js';
import About from './component/about.js';
import Taxi from './component/taxi.js';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar bg="light" expand="lg" fixed="top">
                        <Navbar.Brand>Flower-de-luce</Navbar.Brand>
                        <Navbar.Collapse>
                            <Nav defaultActiveKey="/">
                                <LinkContainer exact to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                                <LinkContainer to="/topic"><Nav.Link>Topic</Nav.Link></LinkContainer>
                                <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                                <LinkContainer to="/taxi"><Nav.Link>Taxi</Nav.Link></LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                sign in as <a href="/">Peter</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className="App-content">
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/topic" component={Topic}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/taxi" component={Taxi}></Route>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
