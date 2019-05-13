import React from 'react';
import {View} from 'react-native';
import {Input} from '../input';
import { styles } from './general-form.style';

export const GeneralForm = ({name , mail ,password}) => {
  return (
    <View style={styles.container}>
      {name && <Input
        placeHolderText="Full name"
        iconName='ios-mail'
      />
      }
      {name && <Input
        placeHolderText="Full name"
        iconName='ios-mail'
      />
      }

      {mail && <Input testIdValue="login-input"
        placeHolderText= "Email"
        iconName='ios-mail'
      />}

      {password && <Input testIdValue="password-input"
        placeHolderText="Password"
        iconName='ios-lock'
      />}


    </View>
        
  );
};

