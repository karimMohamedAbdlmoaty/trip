import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue'
  },
  gradContainer:{
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    flex: 8,
    // backgroundColor: 'green',
    justifyContent: 'flex-end'
  },
  logoCell:{
    flex: 8,
    // backgroundColor: 'yellow',
    alignItems:'center',
    justifyContent: 'flex-end'

  },
  logoBody:{
    width:40,
    height:40,
  },
  instructionsCell:{
    flex: 3,
    alignItems:'center',
    justifyContent: 'center',
    // backgroundColor: 'brown',
  },
  instructions:{
    alignItems:'center',
    justifyContent: 'center',

    color:'#EFECEC',
    fontSize: 13,
    fontWeight: '900',
    // backgroundColor: 'blue',
  },
  flagsContainer:{
    flex: 17,
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignSelf: 'stretch'
  },
  forHorizontalMargin:{
    flex:1,
    marginRight: 20,
    marginLeft:20,

    // backgroundColor: 'green',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',

  },
  flagcell:{
    width: 95,
    height: 95,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
    // borderTopWidth: 10,
    // borderBottomWidth: 10,
    // borderRightWidth: 10,
    // borderLeftWidth: 10,
  },
  flagLayout:{
    width:70,
    height:70,

    borderBottomWidth: 15,
    borderTopWidth: 15,
    borderRightWidth: 15,
    borderLeftWidth: 15,

    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,

    borderColor: '#59A2D6'
  },
  flagBody:{
    // backgroundColor: 'blue',
    width:40,
    height:40,
  }
});
