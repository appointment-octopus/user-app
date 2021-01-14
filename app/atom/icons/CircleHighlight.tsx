import React from 'react';
import { TouchableOpacity } from 'react-native';
import { color } from '../../theme';

export default function CircleHighlight( { children } ) {
    return (
        <TouchableOpacity style={{
            borderWidth: 1,
            borderColor: color.highlight.cyan,
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 50,
        }}>
            {children}
        </TouchableOpacity>
    );
}