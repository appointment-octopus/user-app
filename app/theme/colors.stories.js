import { color } from './index';
import { config, withDesign } from 'storybook-addon-designs';
import * as React from 'react';
import { View } from 'react-native';

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

const circleStyle = {
    borderRadius: 1000,
    width: 44,
    height: 44,
    justifyContent: 'center',
    display: 'inline-block', float: 'left', position: 'relative',
    margin: '0.1em'
}

export const gray = () => {
    return (
        <View style={{width: '100%', display: 'inline-block'}}>
            <View style={{ ...circleStyle, backgroundColor: color.gray.light[1] }}>{}</View>
            <View style={{ ...circleStyle, backgroundColor: color.gray.light[2] }}>{}</View>
            <View style={{ ...circleStyle, backgroundColor: color.gray.light[3] }}>{}</View>
            <View style={{ ...circleStyle, backgroundColor: color.gray.dark[1] }}>{}</View>
            <View style={{ ...circleStyle, backgroundColor: color.gray.dark[2] }}>{}</View>
            <View style={{ ...circleStyle, backgroundColor: color.gray.dark[3] }}>{}</View>
        </View>
    );
}

export const primary = () => {
    return (
        <View style={{ width: '100%', display: 'inline-block' }}>
            <View style={{ ...circleStyle, backgroundColor: color.primary.dark }}>{ }</View>
            <View style={{ ...circleStyle, backgroundColor: color.primary.purple }}>{ }</View>
            <View style={{ ...circleStyle, backgroundColor: color.primary.blue }}>{ }</View>
            <View style={{ ...circleStyle, backgroundColor: color.primary.green }}>{ }</View>
        </View>
    );
}

export const highlight = () => {
    return (
        <View style={{ width: '100%', display: 'inline-block' }}>
            <View style={{ ...circleStyle, backgroundColor: color.highlight.green}}>{ }</View>
            <View style={{ ...circleStyle, backgroundColor: color.highlight.yellow}}>{ }</View>
            <View style={{ ...circleStyle, backgroundColor: color.highlight.cyan}}>{ }</View>
        </View>
    );
}

export const control = () => {
    return (
        <View style={{ width: '100%', display: 'inline-block' }}>
            <View style={{ ...circleStyle, backgroundColor: color.control.green }}>{ }</View>
            <View style={{ ...circleStyle, backgroundColor: color.control.red }}>{ }</View>
        </View>
    );
}

export const Bg = () => {
    return (
        <View style={{ position: 'absolute', height: '100vh', width: '100%' }}>
            <View style={{ background: color['bg'], height: '100%', width: '100%' }}>{ }</View>
        </View>
    );
}

export default {
    title: 'Theme/Colors',
    decorators: [withDesign],
    parameters: { ...figmaDesign }
}
