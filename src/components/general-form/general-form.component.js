import React from 'react';
import {View} from 'react-native';
import {Input} from '../input';
import { styles } from './general-form.style';

export const GeneralForm = ({name , mail ,password , general , generalParts}) => {
  return (
    <View style={styles.container}>
      {name && <Input
        placeHolderText="First Name"
        iconName='ios-mail'
      />
      }
      {name && <Input
        placeHolderText="Last Name"
        iconName='ios-mail'
      />
      }

      {mail && <Input testIdValue="login-input"
        placeHolderText= "Email"
        iconName='ios-mail'
      />}

      {password && <Input testIdValue="password-input"
        placeHolderText="Password"
        iconName='md-lock'
      />}

      {general && <Input testIdValue="password-input"
        placeHolderText={generalParts.placeHolderText}
        iconName={generalParts.iconName}
      />}

    </View>
        
  );
};

