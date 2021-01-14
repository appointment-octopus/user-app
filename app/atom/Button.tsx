import * as React from "react"
import Svg, { SvgProps, G, Path, Defs } from "react-native-svg"
import { View } from 'react-native';
import { useWindowSize } from '../utils';
import { color } from '../theme';

const originalWidth = 331;
const originalHeight = 62;
const aspectRatio = originalHeight / originalWidth;

interface SVGRProps {
    children?: React.ReactNode;
}

export default function SvgComponent( props: SvgProps & SVGRProps) {
    let [width, height] = useWindowSize();
    height *= 0.09
    width *= 0.885
    return (
        <View style={{ height, aspectRatio }}>
            <Svg
                {...props}
                width="100%"
                height="100%"
                viewBox={`0 0 ${originalWidth} ${originalHeight}`}
                // preserveAspectRatio="none"
                fill='none'
            >
                <G>
                    <Path
                        d="M9.108 9.818L5.332 41.526c-.709 5.95 3.938 11.182 9.93 11.182h296.753a10 10 0 009.931-8.83l3.737-31.708C326.384 6.225 321.739 1 315.752 1H19.038a10 10 0 00-9.93 8.818z"
                        fill={color.primary.dark}
                    />
                    <Path
                        d="M9.108 9.818L5.332 41.526c-.709 5.95 3.938 11.182 9.93 11.182h296.753a10 10 0 009.931-8.83l3.737-31.708C326.384 6.225 321.739 1 315.752 1H19.038a10 10 0 00-9.93 8.818z"
                        stroke={color.highlight.cyan}
                        strokeWidth={2}
                    />
                </G>
                <Defs></Defs>
            </Svg>
            {props.children}
        </View>
    )
}
