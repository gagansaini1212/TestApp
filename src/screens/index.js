import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './Login';
import Dashboard from './Dashboard';
import SinglePost from './SinglePost';

const AppStack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions="false">
        <AppStack.Screen name="Dashboard" component={Dashboard} />
        <AppStack.Screen name="SinglePost" component={SinglePost} />
        <AppStack.Screen name="Login" component={Login} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
