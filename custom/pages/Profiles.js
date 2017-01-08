import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Image, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Drawer from 'react-native-drawer';
import DrawerContent from './DrawerContent';
import MessageDrawerContent from './MessageDrawerContent';
import ProfileComponent from '../sub_component/ProfileComponent';

export default class Profiles extends Component {

	likePress(val){
		console.log(val);
	}

	messagePress(){
		console.log("messagePress");
	}

	render(){
		var logo = require('../resources/logo.png');
		var userImage = require('../resources/user.jpg');
		return (
			<Drawer 
				ref={(ref) => {this._drawer1 = ref}}
				content={<MessageDrawerContent navigator={this.props.navigator}/>}
				tapToClose={true}
				side="right"
				panOpenMask= {300}
				tweenHandler={Drawer.tweenPresets.parallax}
				openDrawerOffset={0.2}
				styles={{backgroundColor: 'black'}} >
				<View style={mainStyles.outside}>
					<View style={mainStyles.navbar}>
						<TouchableHighlight onPress={ () => {this.props.navigator.pop(); }}><Text style={mainStyles.navbarText}><Icon name="chevron-left" size={20} color="#f0c100" /></Text></TouchableHighlight>
						<Text style={mainStyles.logo}>My Profile</Text>
						<TouchableHighlight onPress={() => {this._drawer1.open(); }}><View style={mainStyles.navbarTextView}><View style={mainStyles.messageNumber}><Text style={{color: "white", fontSize: 12, padding: 2}}>9+</Text></View><Icon name="comment" size={20} color="#f0c100" /></View></TouchableHighlight>
					</View>
					<View style={{flex: 1, backgroundColor: "#292a2b"}}>
					<ScrollView style={mainStyles.scrollView}>
						<ProfileComponent 
							userImage={userImage}
							username="Angelina"
							age={18}
							about="Something about me"
							work="Something about work"
							likePressCallback={this.likePress.bind(this)}
							messagePressCallback={this.messagePress.bind(this)}/>
					</ScrollView>
					</View>
				</View>
			</Drawer>
			);
	}
}

var mainStyles = StyleSheet.create({
	outside: {
		flex: 1,
		flexDirection: 'column'
	},
	navbar: {
		backgroundColor: 'black',
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	navbarTextView: {
		position: "relative",
		padding: 20,
		flex: 1,
		backgroundColor: '#1a1b1c'		
	},
	navbarText: {
		padding: 20,
		flex: 1,
		backgroundColor: '#1a1b1c'
	},
	messageNumber: {
		position: "absolute",
		left: 30,
		top: 10,
		zIndex: 2,
		borderRadius: 100,
		backgroundColor: "red"
	},
	logo: {
		color: "#f0c100",
		fontSize: 18,
		flex: 12,
		textAlign: "center",
		marginTop: 15,
		marginBottom: 15,
		marginTop: 10,
		height: 45,
	},
	bottomView: {
		flex: 1,
		backgroundColor: "#292a2b",
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	userImage: {
		flex: 1,
		height: Dimensions.get('window').width,
		width: Dimensions.get('window').width
	},
	blackFilter: {
		position: 'absolute',
		backgroundColor: '#0007',
		top: 0,
		left: 0,
		width: 160,
		height: 160,
		flex: 1,
		zIndex: 2
	},
	heartComment: {
		flex: 0.1,
		alignItems: "center",
		padding: 10,
		paddingTop: 20,
		backgroundColor: "#f0c10033"
	}
});

const drawerStyles = {
	backgroundColor: '#000'
}