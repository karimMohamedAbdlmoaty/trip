import React, {Component} from 'react';
import { Text,View,Switch} from 'react-native';
import { styles } from './account.styles';
import { Button } from '../../../components/button/button.component';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


export class Account extends Component {
  render() {
    const authOptionsButtonStyles = {align:'center',backgroundColor: '#0071BF',marginLeft: 31 ,marginRight: 31 };
    const authOptionsTextStyles = {color: 'white', fontWeight: '600',fontSize:15};
    return (
      <View style={styles.container}>
        <View style={styles.forHorizontalMargin}>
         
          <View style={styles.auth}>
            <Button 
              buttonStyles={authOptionsButtonStyles} 
              // buttonTextStyles={authOptionsTextStyles} 
              buttonText="Log in or Sign up" 
              nextScreen="AuthOptions" 
              navigation={this.props.navigation}
              buttontestID=''
            />
          </View>
          
          <View style={styles.options}>
            <View style={styles.forVerticalMargin}>
          
              <View style={styles.cell}>

                <View style={styles.cellIcon}>
                  <Icon name='ios-notifications' size={25} color='#666666' />
                </View>
                <View style={styles.notifications}>
                  <Text style={styles.cellTextBody}>Send me notifications</Text>
                </View>
                <View style={styles.toggleButton}>
                  <Switch style={styles.toggleButtonBody} />
                </View>

              </View>
              
              <View style={styles.cell}>
                <View style={styles.cellIcon}>
                  <FontAwesomeIcon name='diamond' size={15} color='#666666' />
                </View>
                <View style={styles.cellText}>
                  <Text style={styles.cellTextBody}>Earn Rewoards</Text>
                </View>

              </View>
              
              <View style={styles.cell}>
                <View style={styles.cellIcon}>
                  <FontAwesomeIcon name='gift' size={18} color='#666666' />
                </View>
                <View style={styles.cellText}>
                  <Text style={styles.cellTextBody}>Promotion</Text>
                </View>

              </View>
              
              <View style={styles.cell}>
                <View style={styles.cellIcon}>
                  <FontAwesomeIcon name='gift' size={18} color='#666666' />
                </View>
                <View style={styles.cellText}>
                  <Text style={styles.cellTextBody}>Groups</Text>
                </View>
              </View>

            </View>
          </View>
          






          <View style={styles.settings}>
            <View style={styles.forVerticalMargin}>


              <View style={styles.cell}>
                <View style={styles.cellIcon}>
                  <FontAwesomeIcon name='globe' size={18} color='#666666' />
                </View>
                <View style={styles.cellText}>
                  <Text style={styles.cellTextBody}>Currency/Language</Text>
                </View>
              </View>

              <View style={styles.cell}>
                <View style={styles.cellIcon}>
                  <Icon name='ios-help-circle' size={19} color='#666666' />
                </View>
                <View style={styles.cellText}>
                  <Text style={styles.cellTextBody}>Help center</Text>
                </View>
              </View>

              <View style={styles.cell}>
                <View style={styles.cellIcon}>
                  <Icon name='ios-help-circle' size={19} color='#666666' />
                </View>
                <View style={styles.cellText}>
                  <Text style={styles.cellTextBody}>About Tripasus </Text>
                </View>
              </View>

              <View style={styles.clear}></View>

            </View>
          </View>



        </View>
        
      </View>
    );
  }
}
