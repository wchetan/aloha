import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';
import React from 'react';
import COLORS from '../../theme/colors';

const Primary = ({children}: TouchableOpacityProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.primaryContainer}>
      <Text style={styles.primaryButtonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Primary;

const styles = StyleSheet.create({
  primaryButtonText: {
    color: 'white',
    fontSize: 16,
    letterSpacing: 0.125,
    fontFamily: 'IBMPlexMono-Bold',
  },
  primaryContainer: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    shadowColor: 'rgba(0, 0, 0,0.86)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 6,
  },
});
