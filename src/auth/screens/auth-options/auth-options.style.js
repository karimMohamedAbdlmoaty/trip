import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover',
  },
  forHorizontalMargin:{
    flex:1,
    marginRight: 20,
    marginLeft:20,
  },

  back:{
    flex: 1,
    marginTop: 20
  },
  logo:{
    flex: 5,
  },
  LoginWithFace:{
    // flex: 1,
    // backgroundColor: 'blue',
    height:60,
    justifyContent:'center',
    alignItems:'center',


  },
  LoginWithGmail:{
    // flex: 1,
    // backgroundColor: 'yellow',
    height:60,
    justifyContent:'center',
    alignItems:'center',


  },
  instructions:{
    flex: 1,
    // backgroundColor: 'green',
    // marginTop: 20,
    justifyContent:'center',
    alignItems:'center',

  },
  instructionsBody:{
    color:'#000011',
    fontSize: 15,
    // height:50,
    // marginRight:20,
    // marginLeft:20,
    // marginTop:20,
    // textAlign: 'center'
  },
  authWithMail:{
    flex: 2,
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  loginWithMail:{
    flex: 1,
    // backgroundColor: 'brown',
    paddingLeft:0,
    paddingRight:10,
  },
  registerWithMail:{
    flex: 1,
    // backgroundColor: 'grey',
    paddingLeft:10,
    paddingRight:0,

  },
});


