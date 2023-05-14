import { useState } from "react";
import { List } from 'react-native-paper'
import { ScrollView } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantDetailScreen = ({ route }) => {
    const [breakfastExpanded, setBreakfastExpanded] = useState(false)
    const [lunchExpanded, setLunchExpanded] = useState(false)
    const [dinnerExpanded, setDinnerExpanded] = useState(false)
    const [drinksExpanded, setDrinksExpanded] = useState(false)
    
    const { restaurant } = route.params;

    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant}/>
                <ScrollView>
                    <List.Accordion
                        title="Breakfast"
                        left={(props) => <List.Icon {...props} icon="bread-slice" />}
                        expanded={breakfastExpanded}
                        onPress={() => setBreakfastExpanded(!breakfastExpanded)}
                    >
                        <List.Item title="Eggs"/>
                        <List.Item title="Bread"/>
                        <List.Item title="Classic Breakfast"/>
                    </List.Accordion>
                    <List.Accordion
                        title="Lunch"
                        left={(props) => <List.Icon {...props} icon="hamburger" />}
                        expanded={lunchExpanded}
                        onPress={() => setLunchExpanded(!lunchExpanded)}
                    >
                        <List.Item title="Burger"/>
                        <List.Item title="Fried Rice"/>
                        <List.Item title="Steak"/>
                    </List.Accordion>
                    <List.Accordion
                        title="Dinner"
                        left={(props) => <List.Icon {...props} icon="food-variant" />}
                        expanded={dinnerExpanded}
                        onPress={() => setDinnerExpanded(!dinnerExpanded)}
                    >
                        <List.Item title="Grilled Chicken"/>
                        <List.Item title="Bread"/>
                    </List.Accordion>
                    <List.Accordion
                        title="Drinks"
                        left={(props) => <List.Icon {...props} icon="cup" />}
                        expanded={drinksExpanded}
                        onPress={() => setDrinksExpanded(!drinksExpanded)}
                    >
                        <List.Item title="Coffee"/>
                        <List.Item title="Tea"/>
                        <List.Item title="Coke"/>                
                    </List.Accordion>
                </ScrollView>
        </SafeArea>
    )
}