import React, { Component } from 'react';
import "./style.css";
import matrixVid from "../videos/matrixVid.mp4";

class Home extends Component {

	render() {
		return (
			<div className="container" id="videoContainer">				
				<video id="homeVideo" src={matrixVid} autoPlay loop/>
			</div>
		  );
	}

}

export default Home;