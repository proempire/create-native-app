import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Button, Navbar } from 'react-bootstrap';
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
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                sign in as <a href="/">Peter</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar>
                    {/* <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/topic">Topic</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                    <br />
                    <ul>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/topic" component={Topic}></Route>
                        <Route path="/about" component={About}></Route>
                    </ul> */}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
