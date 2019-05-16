import React, {Component} from 'react';
import { Text,View} from 'react-native';
import { styles } from './account.styles';
import { Button } from '../../../components/button/button.component';
import Icon from 'react-native-vector-icons/Ionicons';


export class Account extends Component {
  render() {
    const authOptionsButtonStyles = {align:'center',backgroundColor: '#0071BF' };
    const authOptionsTextStyles = {color: 'white', fontWeight: '600',fontSize:15};
    return (
      <View style={styles.container}>
        <View style={styles.forHorizontalMargin}>
         
          <View style={styles.auth}>
            <Button 
              buttonStyles={authOptionsButtonStyles} 
              buttonTextStyles={authOptionsTextStyles} 
              buttonText="Log in or Sign up" 
              nextScreen="AuthOptions" 
              navigation={this.props.navigation}
              buttontestID=''
            />
          </View>
          
          <View style={styles.options}>
            <View style={styles.optionsCell}>

              <View style={styles.optionsCellIcon}>
                <Icon name='ios-notifications' size={25} />
              </View>

              <View style={styles.optionsCellText}>
                <Text style={styles.notificationsText}>Send me notifications</Text>
              </View>

            </View>
            
            <View style={styles.optionsCell}>
              <View style={styles.optionsCellIcon}>
                <Icon name='ios-notifications' size={25} />
              </View>

              <View style={styles.optionsCellText}>
                <Text style={styles.notificationsText}>Earn Rewoards</Text>
              </View>

            </View>
            
            <View style={styles.optionsCell}>
              <View style={styles.optionsCellIcon}>
                <Icon name='ios-notifications' size={25} />
              </View>

              <View style={styles.optionsCellText}>
                <Text style={styles.notificationsText}>Promotion</Text>
              </View>

            </View>
            
            <View style={styles.optionsCell}>
              <View style={styles.optionsCellIcon}>
                <Icon name='ios-notifications' size={25} />
              </View>

              <View style={styles.optionsCellText}>
                <Text style={styles.notificationsText}>Groups</Text>
              </View>

            </View>
            
          </View>
          
          <View style={styles.settings}>
          </View>
        </View>
        
      </View>
    );
  }
}
