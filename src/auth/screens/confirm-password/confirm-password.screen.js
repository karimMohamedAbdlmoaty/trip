import React from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';
import {Button} from '../../../components/button/button.component';
import {GeneralForm} from '../../../components/general-form/general-form.component';
import {Form} from '../../../components/form/form.component';
import { styles } from './confirm-password.style';
import {Logo} from '../../../components/logo/logo.component';


const ConfirmPasswordComponent = ({navigation}) => {

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
        <Text style={styles.instructionsBody}>Email sent, Please check your email</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.instructions}>
          <Text style={styles.instructionsBody}>Enter pass code</Text>
        </View>

        <Form>
          <GeneralForm password/>
        </Form>
      </View>

      <View style={styles.reset}>
        <Button 
          buttonStyles={resetLinkButtonStyles} 
          buttonTextStyles={resetLinkButtonTextStyles} 
          buttonText="SEND" 
          nextScreen="ResetPassword" 
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
export const ConfirmPassword= connect(mapStateToProps)(ConfirmPasswordComponent);

