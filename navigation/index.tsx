/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import { Ionicons, Entypo, AntDesign, FontAwesome5 } from '@expo/vector-icons';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation, useRoute } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import * as React from 'react';
 import { ColorSchemeName, Pressable } from 'react-native';
 
 import Colors from '../constants/Colors';
 import useColorScheme from '../hooks/useColorScheme';
 import ModalScreen from '../screens/ModalScreen';
 import NotFoundScreen from '../screens/NotFoundScreen';
 import TabOneScreen from '../screens/HomeScreen';
 import TabTwoScreen from '../screens/TabTwoScreen';
 import TabThreeScreen from '../screens/TabThreeScreen';
 import TabFourScreen from '../screens/TabFourScreen';
 import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
 import LinkingConfiguration from './LinkingConfiguration';
 import AlbumScreen from '../screens/AlbumScreen';
 import SignupScreen from '../screens/SignUpScreen';
 
 
 export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
   return (
     <NavigationContainer
       linking={LinkingConfiguration}
       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
       <RootNavigator />
     </NavigationContainer>
   );
 }
 
 /**
  * A root stack navigator is often used for displaying modals on top of all other content.
  * https://reactnavigation.org/docs/modal
  */
 const Stack = createNativeStackNavigator<RootStackParamList>();
 
 function RootNavigator() {
   return (
     <Stack.Navigator>
       <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
       <Stack.Screen name="AlbumScreen" component={AlbumScreen} options={{ title: 'Album' }} />
       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
       <Stack.Group screenOptions={{ presentation: 'modal' }}>
         <Stack.Screen name="Add" component={ModalScreen} />
         <Stack.Screen name="LogOut" component={NotFoundScreen} />
         <Stack.Screen name="SignUp" component={SignupScreen} />
       </Stack.Group>
     </Stack.Navigator>
   );
 }
 
 /**
  * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
  * https://reactnavigation.org/docs/bottom-tab-navigator
  */
 const BottomTab = createBottomTabNavigator<RootTabParamList>();
 
 export function BottomTabNavigator() {
   const colorScheme = useColorScheme();
 
   return (
     <BottomTab.Navigator
       initialRouteName="TabOne"
       screenOptions={{
         tabBarActiveTintColor: Colors[colorScheme].tint,
       }}>
       <BottomTab.Screen
         name="TabOne"
         component={TabOneScreen}
         options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
           title: 'Home',
           tabBarIcon: ({ color }) => <Entypo name='home' size={30} color={color} style={{ marginBottom: -3 }} />,
           headerRight: () => (
             <Pressable
               onPress={() => navigation.navigate('Add')}
               style={({ pressed }) => ({
                 opacity: pressed ? 0.5 : 1,
               })}>
                <AntDesign 
                 name="pluscircle"
                 size={25}
                 color={Colors[colorScheme].text}
                 style={{ marginRight: 15 }}
               />
             </Pressable>
           ),
 
         })}
       />
       <BottomTab.Screen
         name="TabTwo"
         component={TabTwoScreen}
         options={{
           title: 'Search',
           tabBarIcon: ({ color }) => <AntDesign name="search1" size={24} color={color} style={{ marginBottom: -3 }} />,
         }}
       />
       <BottomTab.Screen
         name="TabThree"
         component={TabThreeScreen}
         options={{
           title: 'Your Library',
           tabBarIcon: ({ color }) => <Ionicons name="library-sharp" size={24} color={color} style={{ marginBottom: -3 }} />,
         }}
       />
       <BottomTab.Screen
         name="TabFour"
         component={TabFourScreen}
         options={({ navigation }: RootTabScreenProps<'TabFour'>) => ({
           title: 'Login',
           tabBarIcon: ({ color }) => <Entypo name='spotify' size={30} color={color} style={{ marginBottom: -3 }} />,
         })}
       />
     </BottomTab.Navigator>
   );
 }
 
 /**
  * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
  */