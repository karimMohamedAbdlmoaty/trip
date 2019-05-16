import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    
  },
  forHorizontalMargin:{
    flex:1,
    marginRight: 20,
    marginLeft:20,
  },

  auth:{
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'


  },
  options:{
    flex: 2,
    backgroundColor: 'yellow',
    borderBottomWidth: 1,
    borderTopWidth: 1

  },
  optionsCell:{
    flex: 1,
    justifyContent: 'center',
    borderBottomWidth: 1,
    flexDirection: 'row'

  },
  optionsCellIcon:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  optionsCellText:{
    flex: 6,
    justifyContent: 'center',

  },
  settings:{
    flex: 3,
    backgroundColor: 'brown'

  },
});
    