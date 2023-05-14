import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Platform,
  FlatList,
  Pressable,
  TouchableOpacity
} from "react-native";

import { Search } from '../../restaurants/components/search.component'
import { FavouritesBar } from "../../../components/favourite/favourite-bar.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from '../../../components/utility/safe-area.component'

import styled from "styled-components";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
// The attrs is styled component function for giving attributes to component
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})`
`

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext)
  const { favourites } = useContext(FavouritesContext)
  const [ isToggled, setIsToogled] = useState(false)
  


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
                  <Search isFavouriteToggled={isToggled} onFavouriteToggle={() => setIsToogled(!isToggled)}/>
                  {
                    isToggled && <FavouritesBar onNavigate={navigation.navigate} favourites={favourites} />
                  }
                  <RestaurantList 
                    data={restaurants}
                    renderItem={({item}) => (
                      <TouchableOpacity 
                        onPress={() => navigation.navigate("Restaurant Detail", {
                          restaurant: item
                        })}
                      >
                        <RestaurantInfoCard restaurant={item} />
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.name}
                  />
                </View>
            )
          }
      </SafeArea>
    </>
  );
};
