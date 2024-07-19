import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';
import React from 'react';
import COLORS from '../../theme/colors';

const Outlined = ({children, ...rest}: TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.outlineContainer, rest.style]}>
      <Text style={styles.outlineButtonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Outlined;

const styles = StyleSheet.create({
  outlineButtonText: {
    color: COLORS.primary,
    fontSize: 16,
    letterSpacing: 0.125,
    fontFamily: 'IBMPlexMono-Bold',
  },
  outlineContainer: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: 'white',
    borderColor: COLORS.primary,
    borderRadius: 8,
  },
});
