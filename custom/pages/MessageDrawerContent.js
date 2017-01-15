// Message Drawer Content Implementation
import React, { Component } from 'react';
import {
	ScrollView, Image,
	View, Text, StyleSheet
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import MessageItem from '../sub_component/MessageItem';
import MessageItems from '../sub_component/MessageItems';

export default class MessageDrawerContent extends Component{

	// get the message data from server and then store in the state

	constructor(p){
		super(p);
		this.swipeoutButtons = [
			{ 
				text: 'Delete',
				backgroundColor: '#ed2121'
			}
		];
		var userImage = require('../resources/user.jpg');
		this.state = {
			data: [
				{ 
					id: 1,
					userImage: userImage,
					messageType: "active",
					sender: "Angelina Jolie",
					message: "Hey Darling",
					date: "12 May 2016, 12:00 PM"
				},
				{ 
					id: 2,
					userImage: userImage,
					sender: "Angelina Jolie",
					message: "Hey Darling",
					date: "12 May 2016, 12:00 PM"
				},
				{ 
					id: 3,
					userImage: userImage,
					sender: "Angelina Jolie",
					message: "Hey Darling",
					date: "12 May 2016, 12:00 PM"
				},
			]
		};
	}

	// id of the delete pressed element
	deletePress(id){
		var dat = [];
		for(var i = 0; i < this.state.data.length; i++){
			// loop through all the data memeber
			if(id == this.state.data[i].id){
				continue;
			}
			dat.push(this.state.data[i]);
		}
		this.setState({data: dat});
	}

	render(){
		var userImage = require('../resources/user.jpg');
		var message;
		if(this.state.data.length == 0){
			// there are no messages
			message = <Text style={styles.headingText}>There are no messages</Text>;
		}else{
			message = <MessageItems items={this.state.data} deletePressCallback={this.deletePress.bind(this)}/>; 
		}

		return (
			<ScrollView style={{backgroundColor: "black"}}>
				<View>
					<Text style={styles.headingText}>MESSAGES</Text>
				</View>		
				{message}
			</ScrollView>
		);
	}
}

// creating stylesheet
var styles = StyleSheet.create({
	headingText: {
		padding: 20,
		fontSize: 20, 
		color: "#f0c100"
	}
});
