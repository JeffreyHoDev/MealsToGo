import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantsRequest, restaurantsTransform } from "./restaurants.service";

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = ({ children }) => {
    return (
        <RestaurantsContext.Provider value={{restaurants: [{name: 1},{name: 2}, {name: 3}, {name: 4}]}}>
            { children }
        </RestaurantsContext.Provider>
    )
}