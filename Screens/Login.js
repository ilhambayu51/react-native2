import React from 'react';
import {Text, View, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';


class Login extends React.Component{
	render() {
		return(
			<KeyboardAvoidingView behavior="padding" style={kata.container}>
				<View style={kata.logoContainer}>
					<Image style={kata.logo}
					source={require('./6.png')}/>
					<Text style={kata.title}> Made for github using React Native</Text>
					<View style={kata.formContainer}>
					<LoginForm />
					</View>
				</View>
			</KeyboardAvoidingView>
		);
	}
}
const kata = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#3860bb',
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center',
	},
	logo: {
		width: 100,
		height: 100,
	},
	title: {
		color: '#fff',
		marginTop: 20,
		textAlign: 'center',
		width: 170,
	}
});
export default Login;