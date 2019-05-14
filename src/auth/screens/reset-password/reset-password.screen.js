import React from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';
import {Button} from '../../../components/button/button.component';
import {GeneralForm} from '../../../components/general-form/general-form.component';
import {Form} from '../../../components/form/form.component';
import { styles } from './reset-password.style';
import {Logo} from '../../../components/logo/logo.component';


const ResetPasswordComponent = ({navigation}) => {

  const backButtonStyles = {align:'center' };
  const backButtonTextStyles = {color: 'white', fontWeight: '600',fontSize:15};

  const resetLinkButtonStyles = {align:'center',backgroundColor: '#0071BF' };
  const resetLinkButtonTextStyles = {color: 'white', fontWeight: '600',fontSize:13};

  const newPassword = {placeHolderText:'New Password',iconName: 'md-lock' };
  const confirmNewPassword = {placeHolderText:'Confirm New Password',iconName: 'md-lock' };

  return (
    <View style={styles.container}>

      <View style={styles.back}>
        <Button 
          buttonStyles={backButtonStyles} 
          buttonTextStyles={backButtonTextStyles} 
          nextScreen="ForgetPassword" 
          navigation={navigation}
          buttontestID=''
          iconName='md-arrow-back'
        />
      </View>
      

      <View style={styles.logo}>
        <Logo/>
      </View>

      <View style={styles.instructions}>
        <Text style={styles.instructionsBody}>Please enter your new password</Text>
      </View>

      <View style={styles.form}>
        <Form>
          <GeneralForm generalParts={newPassword} general/>
          <GeneralForm generalParts={confirmNewPassword} general/>
        </Form>
      </View>
       
      <View style={styles.reset}>
        <Button 
          buttonStyles={resetLinkButtonStyles} 
          buttonTextStyles={resetLinkButtonTextStyles} 
          buttonText="RESET NEW PASSWORD" 
          nextScreen="Home" 
          navigation={navigation}
          buttontestID=''
        />
      </View>
      
    </View>
  );
};
const mapStateToProps = state => ({
  userName: state.auth.name
});
export const ResetPassword= connect(mapStateToProps)(ResetPasswordComponent);

