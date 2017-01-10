import React, { Component } from 'react';
import { Navigator, Text } from 'react-native';
import SplashScreen from './pages/SplashScreen.js';
import MainScreen from './pages/MainScreen.js';
import Profiles from './pages/Profiles.js';
import InviteFriends from './pages/InviteFriends.js';
import Preferences from './pages/Preferences.js';

export default class Root extends Component {
	
	constructor(props){
		super(props);
	}

	renderScene(route, navigator){
		console.log(route);
		switch(route.id){
			case "SplashScreen":
				return <SplashScreen navigator={navigator} />
				break;
			case "MainScreen":
				return <MainScreen navigator={navigator} />
				break;
			case "Profiles":
				return <Profiles navigator={navigator} />
				break;
			case "InviteFriends":
				return <InviteFriends navigator={navigator} />
				break;
			case "Preferences":
				return <Preferences navigator={navigator} />
				break;
		}
	}

	render(){
		return (
			<Navigator 
				initialRoute= {{id: 'SplashScreen'}}
				renderScene={this.renderScene}
				
				/>

		);
	}
}