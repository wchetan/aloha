import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import RootNavigation from './src/navigation/RootNavigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#fff'} />
      <RootNavigation />
    </SafeAreaView>
  );
}

export default App;
