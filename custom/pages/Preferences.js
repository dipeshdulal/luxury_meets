import React, { Component } from 'react';
import { InteractionManager, Switch, Text, View, StyleSheet, TouchableHighlight, Image, ScrollView, Dimensions, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Drawer from 'react-native-drawer';
import DrawerContent from './DrawerContent';
import MessageDrawerContent from './MessageDrawerContent';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export default class Preferences extends Component {

	constructor(props){
		super(props);
		fetch('http://graph.facebook.com')
				.then((response) => response.json())
				.then((responseJson) => {
					console.log(responseJson);
				});
		this.state = {
			male: true,
			female: false,
			messages: true,
			likes: true,
			calls: true,
			ageValue: [20,70],
			placeholder: true
		}
	}
	
	_renderPlaceholder(){
		return (
				<View style={{backgroundColor: "#333", flex: 1, justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
					<Text style={{color: "white", textAlign: "center", fontSize: 16}}>LOADING...</Text>
				</View>
			);
	}

	componentDidMount(){
		InteractionManager.runAfterInteractions(() => {
			this.stateSetter(this, "placeholder", false);
		});
	}

	stateSetter(self, type,bool){
		this.state[type] = bool;
		this.setState(this.state);
	}

	multiSliderValuesChange(self, values){
		self.state.ageValue[0] = values[0]*10;
		self.state.ageValue[1] = values[1]*10;
		self.setState(self.state);
	}

	render(){
		var logo = require('../resources/logo.png');
		var userImage = require('../resources/user.jpg');
		if(this.state.placeholder){
			return this._renderPlaceholder();
		}
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
					<Text style={mainStyles.logo}>Preferences</Text>
					<TouchableHighlight onPress={() => {this._drawer1.open(); }}><View style={mainStyles.navbarTextView}><View style={mainStyles.messageNumber}><Text style={{color: "white", fontSize: 12, padding: 2}}>9+</Text></View><Icon name="comment" size={20} color="#f0c100" /></View></TouchableHighlight>
				</View>
				<View style={{flex: 1, backgroundColor: "#292a2b"}}>
				<ScrollView style={mainStyles.scrollView}>
					<View style={mainStyles.bottomView}>
						<View style={{width: Dimensions.get('window').width, padding: 20}}>
							<View style={mainStyles.settingHeadingParent}>
								<Text  style={mainStyles.settingHeading}>I want to find.</Text>
							</View>
							<View style={mainStyles.settingChildren}>
								<Text style={mainStyles.individualText}>Women</Text>
								<Switch
								  onValueChange={() => { this.stateSetter(this, "female", !this.state.female)} }
						          style={{marginBottom: 10}}
						          value={this.state.female} />
							</View>
							<View style={mainStyles.settingChildren}>
								<Text style={mainStyles.individualText}>Men</Text>
								<Switch
								  onValueChange={() => { this.stateSetter(this, "male", !this.state.male)}}
						          style={{marginBottom: 10}}
						          value={this.state.male} />
							</View>
							<View style={mainStyles.settingHeadingParent}>
								<Text  style={mainStyles.settingHeading}>Show People From <Text style={{color: "white"}}>{this.state.ageValue[0]} to {this.state.ageValue[1]}</Text></Text>
							</View>
							<View style={mainStyles.settingChildren}>
								<MultiSlider 
									containerStyle={{height: 30, justifyContent: "center"}}
									onValuesChange={(value) => { this.multiSliderValuesChange(this, value) }}
									touchDimensions={{
										height: 40,
										width: 40,
										borderRadius: 20,
										slipDisplacement: 40
									}}
									values={[0, 9]} 
									sliderLength={280} />
						
							</View>
							<View style={mainStyles.settingHeadingParent}>
								<Text style={mainStyles.settingHeading}>Notifications</Text>
							</View>
							<View style={mainStyles.settingChildren}>
								<Text style={mainStyles.individualText}>Messages</Text>
								<Switch
								  onValueChange={() => { this.stateSetter(this, "messages", !this.state.messages)}}
						          style={{marginBottom: 10}}
						          value={this.state.messages} />
							</View>
							<View style={mainStyles.settingChildren}>
								<Text style={mainStyles.individualText}>Likes</Text>
								<Switch
								  onValueChange={() => { this.stateSetter(this, "likes", !this.state.likes)}}
						          style={{marginBottom: 10}}
						          value={this.state.likes} />
							</View>
							<View style={mainStyles.settingChildren}>
								<Text style={mainStyles.individualText}>Calls</Text>
								<Switch
								  onValueChange={() => { this.stateSetter(this, "calls", !this.state.calls)}}
						          style={{marginBottom: 10}}
						          value={this.state.calls} />
							</View>
							<TouchableHighlight onPress={()=>{console.log("logout")}}>
								<Text style={mainStyles.logoutButton}>Log Out</Text>
							</TouchableHighlight>
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
	settingChildren: {
		justifyContent: "space-between",
		flexDirection: "row",
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#f0c100"
	},
	individualText: {
		color: "#f0c100", 
		fontSize: 16
	},
	settingHeadingParent: {
		flexWrap: "wrap",
		borderBottomWidth: 2,
		flexDirection: "row",
		borderBottomColor: "#f0c100",
	},
	settingHeading: {
		padding: 10,
		fontSize: 18,
		color: "#f0c100"
	},
	logoutButton: {
		textAlign: "center",
		padding: 10,
		fontSize: 18,
		backgroundColor: "#f0c100",
		marginTop: 20,
		borderRadius: 10,
		color: "white"
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