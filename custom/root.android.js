import React, { Component } from 'react';
import { Navigator } from 'react-native';
import SplashScreen from './pages/SplashScreen.js';
import MainScreen from './pages/MainScreen.js';

export default class Root extends Component {

	constructor(props){
		super(props);
	}

	renderScene(route, navigator){
		console.log(route);
		return <MainScreen navigator={navigator} />
	}

	render(){
		return (
			<Navigator 
				initialRoute= {{id: 'SplashScreen'}}
				renderScene={this.renderScene}
				configureScene={(route, routeStack) => {
					Navigator.SceneConfigs.FloatFromBottom;
				}}
			/>

		);
	}
}