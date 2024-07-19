import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';
import React from 'react';
import COLORS from '../../theme/colors';

const styles = StyleSheet.create({
  button: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.86)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    letterSpacing: 0.125,
  },
});

const Icon = ({children}: TouchableOpacityProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Icon;
