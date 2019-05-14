import React from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';
import {Button} from '../../../components/button/button.component';
import {GeneralForm} from '../../../components/general-form/general-form.component';
import {Form} from '../../../components/form/form.component';
import { styles } from './forget-password.style';
import {Logo} from '../../../components/logo/logo.component';


const ForgetPasswordComponent= ({navigation}) => {

  const backButtonStyles = {align:'center' };
  const backButtonTextStyles = {color: 'white', fontWeight: '600',fontSize:15};

  const resetLinkButtonStyles = {align:'center',backgroundColor: '#0071BF' };
  const resetLinkButtonTextStyles = {color: 'white', fontWeight: '600',fontSize:15};

  return (
    <View style={styles.container}>

      <View style={styles.back}>
        <Button 
          buttonStyles={backButtonStyles} 
          buttonTextStyles={backButtonTextStyles} 
          nextScreen="Login" 
          navigation={navigation}
          buttontestID=''
          iconName='md-arrow-back'
        />
      </View>
      

      <View style={styles.logo}>
        <Logo/>
      </View>

      <View style={styles.instructions}>
        <Text style={styles.instructionsBody}>Please enter your registered 
          email ID , so we can send a 
          password reset link</Text>
      </View>

      <View style={styles.form}>
        <Form>
          <GeneralForm name={false} mail={true} password={false}/>
        </Form>
      </View>

      <View style={styles.reset}>
        <Button 
          buttonStyles={resetLinkButtonStyles} 
          buttonTextStyles={resetLinkButtonTextStyles} 
          buttonText="SEND RESET LINK" 
          nextScreen="ConfirmPassword" 
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
export const ForgetPassword= connect(mapStateToProps)(ForgetPasswordComponent);

