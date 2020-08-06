import React, { Component } from 'react';
import "./styles/Home.css";
import matrixVid from "../videos/matrixVid.mp4";

class Home extends Component {

	render() {
		return (
			<div className="container" id="videoContainer">				
				<video id="homeVideo" src={matrixVid} autoPlay="true" loop="true"/>
			</div>
		  );
	}

}

export default Home;