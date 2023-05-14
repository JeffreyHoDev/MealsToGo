import React from 'react'

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen'
import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurantdetail.screen'


const RestaurantStack = createStackNavigator()

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator 
            screenOptions={{
                ...TransitionPresets.ModalPresentationIOS,
                headerShown: false
            }}
        >
            <RestaurantStack.Screen 
                name="Restaurant Screen"
                component={RestaurantsScreen} // This will gives a prop to the component, that prop is navigate
            />

            <RestaurantStack.Screen
                name="Restaurant Detail"
                component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    )
}