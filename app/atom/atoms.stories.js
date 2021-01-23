import React from 'react'
import { config, withDesign } from 'storybook-addon-designs';
import AppLoading from 'expo-app-loading';
import { View } from 'react-native';
import { color, font } from '../theme';
import { useFonts } from 'expo-font'
import { FiraSans_500Medium, FiraSans_400Regular } from '@expo-google-fonts/fira-sans';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { HindMadurai_300Light } from '@expo-google-fonts/hind-madurai';

import BigButton from './BigButton';

function ContinueButton() {
    let [fontsLoaded] = useFonts({
        HindMadurai_300Light, Montserrat_700Bold, Roboto_400Regular, FiraSans_500Medium, FiraSans_400Regular
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{
                background: color['bg'], 
                height: '100vh', width: '100vw',// position: 'fixed',

            }}>
                <BigButton />
            </View>
        );
    }
}
export { ContinueButton };
ContinueButton.story = {
    parameters: {
        design: config([
            {
                name: 'Figma',
                type: 'figma',
                url:
                    'https://www.figma.com/file/jvLCps7aAuxsvHVv1j9x7D/Appointment-Octopus?node-id=47%3A6'
            },
            {
                name: 'Link',
                type: 'link',
                url:
                    'https://www.figma.com/file/jvLCps7aAuxsvHVv1j9x7D/Appointment-Octopus?node-id=47%3A6'
            }
        ])
    }
}

export default {
    title: 'Atoms',
    decorators: [withDesign],
    // parameters: {
    // docs: { page: Docs }
    // }
}
