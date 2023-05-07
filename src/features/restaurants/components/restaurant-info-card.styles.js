import styled from "styled-components";

import { Card } from "react-native-paper";
// Card from react-native-paper
export const RestaurantCard = styled(Card)`
  backgroundColor: ${props => props.theme.colors.bg.primary};
  margin-bottom: ${props => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  backgroundColor: ${props => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
    padding: ${props => props.theme.space[3]};
`

export const Rating = styled.View`
    flex-direction: row;
    padding-top: ${props => props.theme.space[2]};
    padding-bottom: ${props => props.theme.space[2]};
`
export const Address = styled.Text`
    font-size: ${props => props.theme.fontSizes.caption};
    font-family: ${props => props.theme.fonts.body};
`

export const Section = styled.View`
    flex-direction: row;
    align-items: center;
`

export const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`