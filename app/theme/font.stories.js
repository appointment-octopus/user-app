import { color, font } from './index';
import { config, withDesign } from 'storybook-addon-designs';
import * as React from 'react';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font'
import { FiraSans_500Medium, FiraSans_400Regular } from '@expo-google-fonts/fira-sans';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { HindMadurai_300Light } from '@expo-google-fonts/hind-madurai';

const figmaDesign = {
    design: config([
        {
            name: 'Figma',
            type: 'figma',
            url:
                'https://www.figma.com/file/jvLCps7aAuxsvHVv1j9x7D/Appointment-Octopus?node-id=81%3A0'
        },
        {
            name: 'Link',
            type: 'link',
            url:
                'https://www.figma.com/file/jvLCps7aAuxsvHVv1j9x7D/Appointment-Octopus?node-id=81%3A0'
        }
    ])
}

function header() {
    let [fontsLoaded] = useFonts({
        HindMadurai_300Light, Montserrat_700Bold, Roboto_400Regular, FiraSans_500Medium, FiraSans_400Regular
    });

    let fontSize = 24;
    let paddingVertical = 6;

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{ background: color['bg'], height: '100%', width: '100%' }}>
                <font.header1>H1 Head</font.header1>
                    <font.subtitle1>Subtitles 1</font.subtitle1>
                    <font.body1>Body 1</font.body1>
                    <font.buttonNormal1>Button normal</font.buttonNormal1>
                    <font.buttonCaps1>Button caps</font.buttonCaps1>
                <font.header2>H2 Head</font.header2>
                    <font.subtitle2>Subtitles 2</font.subtitle2>
                    <font.body2>Body 2</font.body2>
                    <font.buttonNormal2>Button normal</font.buttonNormal2>
                    <font.buttonCaps2>Button caps</font.buttonCaps2>
                <font.header3>H3 Head</font.header3>
                    <font.subtitle3>Subtitles 3</font.subtitle3>
                <font.header4>H4 Head</font.header4>
                    <font.subtitle4>Subtitles 4</font.subtitle4>
                    <font.buttonNormal4>Button Normal</font.buttonNormal4>
                <font.header5>H5 Head</font.header5>
                <font.header6>H6 Head</font.header6>
            </View>
        );
    }
}
export { header };


export default {
    title: 'Theme/Text',
    decorators: [withDesign],
    parameters: { ...figmaDesign }
}
