import React , {Component} from 'react';
import { Image, View, StyleSheet } from 'react-native';
import NavigationBarSample from './MainScreen';

// splash screen display component
export default class SplashScreen extends Component{
	// let img_src = './resources/logo.png';

	renderScene(){
		return <NavigationBarSample />
	}

	render(){
		var logo = require('../resources/logo.png');
		return (
			
			<View style={splashStyles.splashView}>
				<Image source={logo} />
			</View>
		);
	}

}

var splashStyles = StyleSheet.create({
	splashView: {
		backgroundColor: 'black',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});