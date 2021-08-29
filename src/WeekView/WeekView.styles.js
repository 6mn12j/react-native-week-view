import { StyleSheet } from 'react-native';
import { CONTAINER_WIDTH } from '../utils';

const BACKGROUND_COLOR='#ECF5F471'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft:20,
    paddingRight:20,
    backgroundColor:BACKGROUND_COLOR
  },
  scrollViewContent: {
    flexDirection: 'row',
  },
  headerContainer: {
    flexDirection: 'row',
  },
  header: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: CONTAINER_WIDTH,
  },
});

export default styles;
