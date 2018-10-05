import React, {Component} from 'react';
import {Platform, StyleSheet, Image, AppRegistry ,Text, View} from 'react-native';
import Login from './Screens/Login';

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (

    	<Login />

    );
  }
}

const style = StyleSheet.create({
	container : {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#787878',
	},
	welcome: {
		fontSize: 15,
		textAlign: 'center',
		margin: 5,
		color: '#123456',
	},
});