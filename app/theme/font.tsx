import * as React from 'react';
import styled from 'styled-components/native';
import color from './color';
import { useWindowSize } from '../utils'
import { PixelRatio } from 'react-native'

interface DefaultFontProps {
    fontFamily: string,
    fontSize: number,
    fontVariant?: string,
    textTransform?: string
}

interface EditableFontProps {
    textColor?: string,
    textAlign?: string,
    textSize?: number,
    alignItems?: string
}

const defaultFontValues = {
    textColor: color.gray.dark[3],
    textAlign: 'center',
    alignItems: 'center',
    fontVariant: 'normal',
};

const DefaultFont = styled.Text<DefaultFontProps & EditableFontProps>`
  font-family: ${( props ) => props.fontFamily};
  font-size: ${( props ) => props.fontSize};
  font-variant: ${(props) => props.fontVariant};
  text-transform: ${(props) => props.textTransform}
  color: ${( props ) => props.textColor};
  text-align: ${( props ) => props.textAlign};
  alignItems: ${( props ) => props.alignItems};
`;
DefaultFont.defaultProps = { ...defaultFontValues };

let font: any = {}

// first position in sizes array being empty is intentional
// so foreach will skip it [and the index will therefore start counting by 1
// instead of 0 :D]
const styles = {
    header: {
        defaultStyle : {
            fontFamily: 'Montserrat_700Bold'
        },
        fontSizes: [, 44, 34, 26, 20, 14, 12]
    },
    subtitle: {
        defaultStyle: {
            fontFamily: 'FiraSans_500Medium'
        },
        fontSizes: [, 18.5, 17, 13, 10]
    },
    body: {
        defaultStyle: {
            fontFamily: 'HindMadurai_300Light'
        },
        fontSizes: [, 18.5, 12]
    },
    buttonCaps: {
        defaultStyle: {
            fontFamily: 'Roboto_400Regular',
            fontVariant: 'small-caps',
            textTransform: 'uppercase'
        },
        fontSizes: [, 18.5, 17, 12]
    },
    buttonNormal: {
        defaultStyle: {
            fontFamily: 'FiraSans_400Regular'
        },
        fontSizes: [, 18.5, 17, , 10]
    }
}

for (let [key, typeOfFont] of Object.entries(styles)) {
    const { defaultStyle, fontSizes } = typeOfFont;
    fontSizes.forEach( (value, i) => {
        font[`${key}${i}`] = ( props: EditableFontProps ) => {
            let [windowWidth,] = useWindowSize();
            const ratio = windowWidth / 375
            const finalValue = PixelRatio.roundToNearestPixel(ratio * value)
            
            return (
                <DefaultFont {...props} {...defaultStyle} fontSize={finalValue} />
            );
        }
    } );
}

export default font;