import { StyleSheet } from 'react-native';

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
    width: 25,
    height: 25,
    borderRadius: 50,
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  iconFail:{
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: '#C3C3C3',
    width: 25,
    height: 25,
    borderRadius: 50,
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default styles;
