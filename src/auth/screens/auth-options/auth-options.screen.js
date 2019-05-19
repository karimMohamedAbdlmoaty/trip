import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import {connect} from 'react-redux';
import {Button} from '../../../components/button/button.component';
import { styles } from './auth-options.style';

const AuthOptionsComponent= ({navigation}) => {
  const closeIconDetails = {iconName: 'ios-close',iconColor: 'white', iconSize:45};

  const faceButtonStyles = {align:'center',backgroundColor: '#3A5998' };
  const faceButtonTextStyles = {color: 'white', fontWeight: '600',fontSize:15};
  const faceButtonIconDetails = {iconName: 'facebook-box', iconColor: 'white',iconSize:35};

  const gmailButtonStyles = {align:'center',backgroundColor: '#F44237' };
  const gmailButtonIconDetails = {iconName: 'gmail', iconColor: 'white',iconSize:35};

  const mailAuthButtonStyles = {align:'center',backgroundColor: '#00AEEE'};
  const mailAuthButtonTextStyles = {color: 'white', fontWeight: '800',fontSize:16};

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/images/Marsa-Alam-2.png')} style={styles.backgroundImage}>   
        <View style={styles.forHorizontalMargin}>
  
          <View style={styles.back}>
            <Button 
              nextScreen="Account" 
              navigation={navigation}
              buttontestID=''
              iconButtonDetails={closeIconDetails}
              iconButton
            />
          </View>
          
          <View style={styles.logo}>
          </View>

          <View style={styles.LoginWithFace}>
            <Button 
              buttonStyles={faceButtonStyles} 
              buttonTextStyles={faceButtonTextStyles} 
              buttonText="Log in with Facebook" 
              nextScreen="" 
              navigation={navigation}
              buttontestID=''
              textButtonIconDetails={faceButtonIconDetails}
              textIconButton
            />
          </View>

          <View style={styles.LoginWithGmail}>
            <Button 
              buttonStyles={gmailButtonStyles} 
              buttonTextStyles={faceButtonTextStyles} 
              buttonText="Log in with Gmail" 
              nextScreen="" 
              navigation={navigation}
              buttontestID=''
              textButtonIconDetails={gmailButtonIconDetails}
              textIconButton
            />
          </View>

          
          <View style={styles.instructions}>
            <Text style={styles.instructionsBody}>Or you can log in or sign up by email</Text>
          </View>

          <View style={styles.authWithMail}>

            <View style={styles.loginWithMail}>
              <Button 
                buttonStyles={mailAuthButtonStyles} 
                buttonTextStyles={mailAuthButtonTextStyles} 
                buttonText="Log in" 
                nextScreen="" 
                navigation={navigation}
                buttontestID=''
              />
            </View>

            <View style={styles.registerWithMail}>
              <Button 
                buttonStyles={mailAuthButtonStyles} 
                buttonTextStyles={mailAuthButtonTextStyles} 
                buttonText="Sign up" 
                nextScreen="" 
                navigation={navigation}
                buttontestID=''
              />
            </View>

          </View>

        </View>
      </ImageBackground>
    </View>
  );
};
const mapStateToProps = state => ({
  userName: state.auth.name
});
export const AuthOptions= connect(mapStateToProps)(AuthOptionsComponent);

