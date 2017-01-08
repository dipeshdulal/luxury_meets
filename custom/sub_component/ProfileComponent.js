// profile component implementation
import React, {Component} from 'react';
import {
	View, Image, Text, TouchableHighlight, StyleSheet, Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ProfileComponent extends Component{

	constructor(p){
		super(p);
		this.state = {like: false};
	}

	likePress(){
		if(this.state.like)
			this.setState({like: false});
		else 
			this.setState({like: true});
		this.props.likePressCallback(!this.state.like);
	}

	// render
	render(){
		return (
				<View style={mainStyles.bottomView}>
					<Image resizeMode="cover" source={this.props.userImage} style={mainStyles.userImage} />
					<View style={{flex: 1, flexDirection: "row"}}>
						<Text style={{color: "#f0c100", flex: 0.5, fontSize: 30, padding: 20}}>{this.props.username}, {this.props.age}</Text>
						<TouchableHighlight onPress={this.likePress.bind(this)}>
							<View style={mainStyles.heartComment}>
								<Icon name="heart" size={30} style={this.state.like ? {color: "red"} : {color: "#f0c100"}}/>
							</View>
						</TouchableHighlight>
						<TouchableHighlight onPress={this.props.messagePressCallback}>
							<View style={mainStyles.heartComment}>
								<Icon name="comment" size={30} style={{color: "#f0c100"}}/>
							</View>
						</TouchableHighlight>
					</View>
					<View>
						<Text style={{color: "#f0c100", padding: 20, fontSize: 18}}>About Me:</Text>
						<Text style={{color: "#ffffff88", paddingLeft: 20, fontSize: 14, textAlign: "justify", lineHeight: 30}}>{this.props.about}</Text>
						<Text style={{color: "#f0c100", padding: 20, fontSize: 18}}>Work:</Text>
						<Text style={{color: "#fff8", paddingLeft: 20, fontSize: 14, textAlign: "justify", lineHeight: 30}}>{this.props.work}</Text>
					</View>
				</View>
			);
	}

}

var mainStyles= StyleSheet.create({
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
	heartComment: {
		flex: 0.1,
		alignItems: "center",
		padding: 20,
		paddingTop: 20,
		backgroundColor: "#f0c10033"
	}
});