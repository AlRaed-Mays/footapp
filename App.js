import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import {StatusBar} from 'react-native';
import COLORS from './src/const/Colors';
import details from './src/screens/details';
import home from './src/screens/home';
import BookingScreen from './src/screens/BookingScreen';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="details" component={details} />
        <Stack.Screen name="BookingScreen" component={BookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;