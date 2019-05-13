import React, {Component} from 'react';
import { View } from 'react-native';
import {connect} from 'react-redux';
import {Button} from '../../../components/button/button.component';
import {GeneralForm} from '../../../components/general-form/general-form.component';
import {Form} from '../../../components/form/form.component';
import { styles } from './login.style';
import {Logo} from '../../../components/logo/logo.component';


class LoginComponent extends Component {
  render() {

    const loginButtonStyles = {align:'center',backgroundColor: '#0071BF' };
    const loginButtonTextStyles = {color: 'white', fontWeight: '600',fontSize:15};

    const forgetButtonStyles = {align:'center',backgroundColor: 'white' };
    const forgetButtonTextStyles = {color: '#0071BF', fontWeight: '600',fontSize:15};

    const registerButtonStyles = {align:'center',backgroundColor: 'white' };
    const registerButtonTextStyles = {color: '#0071BF', fontWeight: '600',fontSize:15};

    return (
      <View style={styles.container}>

        <View style={styles.logo}>
          <Logo/>
        </View>

        <View style={styles.form}>
          <Form>
            <GeneralForm name={false} mail={true} password={true}/>
          </Form>
        </View>

        <View style={styles.login}>
          <Button 
            buttonStyles={loginButtonStyles} 
            buttonTextStyles={loginButtonTextStyles} 
            buttonText="LOGIN" 
            nextScreen="Home" 
            navigation={this.props.navigation}
            buttontestID='log-in'
          />
        </View>

        <View style={styles.forget}>
          <Button 
            buttonStyles={forgetButtonStyles} 
            buttonTextStyles={forgetButtonTextStyles} 
            buttonText="FORGET YOUR PASSWORD?" 
            nextScreen="ForgetPassword" 
            navigation={this.props.navigation}
          />
        </View>

        <View style={styles.register}>
          <Button 
            buttonStyles={registerButtonStyles} 
            buttonTextStyles={registerButtonTextStyles} 
            buttonText="Register Now" 
            nextScreen="" 
            navigation={this.props.navigation}
            buttontestID='log-in'
          />
        </View>
        
      </View>
    );
  }
}
const mapStateToProps = state => ({
  userName: state.auth.name
});
export const Login= connect(mapStateToProps)(LoginComponent);

