import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import React from 'react';
import COLORS from '../../theme/colors';

const Outlined = ({children, ...rest}: TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        {
          padding: 16,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 2,
          backgroundColor: 'white',
          borderColor: COLORS.primary,
          borderRadius: 8,
        },
        rest.style,
      ]}>
      <Text
        style={{
          color: COLORS.primary,
          fontSize: 16,
          fontWeight: '700',
          letterSpacing: 0.125,
          fontFamily: 'IBMPlexMono-Bold',
        }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Outlined;
