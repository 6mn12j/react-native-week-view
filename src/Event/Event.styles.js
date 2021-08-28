import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
   // alignItems: 'center',
   alignItems:'flex-start',
   paddingVertical:2,
   paddingHorizontal:10,
    position: 'absolute',
    borderRadius: 0,
    flex: 1,
    overflow: 'hidden',
  },
  description: {
    marginVertical: 8,
    marginHorizontal: 2,
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
  },
});

export default styles;
