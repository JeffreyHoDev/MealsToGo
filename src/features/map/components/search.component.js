import React, { useState, useContext, useEffect } from "react"
import { View } from "react-native";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";

import { LocationContext } from '../../../services/location/location.context'

const SearchView = styled(View)`
  padding: ${props => props.theme.space[0]};
  position: absolute;
  z-index: 999;
  top: 40px;
  width: 100%;
`;


export const Search = () => {
    
    
    const locationContext = useContext(LocationContext)
    const { search, keyword } = locationContext
    
    const [ searchKeyword, setSearchKeyword ] = useState(keyword)

    useEffect(() => {
        setSearchKeyword(keyword)
    }, [keyword])

    return (
        <SearchView>
            <Searchbar 
                placeholder="Search for a location" 
                value={searchKeyword}
                onSubmitEditing={() => search(searchKeyword)}
                onChangeText={(text) => {
                    setSearchKeyword(text)
                }}
                icon="map"
            />
        </SearchView>
    )
}