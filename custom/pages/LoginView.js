// Implementation of the login view
import React, { Component } from 'react';
import {
	Text, View, Image, StyleSheet, Dimensions
} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
	LoginButton,
	AccessToken
} = FBSDK;
import Icon from 'react-native-vector-icons/FontAwesome';
import User from '../model_components/User';

export default class LoginView extends Component {

	constructor(props){
		super(props);
		this.state = {
			loadState: false
		}
		AccessToken.getCurrentAccessToken().then(
			(data) => {
				if(data){
					var user = new User();
					user.callback = this.callBackAfterLogin.bind(this);
					user.login();
				}else{
					this.setState({loadState: true});
				}
			}
		);
	}

	callBackAfterLogin(data){
		this.props.navigator.resetTo({id: "MainScreen", user: data});
	}

	loginFinished(error, result){
		if(error){
			alert("Login Error");
		}else if(result.isCancelled){
						
		}else{
			AccessToken.getCurrentAccessToken().then(
				(data) => {
					var user = new User();
					user.callback = this.callBackAfterLogin.bind(this);
					user.login();
				}
			);
		}
	}

	loginCanceled(){
		console.log("canceled");
	}

	render(){
		var logo = require('../resources/logo.png');
		var screenshot = require('../resources/mainScreen.png');
		var loaded = (
				<View style={styles.parent}>
					<View style={styles.top}>
						<Image source={logo} style={{resizeMode: 'contain', height: 60}}/>
						<Image source={screenshot} style={{ resizeMode: 'contain', height: 600}}/>
					</View>
					<View style={styles.bottom}>
						<View style={{paddingBottom: 50}}><Text style={{color: "white", fontSize: 18, textAlign: "center", lineHeight: 40}}>By logging in you agree to our <Text style={styles.bold}>terms of service</Text> and <Text style={styles.bold}>privacy policy.</Text> </Text></View>
						<LoginButton
				          readPermissions={["email", "user_hometown", "user_photos", "user_work_history"]}
				          onLoginFinished={this.loginFinished.bind(this)}
				          onLogoutFinished={() => alert("logout.")}/>
				          <View style={{padding: 20, flexDirection: "row"}}><View style={{paddingRight: 10}}><Icon name="info-circle" size={20} color="#fff"/></View><Text style={{color: "white"}}>We will never publish anything on Facebook</Text></View>
				    </View>	

				</View>
			);
		var loading = (
				<View style={{backgroundColor: "#333", flex: 1, justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
					<Text style={{color: "white", textAlign: "center", fontSize: 16}}>LOADING...</Text>
				</View>
			);
		return (this.state.loadState) ? loaded : loading;
	}
} 

const styles = StyleSheet.create({
	parent: {
		backgroundColor: "#000", 
		flex: 1, 
		position: "relative",
		alignItems: "center", 
		justifyContent: "center", 
		flexDirection: "column"
	},
	top: {
		alignItems: "center",
		paddingTop: 20
	},
	bold: {
		fontWeight: "bold"
	},
	bottom: {
		position: "absolute",
		backgroundColor: "#f0c100aa",
		alignItems: "center",
		padding: 20,
		paddingBottom: 40,
		bottom: 0,
		width: Dimensions.get('window').width
	}
});