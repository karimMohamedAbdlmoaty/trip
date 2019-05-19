import React from 'react';
import { Text, View,TouchableOpacity} from 'react-native';
import {styles} from './button.style';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Button =({ buttonStyles ,nextScreen,navigation,buttontestID,
  iconButton, iconButtonDetails ,
  textIconButton,textButtonIconDetails, buttonTextStyles,buttonText,
}) => {
  return(
    <View style={styles.container}>

      {buttonText && <View style={styles.textContainer}>
        <TouchableOpacity testID={buttontestID} style={[styles.textButtonItem,{...buttonStyles}]} onPress={() => navigation.navigate(nextScreen)}>
          {textIconButton &&
          <View style={styles.textButtonicon}>
            <IconMaterialCommunityIcons name={textButtonIconDetails.iconName} size={textButtonIconDetails.iconSize} style={{padding: 0}} color={textButtonIconDetails.iconColor} />
          </View>
          }
          <Text style={[styles.textButtonText,{...buttonTextStyles}]}> {buttonText} </Text>
        </TouchableOpacity>
      </View>}  

      {iconButton && <View style={styles.iconContainer}>
        <TouchableOpacity testID={buttontestID} style={[styles.iconButtonItem,{...buttonStyles}]} onPress={() => navigation.navigate(nextScreen)}>
          <Icon name={iconButtonDetails.iconName} size={iconButtonDetails.iconSize} color={iconButtonDetails.iconColor} />
        </TouchableOpacity>
      </View>}  
            
    </View>
  );
};