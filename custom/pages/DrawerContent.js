import React, { Component } from 'react';
import {
	View, StyleSheet, Text, Image, ScrollView, TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class DrawerContent extends Component {
	drawerButtonPress(self, sourceScreen, destinationScreen){
		if(sourceScreen != destinationScreen)
			self.props.navigator.push({id: destinationScreen});
	}
	render(){
		var userImage = require('../resources/user.jpg');
		return (
			<ScrollView style={{backgroundColor: "black"}}>
				<View style={styles.drawerMain}>
					<TouchableHighlight onPress={() => { this.drawerButtonPress(this, this.props.screen, "MainScreen")}}>
					<View style={styles.drawerChildren}>
						<Icon name="home" size={30} style={styles.iconStyle}/><Text style={{color: "#f0c100", fontSize: 20}}>Home</Text>
					</View>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => { this.drawerButtonPress(this, this.props.screen, "Profiles") }}>
					<View style={styles.drawerChildren}>
						<Icon name="user" size={30} style={styles.iconStyle}/><Text style={{color: "#f0c100", fontSize: 20}}>Profile</Text>
					</View>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => { this.drawerButtonPress(this, this.props.screen, "Preferences") }}>
					<View style={styles.drawerChildren}>
						<Icon name="cog" size={30} style={styles.iconStyle}/><Text style={{color: "#f0c100", fontSize: 20}}>Preferences</Text>
					</View>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => { this.drawerButtonPress(this, this.props.screen, "InviteFriends") }}>
					<View style={styles.drawerChildren}>
						<Icon name="envelope" size={30} style={styles.iconStyle}/><Text style={{color: "#f0c100", fontSize: 20}}>Invite Friends</Text>
					</View>
					</TouchableHighlight>
					<View style={styles.drawerChildren}>
						<Text style={{color: "#f0c100", fontSize: 20}}>NOTIFICATIONS</Text>
					</View>
					<View style={styles.notificationStyle}>
						<View style={styles.dateView}><Text style={{color: "#f0c10099"}}>21 May, 2016</Text></View>
						<Image source={userImage} style={styles.userPhoto}/><Text style={{color: "#f0c100", paddingLeft: 20, paddingTop: 10, paddingRight: 20}}>Angelina Jolie sent you a message.</Text>
					</View>
					<View style={styles.notificationStyle}>
						<View style={styles.dateView}><Text style={{color: "#f0c10099"}}>21 May, 2016</Text></View>
						<Image source={userImage} style={styles.userPhoto}/><Text style={{color: "#f0c100", paddingLeft: 20, paddingTop: 10, paddingRight: 20}}>Angelina Jolie sent you a message.</Text>
					</View>
					<View style={styles.notificationStyle}>
						<View style={styles.dateView}><Text style={{color: "#f0c10099"}}>21 May, 2016</Text></View>
						<Image source={userImage} style={styles.userPhoto}/><Text style={{color: "#f0c100", paddingLeft: 20, paddingTop: 10, paddingRight: 20}}>Angelina Jolie sent you a message.</Text>
					</View>
					<View style={styles.notificationStyle}>
						<View style={styles.dateView}><Text style={{color: "#f0c10099"}}>21 May, 2016</Text></View>
						<Image source={userImage} style={styles.userPhoto}/><Text style={{color: "#f0c100", paddingLeft: 20, paddingTop: 10, paddingRight: 20}}>Angelina Jolie sent you a message.</Text>
					</View>
				</View>
			</ScrollView>
		);

	}
}

var styles = StyleSheet.create({
	drawerMain: {
		backgroundColor: "black",
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
		right: 50
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