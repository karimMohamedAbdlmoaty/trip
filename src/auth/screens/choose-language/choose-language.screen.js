import React from 'react';
import { View , Text ,FlatList } from 'react-native';
import { styles } from './choose-language.style';
import LinearGradient from 'react-native-linear-gradient';
import Turkey from '../../../assets/images/Turkey.svg';
import Logo from '../../../assets/images/Logo.svg';

export const ChooseLanguage= ({navigation}) => {
  const data = [1];

  return(
    <View style={styles.container}>
      <LinearGradient colors={['#00A8EA', '#2B3A90']} start={{ x: 1, y: 0 }} end={{ x: 0, y:1 }} style={styles.gradContainer}>
        
        <View style={styles.logo}>
          <View style={styles.logoCell}>
            <Logo style={styles.logoBody} />
          </View>

          <View style={styles.instructionsCell}>
            <Text style={styles.instructions}>Select your Language</Text>
          </View>
        </View>
        
        <View style={styles.flagsContainer}>
           
          <FlatList
            data={data}
            showsVerticalScrollIndicator={true}
            renderItem={({item}) => 
              <View style={styles.forHorizontalMargin}>

                <View style={styles.flagcell}>
                  <View style={styles.flagLayout}>
                    <Turkey style={styles.flagBody} />
                  </View>
                </View>
                
                <View style={styles.flagcell}>
                  <View style={styles.flagLayout}>
                    <Turkey style={styles.flagBody} />
                  </View>
                </View>
                
                <View style={styles.flagcell}>
                  <View style={styles.flagLayout}>
                    <Turkey style={styles.flagBody} />
                  </View>
                </View>

                <View style={styles.flagcell}>
                  <View style={styles.flagLayout}>
                    <Turkey style={styles.flagBody} />
                  </View>
                </View>

                <View style={styles.flagcell}>
                  <View style={styles.flagLayout}>
                    <Turkey style={styles.flagBody} />
                  </View>
                </View>

                <View style={styles.flagcell}>
                  <View style={styles.flagLayout}>
                    <Turkey style={styles.flagBody} />
                  </View>
                </View>

                <View style={styles.flagcell}>
                  <View style={styles.flagLayout}>
                    <Turkey style={styles.flagBody} />
                  </View>
                </View>

                <View style={styles.flagcell}>
                  <View style={styles.flagLayout}>
                    <Turkey style={styles.flagBody} />
                  </View>
                </View>

              </View> 

            }
          />



        </View>
    
      </LinearGradient>
    </View>
  );
};


