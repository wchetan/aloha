import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import useDimensions from '../../hooks/useDimensions';
import COLORS from '../../theme/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const dummyImageUrl =
  'https://images.pexels.com/photos/4319778/pexels-photo-4319778.jpeg?auto=compress&cs=tinysrgb&w=600';

const styles = StyleSheet.create({
  cardDescription: {
    gap: 16,
    flex: 0.5,
  },
  cardContainer: {
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 160,
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  contentContainer: {
    flex: 0.5,
    padding: 16,
    gap: 16,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,

    color: COLORS.primary,
    fontFamily: 'IBMPlexMono-Bold',
  },
  description: {
    fontSize: 18,
    fontFamily: 'IBMPlexMono-Regular',
  },
  buttonContainer: {
    height: 48,
    width: 48,
    backgroundColor: COLORS.primarySurface,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.primary,
  },
});

const HighlightCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: number;
}) => {
  const {screenSize} = useDimensions();
  const eightyPercentWidth = screenSize.width * 0.8;
  return (
    <View style={[styles.cardContainer, {width: eightyPercentWidth}]}>
      <Image source={image} style={styles.image} />
      <View style={styles.contentContainer}>
        <View style={styles.cardDescription}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Icon name="arrow-forward" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HighlightCard;
