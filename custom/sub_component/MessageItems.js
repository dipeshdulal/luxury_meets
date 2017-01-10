// To display different message types based on the data received
import React, { Component } from 'react';
import {
	Text, View
} from 'react-native';
import MessageItem from './MessageItem';

export default class MessageItems extends Component{

	_renderItems(){
		return this.props.items.map((item, i)=>{
			return (<MessageItem
							key={item.id}
							id={item.id}
							userImage={item.userImage}
							messageType={item.messageType}
							sender={item.sender}
							message={item.message}
							date={item.date} 
							deletePressCallback={this.props.deletePressCallback}/>);
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