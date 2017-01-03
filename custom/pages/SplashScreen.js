import React , {Component} from 'react';
import { Image, View, StyleSheet } from 'react-native';

// splash screen display component
export default class SplashScreen extends Component{
	// let img_src = './resources/logo.png';

	constructor(props){
		super(props);
	}

	render(){
		var logo = require('../resources/logo.png');
		setTimeout(() => {
			this.props.navigator.resetTo({id: "MainScreen"});
		}, 1000);
		return (
			<View style={splashStyles.splashView}>
				<Image source={logo} style={{resizeMode: 'contain', height: 75}}/>
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