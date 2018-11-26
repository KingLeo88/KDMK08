import React, {Component } from 'react';
import {AppRegistery, Image} from 're, act-native' ;
import BlinkText from './BlinkText/';

export default class Beach extends Component {
	render() {
		let pic = {
			uri: 'https://static.pexels.com/photos/457882/pexels-photo-457882.jpeg'
		};
		return (
			<Image source={pic}  style={{width: 193, height: 110}}/>
		};
	}
}

