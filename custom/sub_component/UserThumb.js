// user thumbinail implementation of main component
import React , {Component} from 'react';
import {
	View, Text, Image, TouchableHighlight, StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class UserThumb extends Component {

	constructor(props){
		super(props);
		this.state = {
			pressed: false
		};
	}

	// handling like button press
	likeButtonPress(){
		// change the style and then callback
		if(this.state.pressed){
			this.setState({pressed: false});
		}else{
			this.setState({pressed: true});
		}
		this.props.likeButtonCallback(!this.state.pressed, this.props.userid);
	}

	// handling message button press
	messageButtonPress(){
		// go to callback directly
		this.props.messageButtonCallback(this.props.userid);
	}

	// render
	render(){
		return (<View style={mainStyles.parentView}>
					<View style={mainStyles.images}>
						<View style={mainStyles.blackFilter}></View>
						<Text style={mainStyles.username}>{this.props.username}</Text>
						<Image style={mainStyles.userImage} source={this.props.imageSource} />
					</View>
					<View style={mainStyles.bottomIcons}>
						<TouchableHighlight onPress={this.likeButtonPress.bind(this)}><Icon style={mainStyles.userButton} name="heart" size={20} color={this.state.pressed? "red" : "#f0c100"}/></TouchableHighlight>
						<TouchableHighlight onPress={this.messageButtonPress.bind(this)}><Icon style={mainStyles.userButton} name="comment" size={20} color="#f0c100"/></TouchableHighlight>
					</View>
				</View>);
	}

}

var mainStyles = StyleSheet.create({
	parentView: {
		backgroundColor: 'black',
		paddingBottom: 0,
		margin: 10,
	},
	userImage: {
		width: 130,
		height: 130, 
		resizeMode: 'cover'
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
		width: 130,
		height: 130,
		flex: 1,
		zIndex: 2
	}
});