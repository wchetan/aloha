import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import {PrimaryButton} from '../../components/button';
import COLORS from '../../theme/colors';

import {SURFING, HONOLULU, MAUI, KAUAI} from '../../assets';
import TripGuideCard from '../../components/common/TripGuideCard';
import AlohaTitleText from '../../assets/svgs/AlohaTitleText';

const styles = StyleSheet.create({
  tripCardContainer: {
    gap: 8,
    padding: 16,
  },
  textBodyDescription: {
    fontFamily: 'IBMPlexMono-Regular',
    fontSize: 14,
    color: 'black',
  },
  primaryButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },

  topSpotCardImage: {
    width: 160,
    height: '100%',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  topSpotCardTitle: {
    fontFamily: 'IBMPlexMono-Bold',
    marginLeft: 16,
    color: COLORS.primary,
  },
  topSpotCardView: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height: 70,
    elevation: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  topSpotSVContentContainer: {
    gap: 16,
    padding: 16,
  },
  topSpotsContainer: {
    backgroundColor: 'white',
    paddingTop: 16,
  },
  textBody: {
    padding: 16,
    backgroundColor: 'white',
  },
  svContentContainerStyle: {
    paddingBottom: 60,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    gap: 16,
  },
  titleContainer: {
    alignItems: 'center',
  },

  backgroundImage: {
    height: 450,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  welcomeText: {
    fontSize: 46,
    textAlign: 'center',

    color: 'rgba(255, 255, 255, 0.6)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    textShadowColor: 'black',
    fontFamily: 'IBMPlexMono-Bold',
  },
  hawaiiText: {
    fontSize: 46,
    textAlign: 'center',

    color: 'rgba(255, 255, 255, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    textShadowColor: 'black',
    fontFamily: 'IBMPlexMono-Bold',
  },
  highlightsContainer: {
    backgroundColor: COLORS.primarySurface,
  },
  highlightsTitle: {
    fontSize: 18,
    paddingHorizontal: 16,
    fontFamily: 'IBMPlexMono-Bold',
    color: 'black',
  },
  activitiesContainer: {
    paddingTop: 16,
  },
  activitiesTitle: {
    fontSize: 18,
    paddingHorizontal: 16,
    fontFamily: 'IBMPlexMono-Bold',
    color: 'black',
  },
  activityButton: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    height: 60,
    justifyContent: 'center',
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <AlohaTitleText />
      </View>
      <ScrollView
        style={{backgroundColor: COLORS.primarySurface}}
        contentContainerStyle={styles.svContentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: 'white'}}>
          <ImageBackground source={SURFING} style={styles.backgroundImage}>
            <Text style={styles.welcomeText}>Surfing</Text>
          </ImageBackground>
        </View>
        <View style={styles.textBody}>
          <Text style={styles.textBodyDescription}>
            Hawaii is the capital of modern surfing. This group of Pacific
            islands gets swell from all directions, so there are plenty of
            pristine surf spots for all.
          </Text>
        </View>
        <View style={styles.topSpotsContainer}>
          <Text style={styles.highlightsTitle}>Top Spots</Text>

          <ScrollView
            contentContainerStyle={styles.topSpotSVContentContainer}
            showsHorizontalScrollIndicator={false}>
            {[
              {
                key: 1,
                title: 'Maui',

                image: MAUI,
              },
              {
                key: 2,
                title: 'Kauai',

                image: KAUAI,
              },
              {
                key: 3,
                title: 'Honolulu',

                image: HONOLULU,
              },
            ].map(({key, title, image}, index) => {
              return (
                <TouchableOpacity key={key} style={styles.topSpotCardView}>
                  <Text style={styles.topSpotCardTitle}>{`${
                    index + 1
                  }. ${title}`}</Text>
                  <Image source={image} style={styles.topSpotCardImage} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <View style={styles.highlightsContainer}>
            <View style={styles.activitiesContainer}>
              <Text style={styles.activitiesTitle}>Travel Guide</Text>
              <View style={styles.tripCardContainer}>
                <TripGuideCard />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.primaryButton}>
        <PrimaryButton>Book a trip</PrimaryButton>
      </View>
    </View>
  );
};

export default Home;
