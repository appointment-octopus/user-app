import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { Chat }  from './atom/icons';
import Svg from './atom/Button';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font'
import { FiraSans_400Regular, FiraSans_500Medium } from '@expo-google-fonts/fira-sans';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { HindMadurai_300Light } from '@expo-google-fonts/hind-madurai';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';

function App() {
  let [fontsLoaded] = useFonts( {
    HindMadurai_300Light, Montserrat_700Bold, Roboto_400Regular, FiraSans_500Medium, FiraSans_400Regular
  } );

  let fontSize = 24;
  let paddingVertical = 6;

  if ( !fontsLoaded ) {
    return <AppLoading />;
  } else {
    return (
        <Container>
            <Title color="palevioletred">Expo with 💅 Styled Components</Title>
            <Title color="chocolate">iOS • Android • web</Title>
            <Chat width={15} height={20} fill='red' />
            <Svg />
        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'HindMadurai_300Light',
          }}>
          Hind Madurai Light
        </Text>
        </Container>
    );
  }
}

const Container = styled( View )`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled( Text )`
  font-size: 24px;
  font-weight: 500;
  color: ${( props ) => props.color};
`;

export default App;