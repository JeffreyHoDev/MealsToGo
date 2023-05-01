import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Platform,
} from "react-native";

import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import styled from "styled-components";

const isAndroid = Platform.OS === "android";

const RestaurantScreenView = styled(SafeAreaView)`
  flex: 1;
  marginTop: ${isAndroid? StatusBar.currentHeight: 0}px;
`;

const SearchView = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

const ListView = styled(View)`
  flex: 1;
  padding: ${props => props.theme.space[3]};
  background-color: blue;
`;

export const RestaurantsScreen = () => {
  return (
    <>
      <RestaurantScreenView>
        <SearchView>
          <Searchbar placeholder="Search" />
        </SearchView>
        <ListView>
          <RestaurantInfoCard />
        </ListView>
      </RestaurantScreenView>
    </>
  );
};
