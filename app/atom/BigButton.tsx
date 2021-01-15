import React from 'react';
import { TouchableOpacity } from 'react-native';
import Button from './Button'

// import { color } from '../theme';

export default function BigButton({ children }) {
    return (
        <TouchableOpacity>
            <Button>
                {children}
            </Button >
        </TouchableOpacity>
    );
}

// https://www.figma.com/file/jvLCps7aAuxsvHVv1j9x7D/Appointment-Octopus?node-id=47%3A6