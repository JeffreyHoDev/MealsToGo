
import { Ionicons } from "@expo/vector-icons"
import { View, Text } from 'react-native'
import { SafeArea } from '../../components/utility/safe-area.component'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MapScreen } from '../../features/map/screens/map.screen'
import { RestaurantsNavigator } from './restaurant.navigator'

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
      headerShown: false
  
    }
}


function SettingsScreen() {
    return (
        <SafeArea>
            <Text>Settings!</Text>
        </SafeArea>
    );
}

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={createScreenOptions}
        >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
}