import React , {Component} from 'react';
import { Text, Image, ScrollView, View, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// splash screen display component
export default class MainScreen extends Component{

	render(){
		var logo = require('../resources/logo.png');
		var userImage = require('../resources/user.jpg');
		return (
			<View style={mainStyles.outside}>
				<View style={mainStyles.navbar}>
					<Text style={mainStyles.navbarText}><Icon name="bars" size={20} color="#fff" /></Text>
					<Image style={mainStyles.logo} source={logo}/>
					<Text style={mainStyles.navbarText}><Icon name="comment" size={20} color="#fff" /></Text>
				</View>
				<ScrollView style={mainStyles.scrollView}>
					<View style={mainStyles.bottomView}>
						<View style={mainStyles.parentView}>
							<Image style={mainStyles.userImage} source={userImage} />
							<View style={mainStyles.bottomIcons}>
								<TouchableHighlight onclick><Icon name="heart" size={30} color="#fff" style={{padding: 20}}/></TouchableHighlight>
								<TouchableHighlight><Icon name="comment" size={30} color="#fff" style={{padding: 20}}/></TouchableHighlight>
							</View>
						</View>
						<View style={mainStyles.parentView}>
							<Image style={mainStyles.userImage} source={userImage} />
							<View style={mainStyles.bottomIcons}>
								<TouchableHighlight><Icon name="heart" size={30} color="#fff" style={{padding: 20}}/></TouchableHighlight>
								<TouchableHighlight><Icon name="comment" size={30} color="#fff" style={{padding: 20}}/></TouchableHighlight>
							</View>
						</View>
						<View style={mainStyles.parentView}>
							<Image style={mainStyles.userImage} source={userImage} />
							<View style={mainStyles.bottomIcons}>
								<TouchableHighlight><Icon name="heart" size={30} color="#fff" style={{padding: 20}}/></TouchableHighlight>
								<TouchableHighlight><Icon name="comment" size={30} color="#fff" style={{padding: 20}}/></TouchableHighlight>
							</View>
						</View>
						<View style={mainStyles.parentView}>
							<Image style={mainStyles.userImage} source={userImage} />
							<View style={mainStyles.bottomIcons}>
								<TouchableHighlight><Icon name="heart" size={30} color="#fff" style={{padding: 20}}/></TouchableHighlight>
								<TouchableHighlight><Icon name="comment" size={30} color="#fff" style={{padding: 20}}/></TouchableHighlight>
							</View>
						</View>
						<View style={mainStyles.parentView}>
							<Image style={mainStyles.userImage} source={userImage} />
							<View style={mainStyles.bottomIcons}>
								<TouchableHighlight><Icon name="heart" size={30} color="#fff" style={{padding: 20}}/></TouchableHighlight>
								<TouchableHighlight><Icon name="comment" size={30} color="#fff" style={{padding: 20}}/></TouchableHighlight>
							</View>
						</View>
						<View style={mainStyles.parentView}>
							<Image style={mainStyles.userImage} source={userImage} />
							<View style={mainStyles.bottomIcons}>
								<TouchableHighlight><Icon name="heart" size={30} color="#fff" style={{padding: 20}}/></TouchableHighlight>
								<TouchableHighlight><Icon name="comment" size={30} color="#fff" style={{padding: 20}}/></TouchableHighlight>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}

}

var mainStyles = StyleSheet.create({
	outside: {
		flexDirection: 'column'
	},
	navbar: {
		backgroundColor: 'black',
		padding: 30,
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	navbarText: {
		color: '#ffffff'
	},
	logo: {
		height: 35,
		resizeMode: 'contain'
	},
	bottomView: {
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		padding: 30,
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	parentView: {
		width: 250,
		backgroundColor: 'black',
		padding: 30,
		paddingBottom: 0,
		margin: 10
	},
	userImage: {
		width: 190,
		height: 200,
		resizeMode: 'cover'
	},
	scrollView: {
		backgroundColor: '#292a2b'
	},
	bottomIcons: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	}
});