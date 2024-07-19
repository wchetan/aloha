import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';

import RootNavigation from './src/navigation/RootNavigation';
import COLORS from './src/theme/colors';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <RootNavigation />
    </SafeAreaView>
  );
}

export default App;
