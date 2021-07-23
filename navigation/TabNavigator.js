import React from 'react'
import { StyleSheet } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Feed from '../screens/Feed'
import CreatePost from '../screens/CreatePost'
import { Ionicons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

const Tab=createMaterialBottomTabNavigator()

const BottomTabNavigator=()=>{
    return (
        
          <Tab.Navigator

            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Feed') {
                  iconName = focused
                    ? 'book'
                    : 'book-outline';
                } else if (route.name === 'CreatePost') {
                  iconName = focused ? 'create' : 'create-outline';
                }
                return <Ionicons name={iconName} size={30} color={color} style={styles.icons} />;
              },
            })}
            activeColor= 'tomato'
            inactiveColor= 'gray'
          >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="CreatePost" component={CreatePost} />
          </Tab.Navigator>
        
      );
}

const styles=StyleSheet.create({
  bottomTabStyle:{
    backgroundColor:'#2f345d',
    height:'8%',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    overflow:'hidden',
    position:'absolute'
  },
  icons:{
    width:RFValue(30),
    height:RFValue(30)
  }
})

export default BottomTabNavigator;