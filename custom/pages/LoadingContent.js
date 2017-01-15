// loading screen before the main screen opens
import React, { Component } from 'react';
import {
	View, StyleSheet
} from 'react-native';

export default class LoadingContent extends Component{

	render(){
		return (
			<View style={styles.parent}></View>
		);
	}

}

const styles = StyleSheet.create({

});