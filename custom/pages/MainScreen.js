import React , {Component} from 'react';
import { Text, Image, ScrollView, View, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Drawer from 'react-native-drawer';
import DrawerContent from './DrawerContent';
// splash screen display componens
export default class MainScreen extends Component{

	render(){
		var logo = require('../resources/logo.png');
		var userImage = require('../resources/user.jpg');
		return (
			<Drawer 
				ref={(ref) => {this._drawer = ref}}
				content={<DrawerContent />}
				tapToClose={true}
				tweenHandler={Drawer.tweenPresets.parallax}
				openDrawerOffset={0.2}
				styles={{backgroundColor: 'black'}} >

				<View style={mainStyles.outside}>
					<View style={mainStyles.navbar}>
						<TouchableHighlight onPress={ () => {this._drawer.open(); }}><Text style={mainStyles.navbarText}><Icon name="bars" size={20} color="#f0c100" /></Text></TouchableHighlight>
						<Image style={mainStyles.logo} source={logo}/>
						<View style={mainStyles.navbarText}><View style={mainStyles.messageNumber}><Text style={{color: "white", fontSize: 10}}>100</Text></View><Icon name="comment" size={20} color="#f0c100" /></View>
					</View>
					<ScrollView style={mainStyles.scrollView}>
						<View style={mainStyles.bottomView}>
							<View style={mainStyles.parentView}>
								<View style={mainStyles.images}>
									<View style={mainStyles.blackFilter}></View>
									<Text style={mainStyles.username}>Name</Text>
									<Image style={mainStyles.userImage} source={userImage} />
								</View>
								<View style={mainStyles.bottomIcons}>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="heart" size={20} color="#f0c100"/></TouchableHighlight>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="comment" size={20} color="#f0c100"/></TouchableHighlight>
								</View>
							</View>
							<View style={mainStyles.parentView}>
								<View style={mainStyles.images}>
									<View style={mainStyles.blackFilter}></View>
									<Text style={mainStyles.username}>Name</Text>
									<Image style={mainStyles.userImage} source={userImage} />
								</View>
								<View style={mainStyles.bottomIcons}>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="heart" size={20} color="#f0c100"/></TouchableHighlight>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="comment" size={20} color="#f0c100"/></TouchableHighlight>
								</View>
							</View>
							<View style={mainStyles.parentView}>
								<View style={mainStyles.images}>
									<View style={mainStyles.blackFilter}></View>
									<Text style={mainStyles.username}>Name</Text>
									<Image style={mainStyles.userImage} source={userImage} />
								</View>
								<View style={mainStyles.bottomIcons}>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="heart" size={20} color="#f0c100"/></TouchableHighlight>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="comment" size={20} color="#f0c100"/></TouchableHighlight>
								</View>
							</View>
							<View style={mainStyles.parentView}>
								<View style={mainStyles.images}>
									<View style={mainStyles.blackFilter}></View>
									<Text style={mainStyles.username}>Name</Text>
									<Image style={mainStyles.userImage} source={userImage} />
								</View>
								<View style={mainStyles.bottomIcons}>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="heart" size={20} color="#f0c100"/></TouchableHighlight>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="comment" size={20} color="#f0c100"/></TouchableHighlight>
								</View>
							</View>
							<View style={mainStyles.parentView}>
								<View style={mainStyles.images}>
									<View style={mainStyles.blackFilter}></View>
									<Text style={mainStyles.username}>Name</Text>
									<Image style={mainStyles.userImage} source={userImage} />
								</View>
								<View style={mainStyles.bottomIcons}>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="heart" size={20} color="#f0c100"/></TouchableHighlight>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="comment" size={20} color="#f0c100"/></TouchableHighlight>
								</View>
							</View>
							<View style={mainStyles.parentView}>
								<View style={mainStyles.images}>
									<View style={mainStyles.blackFilter}></View>
									<Text style={mainStyles.username}>Name</Text>
									<Image style={mainStyles.userImage} source={userImage} />
								</View>
								<View style={mainStyles.bottomIcons}>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="heart" size={20} color="#f0c100"/></TouchableHighlight>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="comment" size={20} color="#f0c100"/></TouchableHighlight>
								</View>
							</View>
							<View style={mainStyles.parentView}>
								<View style={mainStyles.images}>
									<View style={mainStyles.blackFilter}></View>
									<Text style={mainStyles.username}>Name</Text>
									<Image style={mainStyles.userImage} source={userImage} />
								</View>
								<View style={mainStyles.bottomIcons}>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="heart" size={20} color="#f0c100"/></TouchableHighlight>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="comment" size={20} color="#f0c100"/></TouchableHighlight>
								</View>
							</View>
							<View style={mainStyles.parentView}>
								<View style={mainStyles.images}>
									<View style={mainStyles.blackFilter}></View>
									<Text style={mainStyles.username}>Name</Text>
									<Image style={mainStyles.userImage} source={userImage} />
								</View>
								<View style={mainStyles.bottomIcons}>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="heart" size={20} color="#f0c100"/></TouchableHighlight>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="comment" size={20} color="#f0c100"/></TouchableHighlight>
								</View>
							</View>
							<View style={mainStyles.parentView}>
								<View style={mainStyles.images}>
									<View style={mainStyles.blackFilter}></View>
									<Text style={mainStyles.username}>Name</Text>
									<Image style={mainStyles.userImage} source={userImage} />
								</View>
								<View style={mainStyles.bottomIcons}>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="heart" size={20} color="#f0c100"/></TouchableHighlight>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="comment" size={20} color="#f0c100"/></TouchableHighlight>
								</View>
							</View>
							<View style={mainStyles.parentView}>
								<View style={mainStyles.images}>
									<View style={mainStyles.blackFilter}></View>
									<Text style={mainStyles.username}>Name</Text>
									<Image style={mainStyles.userImage} source={userImage} />
								</View>
								<View style={mainStyles.bottomIcons}>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="heart" size={20} color="#f0c100"/></TouchableHighlight>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="comment" size={20} color="#f0c100"/></TouchableHighlight>
								</View>
							</View>
							<View style={mainStyles.parentView}>
								<View style={mainStyles.images}>
									<View style={mainStyles.blackFilter}></View>
									<Text style={mainStyles.username}>Name</Text>
									<Image style={mainStyles.userImage} source={userImage} />
								</View>
								<View style={mainStyles.bottomIcons}>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="heart" size={20} color="#f0c100"/></TouchableHighlight>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="comment" size={20} color="#f0c100"/></TouchableHighlight>
								</View>
							</View>
							<View style={mainStyles.parentView}>
								<View style={mainStyles.images}>
									<View style={mainStyles.blackFilter}></View>
									<Text style={mainStyles.username}>Name</Text>
									<Image style={mainStyles.userImage} source={userImage} />
								</View>
								<View style={mainStyles.bottomIcons}>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="heart" size={20} color="#f0c100"/></TouchableHighlight>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="comment" size={20} color="#f0c100"/></TouchableHighlight>
								</View>
							</View>
							<View style={mainStyles.parentView}>
								<View style={mainStyles.images}>
									<View style={mainStyles.blackFilter}></View>
									<Text style={mainStyles.username}>Name</Text>
									<Image style={mainStyles.userImage} source={userImage} />
								</View>
								<View style={mainStyles.bottomIcons}>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="heart" size={20} color="#f0c100"/></TouchableHighlight>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="comment" size={20} color="#f0c100"/></TouchableHighlight>
								</View>
							</View>
							<View style={mainStyles.parentView}>
								<View style={mainStyles.images}>
									<View style={mainStyles.blackFilter}></View>
									<Text style={mainStyles.username}>Name</Text>
									<Image style={mainStyles.userImage} source={userImage} />
								</View>
								<View style={mainStyles.bottomIcons}>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="heart" size={20} color="#f0c100"/></TouchableHighlight>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="comment" size={20} color="#f0c100"/></TouchableHighlight>
								</View>
							</View>
							<View style={mainStyles.parentView}>
								<View style={mainStyles.images}>
									<View style={mainStyles.blackFilter}></View>
									<Text style={mainStyles.username}>Name</Text>
									<Image style={mainStyles.userImage} source={userImage} />
								</View>
								<View style={mainStyles.bottomIcons}>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="heart" size={20} color="#f0c100"/></TouchableHighlight>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="comment" size={20} color="#f0c100"/></TouchableHighlight>
								</View>
							</View>
							<View style={mainStyles.parentView}>
								<View style={mainStyles.images}>
									<View style={mainStyles.blackFilter}></View>
									<Text style={mainStyles.username}>Name</Text>
									<Image style={mainStyles.userImage} source={userImage} />
								</View>
								<View style={mainStyles.bottomIcons}>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="heart" size={20} color="#f0c100"/></TouchableHighlight>
									<TouchableHighlight onPress={this.userButtonPress}><Icon style={mainStyles.userButton} name="comment" size={20} color="#f0c100"/></TouchableHighlight>
								</View>
							</View>
							
						</View>
					</ScrollView>
				</View>
			</Drawer>
		);
	}

}

var mainStyles = StyleSheet.create({
	outside: {
		flexDirection: 'column'
	},
	navbar: {
		backgroundColor: 'black',
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	navbarText: {
		padding: 20,
		position: "relative",
		flex: 1,
		color: '#ffffff',
		backgroundColor: '#1a1b1c'
	},
	messageNumber: {
		position: "absolute",
		left: 30,
		top: 10,
		zIndex: 2,
		padding: 5,
		borderRadius: 100,
		backgroundColor: "red"
	},
	logo: {
		flex: 12,
		marginTop: 10,
		height: 40,
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
		width: 160,
		height: 160, 
		resizeMode: 'cover'
	},
	scrollView: {
		backgroundColor: '#292a2b'
	},
	bottomIcons: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	images: {
		position: 'relative'
	},
	userButton: {
		padding: 30
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
		width: 160,
		height: 160,
		flex: 1,
		zIndex: 2
	}
});

const drawerStyles = {
	backgroundColor: '#000'
}