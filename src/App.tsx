import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Router from './routes/Router';
import { AppwriteProvider } from './appwrite/AppwriteContext';



function App(): React.JSX.Element {

  return (

    <AppwriteProvider>
      <Router/>
    </AppwriteProvider>
    

  );
}

export default App;
