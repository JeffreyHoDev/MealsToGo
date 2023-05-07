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

import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from '../../../components/utility/safe-area.component'

import styled from "styled-components";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchView = styled(View)`
  padding: ${props => props.theme.space[0]};
`;

const ListView = styled(View)`
  flex: 1;
  padding: ${props => props.theme.space[3]};
`;

// The attrs is styled component function for giving attributes to component
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})`
`

export const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantsContext)
  console.log(restaurantContext)
  return (
    <>
      <SafeArea>
        <SearchView>
          <Searchbar placeholder="Search" />
        </SearchView>
          <RestaurantList 
            data={restaurantContext.restaurants}
            renderItem={() => <RestaurantInfoCard />}
            keyExtractor={(item) => item.name}
          />
      </SafeArea>
    </>
  );
};
