import React, { Component } from 'react';
import {
	View, StyleSheet, Text, Image, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class DrawerContent extends Component {
	render(){
		var userImage = require('../resources/user.jpg');
		return (
			<View style={styles.drawerMain}>
				<View style={styles.drawerChildren}>
					<Icon name="home" size={30} style={styles.iconStyle}/><Text style={{color: "#f0c100", fontSize: 20}}>Home</Text>
				</View>
				<View style={styles.drawerChildren}>
					<Icon name="user" size={30} style={styles.iconStyle}/><Text style={{color: "#f0c100", fontSize: 20}}>Profile</Text>
				</View>
				<View style={styles.drawerChildren}>
					<Icon name="cog" size={30} style={styles.iconStyle}/><Text style={{color: "#f0c100", fontSize: 20}}>Settings</Text>
				</View>
				<View style={styles.drawerChildren}>
					<Icon name="envelope" size={30} style={styles.iconStyle}/><Text style={{color: "#f0c100", fontSize: 20}}>Invite Friends</Text>
				</View>
				<View style={styles.drawerChildren}>
					<Text style={{color: "#f0c100", fontSize: 20}}>NOTIFICATIONS</Text>
				</View>
				<ScrollView>
				<View style={styles.notificationStyle}>
					<View style={styles.dateView}><Text style={{color: "#f0c10099"}}>21 May, 2016</Text></View>
					<Image source={userImage} style={styles.userPhoto}/><Text style={{color: "#f0c100", paddingLeft: 10, paddingTop: 10}}>Angelina Jolie sent you a message.</Text>
				</View>
				<View style={styles.notificationStyle}>
					<View style={styles.dateView}><Text style={{color: "#f0c10099"}}>21 May, 2016</Text></View>
					<Image source={userImage} style={styles.userPhoto}/><Text style={{color: "#f0c100", paddingLeft: 10, paddingTop: 10}}>Angelina Jolie sent you a message.</Text>
				</View>
				</ScrollView>
			</View>

		);

	}
}

var styles = StyleSheet.create({
	drawerMain: {
		backgroundColor: "black",
		color: "white",
		flex: 1,
		paddingTop: 20,
	},
	drawerChildren: {
		flexDirection: 'row',
		paddingLeft: 10,
		paddingTop: 20,
		paddingBottom: 20,
	},
	iconStyle: {
		color: "#f0c100", 
		width: 50,
		borderColor: "#f0c100"
	},
	notificationStyle: {
		marginBottom: 10,
		position: "relative",
		padding: 20, 
		flexDirection: 'row',
		backgroundColor : "#f0c10066"
	},
	dateView: {
		position: "absolute",
		top: 10,
		right: 10
	},
	userPhoto: {
		width: 50,
		height: 50,
		borderColor: "#f0c100",
		borderWidth: 2,
		borderRadius: 10,
		resizeMode: "cover"
	}
});