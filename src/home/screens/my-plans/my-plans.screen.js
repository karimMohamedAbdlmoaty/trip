import React, {Component} from 'react';
import { Text,View} from 'react-native';
import { styles } from './my-plans.styles';


export class MyPlans extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text testID='home-page' style={{marginTop:20}} >MyPlans screen</Text>
      </View>
    );
  }
}
