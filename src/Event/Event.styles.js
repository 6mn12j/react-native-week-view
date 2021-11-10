import { StyleSheet } from 'react-native';
import  { CONTAINER_HEIGHT } from '../utils'
const styles = StyleSheet.create({
  item: {
   // alignItems: 'center',
   alignItems:'flex-start',
   paddingVertical:2,
   paddingHorizontal:10,
   position: 'absolute',
   borderRadius: 5,
   flex: 1,
   overflow: 'hidden',
  },
  description: {
    marginVertical: 8,
    marginHorizontal: 2,
    color: '#fff',
    textAlign: 'center',
    fontSize: 10,
  },
  iconCheck:{
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: '#54BCB6',
    width: CONTAINER_HEIGHT > 508 ? 21 : 18,
    height: CONTAINER_HEIGHT > 508 ? 21 : 18,
    borderRadius: 50,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
    
  }, 
  iconFail:{
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: '#C3C3C3',
    width: CONTAINER_HEIGHT > 508 ? 21 : 18,
    height: CONTAINER_HEIGHT > 508 ? 21 : 18,
    borderRadius: 50,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
   
  }
});

export default styles;
