import {Dimensions, StatusBar, Platform} from 'react-native';

const statusBarHeight = StatusBar.currentHeight;
const tabHeight = Platform.OS === 'ios' ? 49 : 29;

const screenSize = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('window').height - statusBarHeight,
  tabHeight,
  statusBarHeight,
};

export default screenSize;
