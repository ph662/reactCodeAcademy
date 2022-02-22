
import * as React from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity } from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//Nav Button Component
const NavButton = ({screenName}) => {
  const nav = useNavigation();
  return (
    <TouchableOpacity onPress={() => {nav.navigate(screenName)}} style={styles.button} >
        <Text style={styles.buttonText}>{screenName}</Text>
    </TouchableOpacity>
  )
}

// --- Main screens ---
const HomeScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Home</Text>
  </View>
);

const FeedScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Feed</Text>
  </View>
);

const OverviewScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Overview</Text>
  </View>
);

const AccountScreen = () => (
  <View style={styles.layout}>
    <SignInScreen/>
  </View>
);

// --- Login Screens ---
const SignInScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Sign In</Text>
    <NavButton screenName="Sign Up"/>
  </View>
);

const SignUpScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Sign Up</Text>
    <NavButton screenName="Main"/>
  </View>
);

// --- App ---

//Tab Navigation
const Tab = createBottomTabNavigator();
export const MainNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Overview" component={OverviewScreen} />
    <Tab.Screen name="Feed" component={FeedScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

//Stack Navigation
const Stack = createStackNavigator();
export const ProfileNavigator = () => (
  <Stack.Navigator  >
    <Stack.Screen name="Sign In" component={SignInScreen} options={{headerShown: false}} />
    <Stack.Screen name="Sign Up" component={SignUpScreen} options={{headerShown: false}} />
    <Stack.Screen name="Main" component={MainNavigator} options={{headerShown: false}}/>
  </Stack.Navigator>
);


const App = () => (
   <NavigationContainer>
    <ProfileNavigator />
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    padding: 15,
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18
  }
});