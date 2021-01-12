import React from 'react';
import { ReactComponent as Star } from '../assets/icon.svg'
import { storiesOf } from '@storybook/react-native';

export const App = () => (
    <Star />
)

// On-Device Register
storiesOf('SVG', module).add('SVG', App);
export default {
    title: 'SVG',
};
