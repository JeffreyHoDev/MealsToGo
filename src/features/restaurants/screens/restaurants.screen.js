import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Platform,
  FlatList
} from "react-native";

import { Search } from '../../restaurants/components/search.component'

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from '../../../components/utility/safe-area.component'

import styled from "styled-components";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

// The attrs is styled component function for giving attributes to component
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})`
`

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext)
  
  return (
    <>
      <SafeArea>
          {
            isLoading ? (
              <View style={{position: "absolute", top: "50%", left: "50%"}}>
                <ActivityIndicator size={50} style={{marginLeft: -25}} animating={true} color={MD2Colors.red800} />
              </View>
            )
            : (
              <View>
                <Search />
                <RestaurantList 
                  data={restaurants}
                  renderItem={({item}) => <RestaurantInfoCard restaurant={item} />}
                  keyExtractor={(item) => item.name}
                />
              </View>
            )
          }
      </SafeArea>
    </>
  );
};
