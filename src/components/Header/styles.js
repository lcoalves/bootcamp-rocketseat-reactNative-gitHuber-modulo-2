import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 34 + getStatusBarHeight(),
    justifyContent: 'space-between',
    paddingHorizontal: metrics.basePadding,
    paddingTop: getStatusBarHeight() - 34,
  },

  title: {
    color: colors.darker,
    fontSize: 16,
    fontWeight: 'bold',
  },

  // eslint-disable-next-line react-native/sort-styles
  icon: {
    color: colors.darker,
  },
});

export default styles;
