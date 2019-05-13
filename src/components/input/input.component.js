import React from 'react';
import { View,TextInput} from 'react-native';
import {styles} from './input.style';
import Icon from 'react-native-vector-icons/Ionicons';

export const Input =({iconName, placeHolderText ,testIdValue }) => {
  return(
    <View style={[styles.container]}>
      <View style={styles.field}>
        {/* <View style={styles.fieldLabel}>
          <Text> {label}</Text>
        </View> */}
        <View style={styles.fieldInput}>

          <View style={styles.fieldInputIcon}>
            <Icon name={iconName} size={25} color="#3B3838" />
          </View>

          <TextInput testID={testIdValue} style={styles.fieldInputBody} placeholder = {placeHolderText} />

        </View>
      </View>
    </View>
  );
};


