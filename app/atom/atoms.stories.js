import React from 'react'
import AppLoading from 'expo-app-loading';
import { config, withDesign } from 'storybook-addon-designs';
import { View } from 'react-native';
import { color, font } from '../theme';
import { useFonts } from 'expo-font'
import { FiraSans_500Medium, FiraSans_400Regular } from '@expo-google-fonts/fira-sans';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { HindMadurai_300Light } from '@expo-google-fonts/hind-madurai';

import styled from 'styled-components/native';
import CircleHighlight from './icons/CircleHighlight';

import BigButton from './BigButton';
import { Clock, Home, Profile, Calendar, ArrowRight } from './icons/index';


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

function NavigationMenu() {
    let [fontsLoaded] = useFonts({
        HindMadurai_300Light, Montserrat_700Bold, Roboto_400Regular, FiraSans_500Medium, FiraSans_400Regular
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{
                background: '#111D42', 
                height: '60px',  width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
                position: 'fixed',
                bottom: 0
            }}>
                <Home/>
                <Profile/>
            </View>
        );
    }
}

export { NavigationMenu };
NavigationMenu.story = {
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

function WeekDay() {
    let [fontsLoaded] = useFonts({
        HindMadurai_300Light, Montserrat_700Bold, Roboto_400Regular, FiraSans_500Medium, FiraSans_400Regular
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{
                border: '1px solid #99A2BF',
                boxSizing: 'border-box',
                borderRadius: '20px',
                height: '74px',  
                width: '40.82px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#99A2BF'
            }}>
                <spam>seg</spam>
                <spam>9</spam>
            </View>
        );
    }
}

export { WeekDay };
WeekDay.story = {
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

function Hour() {
    let [fontsLoaded] = useFonts({
        HindMadurai_300Light, Montserrat_700Bold, Roboto_400Regular, FiraSans_500Medium, FiraSans_400Regular
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{
                border: '1px solid #99A2BF',
                boxSizing: 'border-box',
                borderRadius: '20px',
                width: '88px',
                height: '36px',
                display: 'flex',
                color: '#99A2BF',
                justifyContent: 'center',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'row'
            }}>
                <Clock/>
                <spam>12:00</spam>
            </View>
        );
    }
}

export { Hour };
Hour.story = {
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

function MonthYear() {
    let [fontsLoaded] = useFonts({
        HindMadurai_300Light, Montserrat_700Bold, Roboto_400Regular, FiraSans_500Medium, FiraSans_400Regular
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{
                width: '197px',
                height: '25.16px',
                color: '#423E94',
                display: 'flex',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                alignItems: 'center'        
            }}>
                <Calendar/>
                <spam>Outubro, 2020</spam>
            </View>
        );
    }
}

export { MonthYear };
MonthYear.story = {
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
