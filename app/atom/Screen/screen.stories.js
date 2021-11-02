import React from 'react'
import AppLoading from 'expo-app-loading';
import { config, withDesign } from 'storybook-addon-designs';
import { View, TextInput, Text } from 'react-native';
import { color, font } from '../../theme';
import { useFonts } from 'expo-font'
import { FiraSans_500Medium, FiraSans_400Regular } from '@expo-google-fonts/fira-sans';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { HindMadurai_300Light } from '@expo-google-fonts/hind-madurai';
import { Input } from 'react-native-elements';
import BigButton from '../BigButton';
import { ArrowLeft } from '../icons';
import { ConsultCardOnline, ConsultCardPresential, ContinueButton, Hour, MonthYear, WeekDay } from '../atoms.stories';

const days = [
    {
        number: 9,
        label: 'seg',
    },
    {
        number: 10,
        label: 'ter',
    },
    {
        number: 11,
        label: 'qua',
    },
    {
        number: 12,
        label: 'qui',
    },
    {
        number: 13,
        label: 'sex',
    },
    {
        number: 14,
        label: 'sab',
    }
]

const hour = [
    {hour: '09:00'},
    {hour: '12:00'},
    {hour: '15:00'},
]

function StartApp() {
    let [fontsLoaded] = useFonts({
        HindMadurai_300Light, Montserrat_700Bold, Roboto_400Regular, FiraSans_500Medium, FiraSans_400Regular
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{
                backgroundColor: '#444E74',
                height: '100vh', width: '100vw',
                display: 'flex',
                alignItems: 'flex-end',
                alignContent: 'space-between'

            }}>
                <View style={{
                    width:'207px', 
                    height: '52px',
                    position: 'absolute',
                    bottom:'0',
                    padding: '15px',
                }}>
                    <BigButton
                        height='100%'
                        text='COMEÇAR'
                    />
                </View>
            </View>
        );
    }
}
export { StartApp };
StartApp.story = {
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

function DataAndHour() {
    let [fontsLoaded] = useFonts({
        HindMadurai_300Light, Montserrat_700Bold, Roboto_400Regular, FiraSans_500Medium, FiraSans_400Regular
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{
                background: color['bg'], 
                height: '100vh', width: '100vw',

            }}>
                <View style={{
                    padding: '15px',
                    width:'100%', height: '100%',
                    display: 'flex',
                }}>
                    <View style={{
                        display: 'flex',
                        paddingBottom: '30px',
                        position: 'relative', top:'0'
                    }}>
                        <ArrowLeft style={{
                            width: '34px',
                            height: '34px',
                            marginBottom: '15px',
                        }}/>

                        <Text
                            style={{
                                fontSize: '30px',
                                paddingVertical: '',
                                // Note the quoting of the value for `fontFamily` here; it expects a string!
                                fontFamily: 'Montserrat_700Bold',
                            }}>
                            Escolha data e hora desejada
                        </Text>
                    </View>

                    <View style={{
                        width: '100%', height: '35%',
                        display: 'flex',
                        marginTop: '15%',
                        marginBottom: 'auto',
                        justifyContent: 'space-around'
                    }}>

                        <MonthYear />

                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                        }}>
                            {days.map(({label, number}) => (
                                <WeekDay 
                                    label={label}
                                    number={number}
                                />
                            ))}
                        </View>

                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                        }}>
                            {hour.map(({hour}) => (
                                <Hour 
                                    hour = {hour}
                                />
                            ))}
                        </View>

                    </View>
                
                    <View style={{
                            position: 'absolute',
                            bottom: '0',
                            padding: '15px',
                        }}>
                            <BigButton />
                    </View>
                </View>
            </View>
        );
    }
}
export { DataAndHour };
DataAndHour.story = {
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

function ConsultType() {
    let [fontsLoaded] = useFonts({
        HindMadurai_300Light, Montserrat_700Bold, Roboto_400Regular, FiraSans_500Medium, FiraSans_400Regular
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{
                background: color['bg'], 
                height: '100vh', width: '100vw',

            }}>
                <View style={{
                    //padding: '15px',
                    width:'100%', height: '100%',
                    display: 'flex',
                }}>
                    <View style={{
                        display: 'flex',
                        padding: '15px',
                        paddingBottom: '30px',
                        position: 'relative', top:'0'
                    }}>
                        <ArrowLeft style={{
                            width: '34px',
                            height: '34px',
                            marginBottom: '15px',
                        }}/>

                        <Text
                            style={{
                                padding: '15px',
                                fontSize: '30px',
                                paddingVertical: '',
                                // Note the quoting of the value for `fontFamily` here; it expects a string!
                                fontFamily: 'Montserrat_700Bold',
                            }}>
                            Escolha o tipo de consulta
                        </Text>
                    </View>

                    <View style={{
                        width: '100%', height: '35%',
                        display: 'flex',
                        marginTop: '15%',
                        marginBottom: 'auto',
                        justifyContent: 'space-around'
                    }}>

                        <ConsultCardOnline />
                        <ConsultCardPresential />

                    </View>
                
                    <View style={{
                            position: 'absolute',
                            bottom: '0',
                            padding: '15px',
                        }}>
                            <BigButton />
                    </View>
                </View>
            </View>
        );
    }
}
export { ConsultType };
ConsultType.story = {
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
    title: 'Atoms/Screen',
    decorators: [withDesign],
    // parameters: {
    // docs: { page: Docs }
    // }
}
