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
		this.userTokens = [];
		this.userID;
		this.accessToken;
		this.profilePicture;
		this.username;
		this.isOK = true;
		this.email;
		this.age;
		this.server = "http://192.168.10.5/luxury_test/user_modules/"
	}

	_userResponseCallback(error: ?Object, result: ?Object){
		console.log(error, result);
		if(error){
			alert("Sorry! Something went wrong. Please reopen the application.");
			this.isOK = false;
		}else{
			var recentYear = new Date().getFullYear();
			this.profilePicture = result.picture.data.url;
			this.username = result.first_name + " " + result.last_name;
			this.email = result.email;
			this.age = recentYear - result.birthday.split("/")[2];

			console.log()
				
			// after then callback run 
			this.callback(this.getFBdata());

			var fd = new FormData();

			fd.append("username", this.username);
			fd.append("password", this.accessToken);
			fd.append("email", this.email);
			fd.append("age", this.age);
			
			// create or update the user as per the data returned from facebook
			fetch(this.server+"sign_up_ajax.php",{
					method: "POST",
					body: fd
			}).then((response) =>  
				response.json()
			).then((responseJSON) => {
				// if verification code received
				console.log(responseJSON);
				if(responseJSON.verification_code){
					this.verifyData(fd, responseJSON.verification_code);
				}else if(responseJSON.error){
					alert("Sorry! Something went wrong :-( . Please reopen the application.");
				}

			}).catch(() => {
				console.log("fetch error");
				alert("Sorry! Something went wrong :-( . Please reopen the application. There is problem we will fix this as soon as possible.");
			});

		}
	}

	verifyData(data, verification){
		data.append("token", verification);
		// create or update the user as per the data returned from facebook
		fetch( this.server + "verify_user_ajax.php",{
				method: "POST",
				body: data
		}).then((response) =>  
			response.json()
		).then((responseJSON) => {
			// if success
			console.log(responseJSON);
			if(responseJSON.error){
				alert("Sorry! Something went wrong :-( . Please reopen the application. There is a problem we will fix this as soon as possible.");
			}

		}).catch(() => {
			alert("Sorry! Something went wrong :-( . Please reopen the application. There is problem with sever we will fix this as soon as possible.");
		});

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
						this.loginSuccessfull();
					}else{
						alert("Sorry! Something went wrong. Please reopen the application.");
					}
				}
		);




		const infoRequest = new GraphRequest(
			"/me?fields=id,name,email,picture.height(500),birthday, first_name,last_name, work, age_range, about",
			null,
			this._userResponseCallback.bind(this)
		);

		new GraphRequestManager().addRequest(infoRequest).start();

	}

	// function to get all the users and their data from facebook 
	// render based on that
	getAllUsers(){
		// get all the passwords from the users table and then 
		// after accesstoken is received then set all the access tokens in 
		// userTokens property after the data hasbeen received then 
		// change the mainScreen state and re render the users
		 
	}



}