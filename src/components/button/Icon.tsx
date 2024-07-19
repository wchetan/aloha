import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import React from 'react';
import COLORS from '../../theme/colors';

const Icon = ({children}: TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
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
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 16,
          fontWeight: '700',
          letterSpacing: 0.125,
        }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Icon;