import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Outlined from '../button/Outlined';
import {CONTACT_AVATAR} from '../../assets';

const styles = StyleSheet.create({
  guideCardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  guideCardPersonInfo: {
    gap: 16,
  },
  guideCardPersonImage: {
    height: 100,
    width: 100,
    borderRadius: 64,
  },
  guideCardPersonDate: {
    fontFamily: 'IBMPlexMono-Regular',
    fontSize: 18,
    color: 'black',
  },
  guideCardPersonName: {
    fontFamily: 'IBMPlexMono-Bold',
    fontSize: 24,
    color: 'black',
  },
  guideCardView: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    gap: 16,
  },
  guideCardContactButton: {
    alignSelf: 'flex-start',
  },
});

const TripGuideCard = () => {
  return (
    <TouchableOpacity style={styles.guideCardView}>
      <View style={styles.guideCardInfo}>
        <View style={styles.guideCardPersonInfo}>
          <Text style={styles.guideCardPersonName}>Hadwin Malone</Text>
          <Text style={styles.guideCardPersonDate}>Guide Since 2012</Text>
        </View>
        <Image source={CONTACT_AVATAR} style={styles.guideCardPersonImage} />
      </View>
      <Outlined style={styles.guideCardContactButton}>Contact</Outlined>
    </TouchableOpacity>
  );
};

export default TripGuideCard;
