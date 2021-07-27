import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "./screens/Feed";
import CreatePost from "./screens/CreatePost";


import DrawerNavigator from './Navigation/DrawerNavigation';

export default function App() {
  
  return(
    <NavigationContainer>
      <DrawerNavigator/>
      </NavigationContainer>
  )
}
