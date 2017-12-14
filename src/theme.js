import { Platform } from 'react-native';

const platform = {
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android'
};

const colors = {
  primary: '#d35400',

  white: '#fff',
  concrete: '#f2f2f2',
  dove: '#6c6c6c'
};

const dimensions = {
  basePadding: 12
};

const fontSizes = {
  small: 14,
  normal: 16,
  large: 18
};

const lineHeights = {
  normal: platform.isAndroid ? 24 : 20,
  large: platform.isAndroid ? 26 : 22
};

export { colors, dimensions, fontSizes, lineHeights, platform };
