// import React from "react";
import React, { useEffect, useState } from 'react'
import About from "./components/About";
import './components/Styles.css'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

import  { Component } from 'react';
import Home from './components/Home';
// import About from './components/About';
// import Contact from './component/contact';
// import './App.css';

class App extends Component {
render() {
	return (
	<Router>
		<div className="App">
			<ul className="App-header navbar-class">
			<li>
				<Link className="cool-link" to="/">Search Your Pokemon</Link>
			</li>
			<li>
				<Link className="cool-link" to="/about">About Pokemon</Link>
			</li>
			</ul>
		<Routes>
				<Route exact path='/' element={< Home />}></Route>
				<Route exact path='/About' element={< About />}></Route>
				{/* <Route exact path='/contact' element={< Contact />}></Route> */}
		</Routes>
		</div>
	</Router>
);
}
}

export default App;