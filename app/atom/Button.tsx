import * as React from "react"
import Svg, { Text, Circle, SvgProps, G, Path, Defs } from "react-native-svg"
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useWindowSize } from '../utils';
import { color } from '../theme';

const originalSizes = {
    width: 321,
    height: 52,
    screenWidth: 375,
    screenHorizontalPadding: 26,
    buttonHorizontalPadding: 24,
    buttonVerticalPadding: 14
}
const aspectRatios = {
    button: {
        area: originalSizes.height / originalSizes.width,
        paddingHorizontal: originalSizes.buttonHorizontalPadding / originalSizes.width,
        paddingVertical: originalSizes.buttonVerticalPadding / originalSizes.height,
    },
    screen: {
        paddingHorizontal: originalSizes.screenHorizontalPadding / originalSizes.screenWidth
    }
}

interface SVGRProps {
    children?: React.ReactNode;
}

interface ButtonStyle {
    backgroundColor?: string,
    strokeColor?: string
}

const defaultStyle = {
    backgroundColor: color.primary.dark,
    strokeColor: color.highlight.cyan,
}
export default function SvgComponent( props: SvgProps & SVGRProps & ButtonStyle) {
    let [width, height] = useWindowSize();
    const screenPaddingHorizontal = width * aspectRatios.screen.paddingHorizontal;
    const realButtonWidth = width - (screenPaddingHorizontal * 2)
    const realButtonHeight = realButtonWidth * aspectRatios.button.area
    const buttonVerticalPadding = realButtonHeight * aspectRatios.button.paddingVertical
    const buttonHorizontalPadding = realButtonWidth * aspectRatios.button.paddingHorizontal
    const { backgroundColor, strokeColor } = props || defaultStyle

    return (
        <View style={{ paddingHorizontal: screenPaddingHorizontal, flex: 1}}>

        <View style={{
            width: '100%',
            aspectRatio: aspectRatios.button.area,
            }}
        >
                <TouchableOpacity style={{
                    flex: 1, flexDirection: 'row',
                }}
                >
                
                <Svg
                    width="100%"
                    height="100%"
                    viewBox={`0 0 ${originalSizes.width} ${originalSizes.height}`}
                    fill='none'
                >
                        <Path
                            d="M1.325 40.645L5.1 8.935A9 9 0 0114.038 1h296.714c5.388 0 9.569 4.702 8.938 10.053l-3.737 31.71a9 9 0 01-8.938 7.946H10.262C4.869 50.71.687 46 1.325 40.645z"
                            fill={strokeColor}
                            stroke={backgroundColor}
                            strokeWidth={2.5}
                        />
                </Svg>
                
            
                <View style={{ 
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
                    justifyContent: 'center', alignItems: 'center',
                    paddingVertical: buttonVerticalPadding, paddingHorizontal: buttonHorizontalPadding,
                }}>
                    {props.children}
                </View>
            </TouchableOpacity>

            </View>
        </View>
    )
}
