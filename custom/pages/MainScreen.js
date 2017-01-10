import React , {Component} from 'react';
import { Text, Image, ScrollView, View, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Drawer from 'react-native-drawer';
import DrawerContent from './DrawerContent';
import MessageDrawerContent from './MessageDrawerContent';
import UserThumb from '../sub_component/UserThumb';


// splash screen display componens
export default class MainScreen extends Component{

	constructor(props){
		super(props);
	}

	likeButton(v, id){
		console.log(id);
	}

	commentButton(){
		console.log("Comment button clicked");
	}

	searchCallback(val){
		this._drawer.close();
	}

	render(){
		var logo = require('../resources/logo.png');
		var userImage = require('../resources/user.jpg');
		return (
			<Drawer 
				ref={(ref) => {this._drawer = ref}}
				content={<DrawerContent navigator={this.props.navigator} screen="MainScreen" searchCallback={this.searchCallback.bind(this)}/>}
				tapToClose={true}
				panOpenMask= {300}
				tweenHandler={Drawer.tweenPresets.parallax}
				openDrawerOffset={0.2}
				styles={{backgroundColor: 'black'}} >
				
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
						<TouchableHighlight onPress={ () => {this._drawer.open(); }}><Text style={mainStyles.navbarText}><Icon name="bars" size={20} color="#f0c100" /></Text></TouchableHighlight>
						<Image style={mainStyles.logo} source={logo}/>
						<TouchableHighlight onPress={() => {this._drawer1.open(); }}><View style={mainStyles.navbarTextView}><View style={mainStyles.messageNumber}><Text style={{color: "white", fontSize: 12, padding: 2}}>9+</Text></View><Icon name="comment" size={20} color="#f0c100" /></View></TouchableHighlight>
					</View>
					<View style={mainStyles.scrollParent}>
						<ScrollView style={mainStyles.scrollView}>
							<View style={mainStyles.bottomView}>
								
								<UserThumb
									userid={1}
									username="Angelina Jolie"
									imageSource={userImage}
									likeButtonCallback={this.likeButton.bind(this)}
									messageButtonCallback={this.commentButton.bind(this)} />
								
								<UserThumb
									userid={2}
									username="Angelina Jolie"
									imageSource={userImage}
									likeButtonCallback={this.likeButton.bind(this)}
									messageButtonCallback={this.commentButton.bind(this)} />
					
								<UserThumb
									userid={2}
									username="Angelina Jolie"
									imageSource={userImage}
									likeButtonCallback={this.likeButton.bind(this)}
									messageButtonCallback={this.commentButton.bind(this)} />
								
							</View>
						</ScrollView>
					</View>
				</View>
				</Drawer>
			</Drawer>
		);
	}

}

var mainStyles = StyleSheet.create({
	outside: {
		flexDirection: 'column',

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
		flex: 12,
		marginTop: 15,
		marginBottom: 15,
		marginTop: 10,
		height: 45,
		resizeMode: 'contain'
	},
	bottomView: {
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	parentView: {
		backgroundColor: 'black',
		paddingBottom: 0,
		margin: 10,
	},
	userImage: {
		width: 120,
		height: 120, 
		resizeMode: 'cover'
	},
	scrollParent: {
		backgroundColor: "#292a2b",
	},
	scrollView: {
		backgroundColor: '#292a2b',
		height: Dimensions.get('window').height,
	},
	bottomIcons: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	images: {
		position: 'relative'
	},
	userButton: {
		padding: 10
	},
	username: {
		color: '#fff',
		zIndex: 3,
		bottom: 0,
		position: 'absolute',
		padding: 10
	},
	blackFilter: {
		position: 'absolute',
		backgroundColor: '#0007',
		top: 0,
		left: 0,
		width: 120,
		height: 120,
		flex: 1,
		zIndex: 2
	}
});

const drawerStyles = {
	backgroundColor: '#000'
}