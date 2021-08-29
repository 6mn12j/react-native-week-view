import { StyleSheet } from 'react-native';

const DARKGRAY_COLOR='#5E5E5E'
const styles = StyleSheet.create({
  columnContainer: {
    paddingTop: 10,
    width: 60,
  },
  label: {
    flex: -1,
  },
  text: {
    fontSize: 12,
    color:DARKGRAY_COLOR,
    textAlign: 'center',
  },
});

export default styles;
