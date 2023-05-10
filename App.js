/* eslint-disable react/react-in-jsx-scope */
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { View, Text } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

import { SafeArea } from './src/components/utility/safe-area.component'

import { theme } from './src/infrastructure/theme/index'

import { Ionicons } from "@expo/vector-icons"

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';

import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context'
import { LocationContextProvider } from './src/services/location/location.context'

const TAB_ICON = {
  'Restaurants': "md-restaurant",
  'Map': "md-map",
  'Settings': "md-settings"
}

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => <Ionicons name={iconName} size={size} color={color} />,
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',

  }
}

function MapScreen() {
  return (
    <SafeArea>
      <Text>Map!</Text>
    </SafeArea>
  );
}

function SettingsScreen() {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();

 
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !latoLoaded){
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={createScreenOptions}
              >
                <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
