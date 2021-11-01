import { StyleSheet } from 'react-native';
import { CONTAINER_WIDTH } from 'react-native-week-view/src/utils';

const circleSize = 9;
const lineWidth = 1.3;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 2,
    left:5,
    borderTopWidth: lineWidth,
    maxWidth:CONTAINER_WIDTH - 16
  },
  circle: {
    position: 'absolute',
    top: -(circleSize + lineWidth) / 2,
    left: 0,
 
  },
});

export default styles;
