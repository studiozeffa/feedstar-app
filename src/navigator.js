import { Constants } from 'expo';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ListScreen from './screens/ListScreen';
import { colors } from './theme';

export default StackNavigator(
  {
    List: { screen: ListScreen }
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
