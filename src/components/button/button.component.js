import React from 'react';
import { Text, View,TouchableOpacity} from 'react-native';
import {styles} from './button.style';
import Icon from 'react-native-vector-icons/Ionicons';

export const Button =({ buttonText, iconName, buttonStyles,buttonTextStyles,nextScreen,navigation,buttontestID}) => {
  return(
    <View>

      {buttonText && <View style={styles.textContainer}>
        <TouchableOpacity testID={buttontestID} style={[styles.textBbuttonItem,{...buttonStyles}]} onPress={() => navigation.navigate(nextScreen)}>
          <Text style={[styles.textButtonText,{...buttonTextStyles}]}> {buttonText} </Text>
        </TouchableOpacity>
      </View>}  

      {iconName && <View style={styles.iconContainer}>
        <TouchableOpacity testID={buttontestID} style={[styles.iconButtonItem,{...buttonStyles}]} onPress={() => navigation.navigate(nextScreen)}>
          <Icon name={iconName} size={25} color='#0071BF' />
        </TouchableOpacity>
      </View>}  
            
    </View>
  );
};