// Message Item drawer implementation
import React, { Component } from 'react';
import {
	View, Image, Text, StyleSheet
} from 'react-native';
import Swipeout from 'react-native-swipeout';

export default class MessageItem extends Component{
	
	render(){
		var swipeoutButtons = [
			{ 
				component: <Text style={{fontSize: 16, color: "white", textAlign: "center", paddingTop: 30}}>Delete</Text>,
				backgroundColor: "#ed2121",
				onPress: () => {
					this.props.deletePressCallback(this.props.id); 
				},
				type: "primary"
			}
		]
		return (
			<Swipeout 
				autoClose={true}
				backgroundColor={(this.props.messageType == "active") ? "#f0c10026": "#f0c10022"}
				right={swipeoutButtons}>
				<View style={(this.props.messageType == "active")? styles.messageViewActive : styles.messageView}>
					<View style={styles.date}>
						<Text style={styles.dateText}>{this.props.date}</Text>
					</View>
					<Image source={this.props.userImage} style={styles.profileImage}/>
					<View>
						<Text style={styles.usernameStyle}>{this.props.sender}</Text>
						<Text style={styles.messageStyle}>{this.props.message}</Text>
					</View>
				</View>
			</Swipeout>
		);
	}

}

var styles = StyleSheet.create({
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
		borderLeftColor: "#f0c10022",
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