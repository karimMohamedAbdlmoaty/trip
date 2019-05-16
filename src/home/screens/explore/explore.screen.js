import React, {Component} from 'react';
import { Text,View} from 'react-native';
import { styles } from './explore.styles';


export class Explore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text testID='home-page' style={{marginTop:20}} >Explore screen</Text>
      </View>
    );
  }
}
