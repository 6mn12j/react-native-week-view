import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT } from '../../../../src/components/screen/Home';
import { CONTAINER_WIDTH } from '../utils';

const BACKGROUND_COLOR='#ECF5F471'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:BACKGROUND_COLOR,
    paddingHorizontal:30
  },
  scrollViewContent: {
    flexDirection: 'row',
  },
  headerContainer: {
    flexDirection: 'row',
  },
  header: {
    flex: 1,
    height: SCREEN_HEIGHT > 668 ? 50 : 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: CONTAINER_WIDTH,
  },
});

export default styles;
