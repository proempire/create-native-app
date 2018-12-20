import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import Home from './component/home.js';
import Topic from './component/topic.js';
import About from './component/about.js';
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
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/topic">Topic</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                sign in as <a href="/">Peter</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar>
                    <ul>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/topic" component={Topic}></Route>
                        <Route path="/about" component={About}></Route>
                    </ul>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
