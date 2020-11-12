import React, { Component } from 'react';
import { Text, View } from 'react-native';

class TodoScreen extends Component {

  constructor( props ) {    
    super(props)
    this.state = { date : new Date() };
    console.log( '[ INFO ] constructor' );
  }

  // ideal for call your web service
  componentDidMount(){
    console.log( '[ INFO ] componentDidMout' );
    this.timerID = setInterval(
      () => this.tick(),
      100
    );
    
  }

  componentWillUnmount(){
    console.log( '[ INFO ] componentWillUnmount' );
  }

  tick() {
    this.setState({
      date : new Date()
    })
  }
 
  render() {
    return (
      <View>
        <Text>Hello, It is {this.state.date.toLocaleTimeString()}.!</Text>
      </View>
      
    );
  }
}

export default TodoScreen;