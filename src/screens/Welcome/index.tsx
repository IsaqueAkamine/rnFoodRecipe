import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSharedValue, withSpring } from 'react-native-reanimated';

import { StackNavigation } from '../../routes/AppStack';
import { SIZES } from '../../constants';

import {
  Container,
  ImagePizza,
  InfoContainer,
  InfoText,
  InfoTitle,
  RingContainer,
} from './styles';

const Welcome: React.FC = () => {
  const ring1Padding = useSharedValue(0);
  const ring2Padding = useSharedValue(0);

  const navigation = useNavigation<StackNavigation>();

  useEffect(() => {
    ring1Padding.value = 0;
    ring2Padding.value = 0;

    setTimeout(() => {
      ring1Padding.value = withSpring(ring1Padding.value + SIZES.height(4.5));
    }, 100);
    setTimeout(() => {
      ring2Padding.value = withSpring(ring2Padding.value + SIZES.height(5));
    }, 300);

    setTimeout(() => {
      navigation.navigate('Home');
    }, 2500);
  }, []);

  return (
    <Container>
      <StatusBar barStyle={'light-content'} />

      {/* logo image with rings */}
      <RingContainer style={{ padding: ring2Padding }}>
        <RingContainer style={{ padding: ring1Padding }}>
          <ImagePizza source={require('../../assets/images/welcome.png')} />
        </RingContainer>
      </RingContainer>

      {/* title and puchline */}
      <InfoContainer>
        <InfoTitle>Foody</InfoTitle>
        <InfoText>Food is always right</InfoText>
      </InfoContainer>
    </Container>
  );
};

export default Welcome;
