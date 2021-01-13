import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { Chat }  from './atom/icons/Icons';

export default function App() {
    return (
        <Container>
            <Title color="palevioletred">Expo with 💅 Styled Components</Title>
            <Title color="chocolate">iOS • Android • web</Title>
            <Chat width={15} height={20} fill='red' />
        </Container>
    );
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