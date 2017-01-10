import React , { Component } from 'react';
import { 
	View, Image, StyleSheet, Text
} from 'react-native';
import Swipeout from 'react-native-swipeout';

export default class NoticationItem extends Component {

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
				style={{marginBottom: 10}}
				autoClose={true}
				backgroundColor="#f0c10011"
				right={swipeoutButtons}>
				<View style={styles.notificationStyle}>
					<View style={styles.dateView}><Text style={{color: "#f0c10099"}}>{this.props.date}</Text></View>
					<Image source={this.props.userImage} style={styles.userPhoto}/><Text style={{color: "#f0c100", paddingLeft: 20, paddingTop: 10, paddingRight: 20}}>{this.props.notification}</Text>
				</View>
			</Swipeout>
			);
	}

}

var styles = StyleSheet.create({
	notificationStyle: {
		position: "relative",
		padding: 20, 
		flexDirection: 'row',
		backgroundColor : "#f0c10066"
	},
	dateView: {
		position: "absolute",
		top: 10,
		right: 10
	},
	userPhoto: {
		width: 50,
		height: 50,
		borderColor: "#f0c100",
		borderWidth: 2,
		borderRadius: 10,
		resizeMode: "cover"
	},
});