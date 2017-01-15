import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Image, ScrollView, Dimensions, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Drawer from 'react-native-drawer';
import DrawerContent from './DrawerContent';
import MessageDrawerContent from './MessageDrawerContent';

export default class InviteFriends extends Component {


	render(){
		var logo = require('../resources/icon.png');
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
						<Text style={mainStyles.logo}>Invite Friends</Text>
						<TouchableHighlight onPress={() => {this._drawer1.open(); }}><View style={mainStyles.navbarTextView}><View style={mainStyles.messageNumber}><Text style={{color: "white", fontSize: 12, padding: 2}}>9+</Text></View><Icon name="comment" size={20} color="#f0c100" /></View></TouchableHighlight>
					</View>
					<View style={{flex: 1, backgroundColor: "#292a2b"}}>
					<ScrollView style={mainStyles.scrollView}>
						<View style={mainStyles.bottomView}>
							<Text style={{color: "#f0c100", paddingTop: 30, paddingBottom: 30, fontSize: 50, textAlign: "center"}}>Invite Friends</Text>
							<Image source={logo} style={{height: 300, resizeMode: "contain"}}/>
							<View style={{flex: 1, flexDirection: "row", padding: 20, position: "relative"}}>
								<Text title="Facebook" style={{color: "#fff", padding: 20, backgroundColor: "#3b5998", flex: 1, borderRadius: 30, textAlign: "center", fontSize: 20}}>Facebook</Text>
								<Icon name="facebook-square" style={{color: "#fff", position: "absolute", left: 40, top: 40}} size={30}/>
							</View>
						</View>
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
	scrollView: {
		backgroundColor: "#292a2b"
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
		alignItems: 'center',
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
		flex: 0.2,
		alignItems: "center",
		padding: 20,
		backgroundColor: "#f0c10033"
	}
});

const drawerStyles = {
	backgroundColor: '#000'
}