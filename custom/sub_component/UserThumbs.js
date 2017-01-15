import React, { Component } from 'react';
import {
	View
} from 'react-native';
import UserThumb from './UserThumb';

export default class UserThumbs extends Component{

	_renderItems(){
		return this.props.items.map((item, i)=>{
			return (<UserThumb
							username={item.username}
							imageSource={item.imageUrl}
							userid={item.userID}
							likeButtonCallback={this.likeButtonCallback}
							commentButtonCallback={this.commentButtonCallback} />);
		});
	}

	render(){

		return (

			<View>
				{this._renderItems()}
			</View>

		);
	}

} 