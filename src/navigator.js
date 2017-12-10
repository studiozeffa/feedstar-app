import { Constants } from 'expo';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';
import { colors } from './theme';

export default StackNavigator(
  {
    List: { screen: ListScreen },
    Detail: { screen: DetailScreen }
  },
  {
    cardStyle: {
      backgroundColor: colors.white
    },
    navigationOptions: {
      headerStyle: {
        // Nudge the header down on Android.
        ...Platform.select({
          android: {
            paddingTop: Constants.statusBarHeight,
            height: Constants.statusBarHeight + 56
          }
        })
      }
    }
  }
);
