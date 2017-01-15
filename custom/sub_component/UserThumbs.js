import React, { Component } from 'react';
import {
	View, StyleSheet
} from 'react-native';
import UserThumb from './UserThumb';
import User from '../model_components/User';
export default class UserThumbs extends Component{

	constructor(props){
		super(props);
		this.state = { 
			userThumbs : [] 
		};
		this._renderItems();
	}

	_renderItems(){
		this.props.items.forEach((item) => {
			console.log(item);
			// create a user
			var user = new User(item.username, item.password);
			var a = user.populateData((error: ?Object, result: ?Object) => {
				if(error){
					console.log(error);
				}else{
					result.username = item.username;
					this.state.userThumbs.push(result);
					this.setState(this.state);
				}
			});
		});
			
	}

	_renderThumbs(){
		return this.state.userThumbs.map((item, i) => {
			console.log(item)
			return <UserThumb 
						key={item.id}
						username={item.username} 
						imageSource={{uri: item.picture.data.url}}/>;
		});
	}

	render(){
		return (

			<View style={mainStyles.bottomView}>
								
				{this._renderThumbs()}
				
			</View>

		);
	}

} 

const mainStyles = StyleSheet.create({
	bottomView: {
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		flexDirection: 'row',
		justifyContent: 'space-around'
	}
});