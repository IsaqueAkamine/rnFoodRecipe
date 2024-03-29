import React, { useState } from 'react';

import { Container, IconButton } from './styles';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { SIZES } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { FadeIn } from 'react-native-reanimated';

const Header: React.FC = () => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Container entering={FadeIn.delay(200).duration(1000)}>
      <IconButton onPress={() => navigation.goBack()}>
        <ChevronLeftIcon
          size={SIZES.height(3.5)}
          strokeWidth={4.5}
          color={'#FBBF24'}
        />
      </IconButton>
      <IconButton onPress={() => setIsFavorite(!isFavorite)}>
        <HeartIcon
          size={SIZES.height(3.5)}
          strokeWidth={4.5}
          color={isFavorite ? 'red' : 'gray'}
        />
      </IconButton>
    </Container>
  );
};

export default Header;
