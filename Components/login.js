import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

class login extends React.Component{
	render(){
		return(<Text style={kata.login}>{this.props.title}</Text>)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor : '#3498db'
	}
});

export default login;