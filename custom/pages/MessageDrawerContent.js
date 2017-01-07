// Message Drawer Content Implementation
import React, { Component } from 'react';
import {
	ScrollView, Image,
	View, Text, StyleSheet
} from 'react-native';


export default class MessageDrawerContent extends Component{
	render(){
		var userImage = require('../resources/user.jpg');
		return (
			<ScrollView style={{backgroundColor: "black"}}>
				<View>
					<Text style={styles.headingText}>MESSAGES</Text>
				</View>		
				<View style={styles.messageViewActive}>
					<View style={styles.date}>
						<Text style={styles.dateText}>May 21</Text>
					</View>
					<Image source={userImage} style={styles.profileImage}/>
					<View>
						<Text style={styles.usernameStyle}>Username</Text>
						<Text style={styles.messageStyle}>Hey Darling :-)</Text>
					</View>
				</View>
				<View style={styles.messageView}>
					<View style={styles.date}>
						<Text style={styles.dateText}>May 21</Text>
					</View>
					<Image source={userImage} style={styles.profileImage}/>
					<View>
						<Text style={styles.usernameStyle}>Username</Text>
						<Text style={styles.messageStyle}>Hey Darling :-)</Text>
					</View>
				</View>
				<View style={styles.messageView}>
					<View style={styles.date}>
						<Text style={styles.dateText}>May 21</Text>
					</View>
					<Image source={userImage} style={styles.profileImage}/>
					<View>
						<Text style={styles.usernameStyle}>Username</Text>
						<Text style={styles.messageStyle}>Hey Darling :-)</Text>
					</View>
				</View>
				<View style={styles.messageView}>
					<View style={styles.date}>
						<Text style={styles.dateText}>May 21</Text>
					</View>
					<Image source={userImage} style={styles.profileImage}/>
					<View>
						<Text style={styles.usernameStyle}>Username</Text>
						<Text style={styles.messageStyle}>Hey Darling :-)</Text>
					</View>
				</View>

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
	},
	date: {
		position: "absolute",
		right: 10,
		top: 10
	},
	dateText: {
		color: "#f0c10022"
	},
	messageView: {
		position: "relative",
		paddingTop: 15,
		paddingBottom: 10,
		borderLeftWidth: 2,
		paddingLeft: 20, 
		backgroundColor: "#f0c10022",
		flexDirection: "row"
	},
	messageViewActive: {
		position: "relative",
		paddingTop: 15,
		paddingBottom: 10,
		borderLeftColor: "#f0c100",
		borderLeftWidth: 2,
		paddingLeft: 20, 
		backgroundColor: "#f0c10026",
		flexDirection: "row"
	},
	profileImage: {
		marginRight: 10,
		height: 60,
		width: 60,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: "#f0c100",
		resizeMode: "cover" 
	},
	usernameStyle: {
		fontSize: 15,
		paddingBottom: 5,
		color: "#f0c100"
	},
	messageStyle: {
		color: "#f0c100"
	}


});
