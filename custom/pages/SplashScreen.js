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
		// change to login view to mainscreen if users oauth token is there 
		// if not then go to login view so that oauth loken could be taken
		setTimeout(() => {
			this.props.navigator.resetTo({id: "LoginView"});
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