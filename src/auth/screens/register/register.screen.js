import React, {Component} from 'react';
import { View } from 'react-native';
import {connect} from 'react-redux';
import {Button} from '../../../components/button/button.component';
import {GeneralForm} from '../../../components/general-form/general-form.component';
import {Form} from '../../../components/form/form.component';
import { styles } from './register.style';
import {Logo} from '../../../components/logo/logo.component';


class RegisterComponent extends Component {
  render() {

    const createButtonStyles = {align:'center',backgroundColor: '#0071BF' };
    const createButtonTextStyles = {color: 'white', fontWeight: '600',fontSize:15};

    const loginButtonStyles = {align:'center',backgroundColor: 'white' };
    const loginButtonTextStyles = {color: '#0071BF', fontWeight: '600',fontSize:15};

    return (
      <View style={styles.container}>

        <View style={styles.logo}>
          <Logo/>
        </View>

        <View style={styles.form}>
          <Form>
            <GeneralForm name={true} mail={true} password={true}/>
          </Form>
        </View>

        <View style={styles.create}>
          <Button 
            buttonStyles={createButtonStyles} 
            buttonTextStyles={createButtonTextStyles} 
            buttonText="CREATE" 
            nextScreen="Home" 
            navigation={this.props.navigation}
            buttontestID=''
          />
        </View>

        <View style={styles.haveAccount}>
          <Button 
            buttonStyles={loginButtonStyles} 
            buttonTextStyles={loginButtonTextStyles} 
            buttonText="I already have an account" 
            nextScreen="Login" 
            navigation={this.props.navigation}
            buttontestID=''
          />
        </View>
        
      </View>
    );
  }
}
const mapStateToProps = state => ({
  userName: state.auth.name
});
export const Register= connect(mapStateToProps)(RegisterComponent);

