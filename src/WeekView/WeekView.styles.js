import { StyleSheet } from 'react-native';
import {  CONTAINER_WIDTH ,SCREEN_HEIGHT} from '../utils';

const BACKGROUND_COLOR='#ECF5F471'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:BACKGROUND_COLOR,
   paddingHorizontal:CONTAINER_WIDTH*0.12,

  
  },
  scrollViewContent: {
    flexDirection: 'row',
    marginLeft:-12,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  header: {
    flex: 1,
    width: CONTAINER_WIDTH,
    height: SCREEN_HEIGHT > 668 ? 100 : 80,
    justifyContent: 'center',
    alignItems: 'center',
 
  },
});

export default styles;
