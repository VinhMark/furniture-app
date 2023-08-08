import { StyleSheet } from 'react-native';
import { SIZES } from '../../../constants';

const styles = StyleSheet.create({
  headingContainer: {
    marginTop: SIZES.medium,
    marginHorizontal: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'semibold',
    fontSize: SIZES.xLarge - 2,
  },
});

export default styles;
