import React from 'react'
import AppLoading from 'expo-app-loading';
import { config, withDesign } from 'storybook-addon-designs';
import { View, TextInput } from 'react-native';
import { color, font } from '../theme';
import { useFonts } from 'expo-font'
import { FiraSans_500Medium, FiraSans_400Regular } from '@expo-google-fonts/fira-sans';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { HindMadurai_300Light } from '@expo-google-fonts/hind-madurai';
import { Input } from 'react-native-elements';

import styled from 'styled-components/native';
import CircleHighlight from './icons/CircleHighlight';

import BigButton from './BigButton';
import { Clock, Home, Profile, Calendar, ArrowRight, Circle, Globe, Search, MapPin, CreditCard } from './icons/index';


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

function WeekDay({label, number}) {
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
                <spam>{label}</spam>
                <spam>{number}</spam>
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
                flexDirection: 'row',
                alignItems: 'center'        
            }}>
                <Calendar style={{
                    margin: '8px',
                }}/>
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

function SearchGlobe() {
    let [fontsLoaded] = useFonts({
        HindMadurai_300Light, Montserrat_700Bold, Roboto_400Regular, FiraSans_500Medium, FiraSans_400Regular
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{
                
            }}>
            <div style = {{
                width: '42px',
                height: '48px',
                display: 'flex',
                flexDirection: 'column',
                color: '#8F47AE'
            }}>
            <Globe/>
                <div style = {{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                <Search/>
                </div>
            </div>
                
            </View>
        );
    }
}

export { SearchGlobe };
SearchGlobe.story = {
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

function SearchPin() {
    let [fontsLoaded] = useFonts({
        HindMadurai_300Light, Montserrat_700Bold, Roboto_400Regular, FiraSans_500Medium, FiraSans_400Regular
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{
                
            }}>
            <div style = {{
                width: '42px',
                height: '48px',
                display: 'flex',
                flexDirection: 'column',
                color: '#8F47AE'
            }}>
            <MapPin/>
                <div style = {{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                <Search/>
                </div>
            </div>
                
            </View>
        );
    }
}

export { SearchPin };
SearchPin.story = {
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

function ConsultCard() {
    let [fontsLoaded] = useFonts({
        HindMadurai_300Light, Montserrat_700Bold, Roboto_400Regular, FiraSans_500Medium, FiraSans_400Regular
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{
                width: '90%',
                height: '80px',
                borderRadius: '11px',
                
                flexDirection: 'row',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignSelf: 'center',
                backgroundColor: '#C4C4C4'   
            }}>
                <Circle/>
                <div style = {{
                    width: '60%',
                    display: 'flex',
                    flexDirection: 'column',

                }}>
                    <h3 style = {{
                        color: '#333F66',

                    }}>Consulta online</h3>
                    <spam>R$ 45,00</spam>
                </div>
                <SearchGlobe/>
            </View>
        );
    }
}

export { ConsultCard };
ConsultCard.story = {
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

function NewCreditCard() {
    let [fontsLoaded] = useFonts({
        HindMadurai_300Light, Montserrat_700Bold, Roboto_400Regular, FiraSans_500Medium, FiraSans_400Regular
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{
                Width: '318px',
                Height: '80%',
                borderRadius: '11px',
                padding: '5%',
                
                flex: 'wrap',
                alignItems: 'left',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignSelf: 'center',

                backgroundColor: '#F2F5FF'   
            }}>
                <h3 style ={{
                    color: '111D42',
                    font: 'Montserrat',
                    fontWeight: 'bold',
                    display: 'flex',
                    size: '20px',
                    justifycontent:'flex-start',
                }}>Dados do Cartão</h3>

                <Input
                    placeholder='Nome do Titular'
                    leftIcon={ <Profile/> }
                />
                <Input
                    placeholder='Numero do Cartão'
                    leftIcon={ <CreditCard/> }
                />
                <view style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '50%',
                }}>
                    <Input style={{
                        width: '40%',
                    }}
                        
                        placeholder='Data'
                    />
                    <Input style={{
                        width: '40%',
                    }}
                        placeholder='CVV'
                    />
                </view>
            </View>
        );
    }
}

export { NewCreditCard };
NewCreditCard.story = {
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
