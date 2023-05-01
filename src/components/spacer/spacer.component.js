import styled, { useTheme } from "styled-components/native"
import React from "react"
import { View } from 'react-native'

const sizeVariant = {
    small: 1,
    medium: 2,
    large: 3
}

const positionVariant = {
    top: 'margin-top',
    left: 'margin-left',
    bottom: 'margin-bottom',
    right: 'margin-right'
}

const getVariant = (position, size, theme) => {
    const sizeIndex = sizeVariant[size]
    const positionProperty = positionVariant[position]
    const valueForSize = theme.space[sizeIndex]

    return `${positionProperty}:${valueForSize}`;
}

// This SpacerView is to solve Android compatibility, it doesnt accept straight return the string
const SpacerView = styled(View)`
    ${ ({variant}) => variant }
`

export const Spacer = ({ position, size, children }) => {
    
    const theme = useTheme()
    const variant = getVariant(position, size, theme)
    return (
        <SpacerView variant={variant}>
            { children }
        </SpacerView>
    )
}

Spacer.defaultProps = {
    position: 'top',
    size: 'small'
}