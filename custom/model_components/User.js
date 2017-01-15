// user implementation for the login and logout
import React from 'react';
import {
	BackAndroid
} from 'react-native';
const FBSDK = require('react-native-fbsdk');
const {
	GraphRequest,
	GraphRequestManager,
	AccessToken
} = FBSDK;

export default class User{

	constructor(){
		this.userID;
		this.accessToken;
		this.profilePicture;
		this.username;
		this.isOK = true;
		this.email;
		this.age;
	}

	_userResponseCallback(error: ?Object, result: ?Object){
		console.log(error, result);
		if(error){
			alert("Sorry! Something went wrong. Please reopen the application.");
			this.isOK = false;
		}else{
			this.profilePicture = result.picture.data.url;
			this.username = result.first_name + " " + result.last_name;
			this.email = result.email;
			this.age = result.age_range.min;
			this.callback(this.getFBdata());
		}
	}

	// to get facebook data 
	getFBdata(){
		return {
			email: this.email,
			userID: this.userID,
			accessToken: this.accessToken,
			profilePicture: this.profilePicture,
			username: this.username,
			age: this.age
		}
	}

	// password is an authorization token from the facebook api
	login(){

		// use graphapi to fetch username and email 
		AccessToken.getCurrentAccessToken().then(
				(data) => {
					if(data){
						this.userID = data.userID;
						this.accessToken = data.accessToken;	
					}else{
						alert("Sorry! Something went wrong. Please reopen the application.");
					}
				}
		);

		const infoRequest = new GraphRequest(
			"/me?fields=id,name,email,picture.height(500),first_name,last_name, work, age_range, about",
			null,
			this._userResponseCallback.bind(this)
		);

		new GraphRequestManager().addRequest(infoRequest).start();

	}

}