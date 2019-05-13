import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width:335,
    marginRight:20,
    marginLeft:20,
    marginTop: 10,
    borderColor: 'gray', 
    // borderTopWidth: 1,
    // borderRightWidth: 1,
    // borderLeftWidth: 1,
    // borderBottomWidth: 1,
    height: 60,
  },
  field:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor: 'brown'

  },
  fieldInput:{
    flex:2,
    flexDirection:'row',
    width:500,
    // backgroundColor: 'red'
  },
  fieldInputIcon:{
    flex:1,
    height: 50,
    justifyContent:'center',
    // alignItems:'center',
    borderWidth: 0, 
    paddingLeft: 0,
    // backgroundColor: 'blue'
  },
  fieldInputBody:{
    flex:6,
    height: 50,
    borderWidth: 0, 
    // backgroundColor: 'red',
    marginRight:0
  },
});
      
  
  
  
    
