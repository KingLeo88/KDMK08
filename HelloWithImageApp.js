// -*- js-jsx -*-
import React from 'react';
import Greeting from './Greeting';
import BlinkText from './BlinkText';
import { StyleSheet, Text, Image, View } from 'react-native';

export default class HelloWithImageApp extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 270, height: 154}}/>
        <Greeting name='World'/>
        <Greeting name='Class'/>
        <Greeting name='Doctor'/>
        <Text>Open up App.js to start working on your app!</Text>
        <BlinkText text='Changes you make will automatically reload.'/>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
