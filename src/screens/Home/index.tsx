import React from 'react';
import { StatusBar } from 'react-native';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';

import { SIZES } from '../../constants';

import {
  AvatarImage,
  Container,
  GreetingsContainer,
  GreetingsText,
  HeaderContainer,
  InfoContainer,
  PunchlineContainer,
  PunchlineText,
  PunchlineText2,
  SearchContainer,
  SearchIconContainer,
  SearchInput,
  StyledScrollView,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <StatusBar barStyle={'dark-content'} />
      <StyledScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <HeaderContainer>
          <AvatarImage source={require('../../assets/images/avatar.png')} />
          <BellIcon size={SIZES.height(4)} color="gray" />
        </HeaderContainer>

        {/* Greetings */}
        <GreetingsContainer>
          <GreetingsText>Hello, John!</GreetingsText>
        </GreetingsContainer>

        {/* Punchline */}
        <InfoContainer>
          <PunchlineText>Make your own food,</PunchlineText>
          <PunchlineContainer>
            <PunchlineText>stay at </PunchlineText>
            <PunchlineText2>home</PunchlineText2>
          </PunchlineContainer>
        </InfoContainer>

        {/* Search recipe */}
        <SearchContainer>
          <SearchInput
            placeholder="Search any recipe"
            placeholderTextColor={'gray'}
          />
          <SearchIconContainer>
            <MagnifyingGlassIcon
              size={SIZES.height(2)}
              color="gray"
              strokeWidth={3}
            />
          </SearchIconContainer>
        </SearchContainer>

        {/* Categories */}
      </StyledScrollView>
    </Container>
  );
};

export default Home;
