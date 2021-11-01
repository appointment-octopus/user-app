import React from 'react';
import { View } from 'react-native';
import Button from './Button'
import { font, color } from '../theme'
import { ArrowRight } from './icons';

export default function BigButton({text='Continuar'}) {
    
    return (
        <Button strokeColor={color.primary.dark} backgroundColor={color.highlight.cyan}>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <font.buttonCaps1 style={{ margin: 'auto' }} textColor={color.gray.light[1]}>{text}</font.buttonCaps1>
                <ArrowRight />
            </View>
        </Button>
    );
}

// https://www.figma.com/file/jvLCps7aAuxsvHVv1j9x7D/Appointment-Octopus?node-id=47%3A6