import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    
  },
  forHorizontalMargin:{
    flex:1,
    marginRight: 20,
    marginLeft:20,
  },

  auth:{
    flex: 2,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },
  options:{
    flex: 4,
    // backgroundColor: 'yellow',
    borderBottomWidth: .5,
    borderTopWidth: .5
  },
  forVerticalMargin:{
    flex: 1,
    marginTop: 15,
    marginBottom: 15
  },
  cell:{
    flex: 1,
    justifyContent: 'center',
    // borderBottomWidth: 1,
    flexDirection: 'row'

  },
  cellIcon:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  cellText:{
    flex: 6,
    justifyContent: 'center',
  },
  cellTextBody:{
    color: '#2A78E4',
    textDecorationLine: 'underline'

  },
  notifications:{
    flex: 4,
    justifyContent: 'center',
  },
  toggleButton:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    // backgroundColor: 'brown',
  },
  toggleButtonBody:{
    backgroundColor: '#2A78E4',
    borderRadius: 17,
  },
  settings:{
    flex: 7,
    // backgroundColor: 'brown'
  },
  clear:{
    flex: 4,
  }
});
    