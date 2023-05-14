import styled from 'styled-components'
import { Text } from '../typography/text.component'
import { WebView } from 'react-native-webview'
import { Platform } from 'react-native'

const CompactImage = styled.Image`
    border-radius: 10px;
    width: 120px;
    height: 100px
`
const CompactWebview = styled(WebView)`
    border-radius: 10px;
    width: 120px;
    height: 100px
`

const Item = styled.View`
    padding: 10px;
    max-width: 120px;
    align-items: center;
`


const isAndroid = Platform.OS === "android"
export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
    const ViewImage = (isAndroid && isMap) ? CompactWebview : CompactImage

    return (
        <Item>
            <ViewImage source={{ uri: restaurant.photos[0]}} />
            { /* In android, need to install react-native-webview to work */}
            <Text center variant="caption" numberOfLines={3}>
                {restaurant.name}
            </Text>
        </Item>
    )
}