import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import axios from 'axios';

import Categories from '../../components/Categories';
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
import Recipes from '../../components/Recipes';

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Beef');
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        'https://themealdb.com/api/json/v1/1/categories.php'
      );
      if (response && response.data) {
        setCategories(response.data.categories);
      }
    } catch (error) {
      console.log('Error', error.message);
    }
  };

  const getRecipes = async (category = 'Beef') => {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      // console.log('get recipes', response.data);
      if (response && response.data) {
        setMeals(response.data.meals);
      }
    } catch (error) {
      console.log('Error', error.message);
    }
  };

  useEffect(() => {
    getCategories();
    getRecipes();
  }, []);

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
        {categories.length > 0 && (
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        )}

        {/* Recipes */}
        <Recipes meals={meals} categories={categories} />
      </StyledScrollView>
    </Container>
  );
};

export default Home;
