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
import Icon from 'react-native-vector-icons/MaterialIcons';

const HULA_URL =
  'https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg?auto=compress&cs=tinysrgb&w=600';

const SURFING_HAWAII_URL =
  'https://images.pexels.com/photos/4319778/pexels-photo-4319778.jpeg?auto=compress&cs=tinysrgb&w=600';

const VULCANOES_URL =
  'https://images.pexels.com/photos/21706244/pexels-photo-21706244/free-photo-of-yellow-sky-after-mauna-loa-eruption-on-hawaii.jpeg?auto=compress&cs=tinysrgb&w=600';

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
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 0.6)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    textShadowColor: 'black',
    fontFamily: 'IBMPlexMono-Regular',
  },
  hawaiiText: {
    fontSize: 46,
    textAlign: 'center',
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    textShadowColor: 'black',
    fontFamily: 'IBMPlexMono-Regular',
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
              uri: 'https://media.istockphoto.com/id/1574603587/photo/kauai-hawaii.jpg?b=1&s=612x612&w=0&k=20&c=cclWf_j7OKeri6wINHXVF133jWeXrVcT0R3OByPDFsg=',
            }}
            style={styles.backgroundImage}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.hawaiiText}>To Hawaii</Text>
          </ImageBackground>
        </View>
        <View style={{backgroundColor: 'white', paddingTop: 16}}>
          <Text style={styles.highlightsTitle}>Highlights</Text>

          {/* 
            Why I did not use FlatList here ?
            - The HighlightItems are definite number of items
            
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
                imageUrl: SURFING_HAWAII_URL,
              },
              {
                key: 2,
                title: 'Hula',
                description: 'Try it yourself',
                imageUrl: HULA_URL,
              },
              {
                key: 2,
                title: 'Hula',
                description: 'Volcanic condition can change at any time.',
                imageUrl: VULCANOES_URL,
              },
            ].map(({key, title, description, imageUrl}) => {
              return (
                <HighlightCard
                  key={key.toString()}
                  title={title}
                  description={description}
                  imageUrl={imageUrl}
                />
              );
            })}
          </ScrollView>

          <View style={styles.highlightsContainer}>
            <View style={styles.activitiesContainer}>
              <Text style={styles.activitiesTitle}>Activities</Text>
              <View style={{gap: 8, padding: 16}}>
                {['Adventure', 'Relaxation', 'Culture', 'Nature'].map(
                  activity => {
                    return (
                      <TouchableOpacity style={styles.activityButton}>
                        <Text style={{fontFamily: 'IBMPlexMono-Regular'}}>
                          {activity}
                        </Text>
                        <Icon
                          name="arrow-forward"
                          size={24}
                          color={COLORS.primary}
                        />
                      </TouchableOpacity>
                    );
                  },
                )}
              </View>
            </View>
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
      <View style={styles.primaryButton}>
        <PrimaryButton>Book a trip</PrimaryButton>
      </View>
    </View>
  );
};

export default Home;
