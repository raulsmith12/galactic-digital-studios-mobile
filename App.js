import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import { CommonActions, NavigationContainer } from "@react-navigation/native";

import { About } from './screens/About';
import { Contact } from './screens/Contact';
import { Team } from './screens/Team';
import { Services } from './screens/Services';
import { Examples } from './screens/Examples';
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: true, }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({ route, focused, color }) => {
              const { options } = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 });
              }

              return null;
            }}
            getLabelText={({ route }) => {
              const { options } = descriptors[route.key];
              const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.title;

              return label;
            }}
            style={{ backgroundColor: '#929292' }}
          />
        )}
      >
        <Tab.Screen
          name="About Galactic Digital Studios"
          component={About}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="star" size={size} color={color} />
            },
            headerStyle: { backgroundColor: '#232323' },
            headerTitleAlign: 'center',
            headerTitleStyle: { color: 'white' }
          }}
        />
        <Tab.Screen
          name="Meet the Team"
          component={Team}
          options={{
            tabBarLabel: 'Team',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="users" size={size} color={color} />
            },
            headerStyle: { backgroundColor: '#232323' },
            headerTitleAlign: 'center',
            headerTitleStyle: { color: 'white' }
          }}
        />
        <Tab.Screen
          name="Contact Galactic Digital Studios"
          component={Contact}
          options={{
            tabBarLabel: 'Contact',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="comment-alt" size={size} color={color} />
            },
            headerStyle: { backgroundColor: '#232323' },
            headerTitleAlign: 'center',
            headerTitleStyle: { color: 'white' }
          }}
        />
        <Tab.Screen
          name="Services"
          component={Services}
          options={{
            tabBarLabel: 'Services',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="laptop" size={size} color={color} />
            },
            headerStyle: { backgroundColor: '#232323' },
            headerTitleAlign: 'center',
            headerTitleStyle: { color: 'white' }
          }}
        />
        <Tab.Screen
          name="Examples"
          component={Examples}
          options={{
            tabBarLabel: 'Examples',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="window-restore" size={size} color={color} />
            },
            headerStyle: { backgroundColor: '#232323' },
            headerTitleAlign: 'center',
            headerTitleStyle: { color: 'white' }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
