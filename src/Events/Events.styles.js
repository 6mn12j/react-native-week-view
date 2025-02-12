import { StyleSheet } from 'react-native';
import { CONTAINER_WIDTH, CONTENT_OFFSET } from '../utils';

const GREY_COLOR = '#ABABAB';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: CONTENT_OFFSET,
    width: CONTAINER_WIDTH +3,
    
  },
  timeRow: {
    flex: 0,
    
  },
  timeLabelLine: {
    height: 0.5,
    backgroundColor: GREY_COLOR,
    position: 'absolute',
    right: 0,
    left: 0,
  },
  event: {
    flex: 1,
    borderColor: GREY_COLOR,
    borderLeftWidth: 0.5,
  },
  events: {
    position: 'absolute',
    flexDirection: 'row',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'transparent',
    
  },
});

export default styles;
