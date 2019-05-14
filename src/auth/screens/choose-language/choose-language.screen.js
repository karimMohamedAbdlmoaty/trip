import React from 'react';
import { View , Text } from 'react-native';
import {Button} from '../../../components/button/button.component';
import { styles } from './choose-language.style';
import LinearGradient from 'react-native-linear-gradient';



export const ChooseLanguage= ({navigation}) => {
  const theButtonStyles = {align:'center' };
  return(
    <View style={styles.container}>
      <LinearGradient colors={['#00A8EA', '#2B3A90']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.container}>
      <Text>CHOOSE LANGUAGE screen</Text>
      <Text>CHOOSE LANGUAGE screen</Text>
      <Text>CHOOSE LANGUAGE screen</Text>
      <Text>CHOOSE LANGUAGE screen</Text>
      
      
      </LinearGradient>
    </View>
  );
};


