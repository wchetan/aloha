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
import HighlightCard from '../../components/common/HighlightCard';
import {PrimaryButton} from '../../components/button';
import COLORS from '../../theme/colors';
import Outlined from '../../components/button/Outlined';

const SURFING_HAWAII_URL =
  'https://images.pexels.com/photos/4319778/pexels-photo-4319778.jpeg?auto=compress&cs=tinysrgb&w=600';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    gap: 16,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontStyle: 'italic',
    fontFamily: 'IBMPlexMono-Bold',
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
  },
  activitiesContainer: {
    paddingTop: 16,
  },
  activitiesTitle: {
    fontSize: 18,
    paddingHorizontal: 16,
    fontFamily: 'IBMPlexMono-Bold',
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
        <Text style={styles.title}>Aloha</Text>
      </View>
      <ScrollView
        style={{backgroundColor: COLORS.primarySurface}}
        contentContainerStyle={{
          // gap: 16,
          paddingBottom: 60,
        }}>
        <View style={{backgroundColor: 'white'}}>
          <ImageBackground
            source={{
              uri: SURFING_HAWAII_URL,
            }}
            style={styles.backgroundImage}>
            <Text style={styles.welcomeText}>Surfing</Text>
          </ImageBackground>
        </View>
        <View style={{padding: 16, backgroundColor: 'white'}}>
          <Text style={{fontFamily: 'IBMPlexMono-Regular', fontSize: 14}}>
            Hawaii is the capital of modern surfing. This group of Pacific
            islands gets swell from all directions, so there are plenty of
            pristine surf spots for all.
          </Text>
        </View>
        <View style={{backgroundColor: 'white', paddingTop: 16}}>
          <Text style={styles.highlightsTitle}>Top Spots</Text>

          <ScrollView
            contentContainerStyle={{gap: 16, padding: 16}}
            showsHorizontalScrollIndicator={false}>
            {[
              {
                key: 1,
                title: 'Maui',
                description: 'Best Hawaiian island for surfing',
              },
              {
                key: 2,
                title: 'Kauai',
                description: 'Try it yourself',
              },
              {
                key: 2,
                title: 'Honolulu',
                description: 'Volcanic condition can change at any time.',
              },
            ].map(({key, title, description}, index) => {
              return (
                <TouchableOpacity
                  style={{
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
                    elevation: 5,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 70,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'IBMPlexMono-Bold',
                      marginLeft: 16,
                      color: COLORS.primary,
                    }}>{`${index + 1}. ${title}`}</Text>
                  <Image
                    source={{
                      uri: 'https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=600',
                    }}
                    style={{
                      width: 160,
                      height: '100%',
                      borderTopRightRadius: 8,
                      borderBottomRightRadius: 8,
                      resizeMode: 'center',
                    }}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <View style={styles.highlightsContainer}>
            <View style={styles.activitiesContainer}>
              <Text style={styles.activitiesTitle}>Travel Guide</Text>
              <View style={{gap: 8, padding: 16}}>
                <TouchableOpacity
                  style={{
                    padding: 16,
                    backgroundColor: 'white',
                    borderRadius: 8,
                    gap: 16,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View style={{gap: 16}}>
                      <Text
                        style={{fontFamily: 'IBMPlexMono-Bold', fontSize: 24}}>
                        Hadwin Malone
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'IBMPlexMono-Regular',
                          fontSize: 18,
                        }}>
                        Guide Since 2012
                      </Text>
                    </View>
                    <Image
                      source={{
                        uri: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600',
                      }}
                      style={{height: 100, width: 100, borderRadius: 64}}
                    />
                  </View>
                  <Outlined style={{alignSelf: 'flex-start'}}>Contact</Outlined>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 16,
        }}>
        <PrimaryButton>Book a trip</PrimaryButton>
      </View>
    </View>
  );
};

export default Home;
