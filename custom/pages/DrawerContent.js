import React, { Component } from 'react';
import {
	View, StyleSheet, Text, Image, ScrollView, TouchableHighlight, Button, TextInput, Picker
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class DrawerContent extends Component {

	drawerButtonPress(self, sourceScreen, destinationScreen, user = ""){
		if(sourceScreen != destinationScreen)
			self.props.navigator.push({id: destinationScreen, user: user});
	}

	constructor(props){
		super(props);
		this.state = {
			text: ""
		};
	}

	searchSubmit(){
		let query = this.state.text;
		this.props.searchCallback(query);
	}

	render(){
		var userImage = require('../resources/user.jpg');
		return (
			<ScrollView style={{backgroundColor: "black"}}>
				<View style={styles.drawerMain}>
					<View style={{position: "relative", flexDirection: "row", backgroundColor: "#f0c100"}}>
						{/*<View style={styles.pickerStyle}>
							<Text>Sort By:</Text>
							<Picker
								style={{backgroundColor: "#f0c100", color: "white"}}
								selectedValue="java"
								onValueChange={()=>{console.log("Heelo")}}
								>
								<Picker.Item label="Nearest" value="--" />
							</Picker>
						</View>*/}
						<TextInput
							onChangeText={(text) => this.setState({text})}
							onSubmitEditing={this.searchSubmit.bind(this)}
							style={styles.luxuryMeetsSearch}
							placeholder="Search Luxury Meets"
						/>
						<View style={{position: "absolute", right: 20, top: 15}}>
							<Icon name="search" size={30} style={{color: "#333"}} />
						</View>
					</View>
					<TouchableHighlight onPress={() => { this.drawerButtonPress(this, this.props.screen, "MainScreen")}}>
					<View style={styles.drawerChildren}>
						<Icon name="home" size={30} style={styles.iconStyle}/><Text style={{color: "#f0c100", fontSize: 20}}>Home</Text>
					</View>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => { this.drawerButtonPress(this, this.props.screen, "Profiles", this.props.facebookData) }}>
					<View style={styles.drawerChildren}>
						<Icon name="user" size={30} style={styles.iconStyle}/><Text style={{color: "#f0c100", fontSize: 20}}>Profile</Text>
					</View>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => { this.drawerButtonPress(this, this.props.screen, "Preferences", this.props.facebookData) }}>
					<View style={styles.drawerChildren}>
						<Icon name="cog" size={30} style={styles.iconStyle}/><Text style={{color: "#f0c100", fontSize: 20}}>Preferences</Text>
					</View>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => { this.drawerButtonPress(this, this.props.screen, "InviteFriends") }}>
					<View style={styles.drawerChildren}>
						<Icon name="envelope" size={30} style={styles.iconStyle}/><Text style={{color: "#f0c100", fontSize: 20}}>Invite Friends</Text>
					</View>
					</TouchableHighlight>

					
				</View>
			</ScrollView>
		);

	}
}

var styles = StyleSheet.create({
	drawerMain: {
		backgroundColor: "black",
	},
	drawerChildren: {
		flexDirection: 'row',
		paddingLeft: 10,
		paddingTop: 20,
		paddingBottom: 20,
	},
	pickerStyle: {
		backgroundColor: "white",
		backgroundColor: "#f0c100", 
		flex: 0.3,
		padding: 5,
		flexDirection: "row"
	},
	iconStyle: {
		color: "#f0c100", 
		width: 50,
		borderColor: "#f0c100"
	},
	luxuryMeetsSearch: {
		padding: 10,
		paddingLeft: 20,
		flex: 0.7,
		fontSize: 16,
		backgroundColor: "#fff",
	}
});