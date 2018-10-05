import React from 'react';
import {Text} from 'react-native';

class Judul extends React.Component{
	render() {
		return(<Text style={kata.Judul}>{this.props.title}</Text>)
	}
}
const kata ={
	Judul:{
		color:'#f00',
		fontSize:30,
	}
}
export default Judul;