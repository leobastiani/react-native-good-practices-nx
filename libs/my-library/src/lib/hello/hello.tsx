/* eslint-disable jsx-a11y/accessible-emoji */
import { StyleSheet, Text } from 'react-native';

export function Hello() {
  return (
    <Text style={[styles.textXL, styles.appTitleText]} testID="heading">
      Welcome TodoAppMobile 👋
    </Text>
  );
}

const styles = StyleSheet.create({
  appTitleText: {
    paddingTop: 12,
    fontWeight: '500',
  },
  textXL: {
    fontSize: 48,
  },
});
