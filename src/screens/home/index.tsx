import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import HighlightCard from '../../components/common/HighlightCard';
import {PrimaryButton} from '../../components/button';
import COLORS from '../../theme/colors';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {HAWAII_LANDING, HULA, SURFING, VOLCANOES} from '../../assets';
import TripGuideCard from '../../components/common/TripGuideCard';
import AlohaTitleText from '../../assets/svgs/AlohaTitleText';

const styles = StyleSheet.create({
  activityTitleTab: {
    fontFamily: 'IBMPlexMono-Regular',
    color: 'black',
  },
  tripGuideContainer: {
    gap: 8,
    padding: 16,
  },
  landingImageContainer: {
    backgroundColor: 'white',
  },
  mainSVContainer: {
    // gap: 16,
    paddingBottom: 100,
  },
  highlightView: {
    backgroundColor: 'white',
    paddingTop: 16,
  },
  activitiesView: {
    gap: 8,
    padding: 16,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  primaryButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
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
        contentContainerStyle={styles.mainSVContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.landingImageContainer}>
          <ImageBackground
            source={HAWAII_LANDING}
            style={styles.backgroundImage}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.hawaiiText}>To Hawaii</Text>
          </ImageBackground>
        </View>
        <View style={styles.highlightView}>
          <Text style={styles.highlightsTitle}>Highlights</Text>

          {/* 
            Why I did not use FlatList here ?
            - The HighlightItems are definite number of items
            - So It does not need to be virtualized
          */}
          <ScrollView
            horizontal
            contentContainerStyle={{gap: 16, padding: 16}}
            showsHorizontalScrollIndicator={false}>
            {[
              {
                key: 1,
                title: 'Surfing',
                description: 'Best Hawaiian island for surfing',
                image: SURFING,
              },
              {
                key: 2,
                title: 'Hula',
                description: 'Try it yourself',
                image: HULA,
              },
              {
                key: 2,
                title: 'Vulcanoes',
                description: 'Volcanic condition can change at any time.',
                image: VOLCANOES,
              },
            ].map(({key, title, description, image}, index) => {
              return (
                <HighlightCard
                  title={title}
                  description={description}
                  image={image}
                />
              );
            })}
          </ScrollView>

          <View style={styles.highlightsContainer}>
            <View style={styles.activitiesContainer}>
              <Text style={styles.activitiesTitle}>Categories</Text>
              <View style={styles.activitiesView}>
                {[
                  'Adventure',
                  'Culinary',
                  'Eco-tourism',
                  'Family',
                  'Sport',
                ].map(activity => {
                  return (
                    <TouchableOpacity
                      key={activity}
                      style={styles.activityButton}>
                      <Text style={styles.activityTitleTab}>{activity}</Text>
                      <Icon
                        name="arrow-forward"
                        size={24}
                        color={COLORS.primary}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            <View style={styles.activitiesContainer}>
              <Text style={styles.activitiesTitle}>Travel Guide</Text>
              <View style={styles.tripGuideContainer}>
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
