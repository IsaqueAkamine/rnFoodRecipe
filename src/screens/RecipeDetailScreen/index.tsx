import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { ClockIcon, FireIcon } from 'react-native-heroicons/outline';
import { UsersIcon, Square3Stack3DIcon } from 'react-native-heroicons/solid';
import YoutubeIframe from 'react-native-youtube-iframe';

import { RootStackParamList } from '../../routes/AppStack';
import { SIZES } from '../../constants';
import Header from '../../components/Header';
import Loading from '../../components/Loading';

import {
  Container,
  DotContainer,
  IconDescription,
  IconTitle,
  ImageContainer,
  InfoContainer,
  IngredientDescription,
  IngredientMeasure,
  IngredientsContainer,
  IngredientsInfoContainer,
  IngredientsListContainer,
  IngredientsTitle,
  InstructionsContainer,
  InstructionsDescription,
  InstructionsTitle,
  ItemContainer,
  MiscContainer,
  RecipeContainer,
  RecipeDescription,
  RecipeImage,
  RecipeText,
  RecipeTitle,
  RecipeVideoContainer,
  RoundedDescriptionContainer,
  RoundedIconInside,
  RoundedIconOutside,
} from './styles';

type RecipeDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'RecipeDetail'
>;

type MealProps = {
  strMeal: string;
  strArea: string;
  strMeasure: string;
  strIngredient: string;
  strInstructions: string;
  strYoutube: string;
};

const RecipeDetailScreen: React.FC = () => {
  const route = useRoute<RecipeDetailScreenRouteProp>();
  const { item } = route.params;
  const [meal, setMeal] = useState<MealProps>([]);
  const [loading, setLoading] = useState(true);

  const ingredientsIndexes = (meal) => {
    if (!meal) {
      return [];
    }
    let indexes = [];
    for (let i = 1; i <= 20; i++) {
      if (meal['strIngredient' + i]) {
        indexes.push(i);
      }
    }
    return indexes;
  };

  const getMealData = async (id: string) => {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      console.log('id', id);

      if (response && response.data) {
        setMeal(response.data.meals[0]);
      }
    } catch (error) {
      console.log('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  const getYoutubeVideoId = (url: string) => {
    const regex = /[?&]v=([^&]+)/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    }
    return '';
  };

  useEffect(() => {
    getMealData(item.idMeal);
  }, []);

  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: SIZES.height(10),
        // alignItems: 'center',
      }}
    >
      <Header />
      <StatusBar barStyle={'light-content'} />
      {/* Recipe image */}
      <ImageContainer>
        <RecipeImage source={{ uri: item.strMealThumb }} />
      </ImageContainer>

      {/* Meal description */}
      {loading ? (
        <Loading
          size={'large'}
          style={{ marginTop: SIZES.height(10) }}
          color="gray"
        />
      ) : (
        <RecipeContainer>
          <InfoContainer>
            <RecipeTitle>{meal.strMeal}</RecipeTitle>
            <RecipeDescription>{meal.strArea}</RecipeDescription>
          </InfoContainer>

          <MiscContainer>
            {/* --Time-- */}
            <RoundedIconOutside>
              <RoundedIconInside>
                <ClockIcon
                  size={SIZES.height(4)}
                  strokeWidth={2.5}
                  color="#525252"
                />
              </RoundedIconInside>

              <RoundedDescriptionContainer>
                <IconTitle>35</IconTitle>
                <IconDescription>Mins</IconDescription>
              </RoundedDescriptionContainer>
            </RoundedIconOutside>
            {/* --Servings-- */}
            <RoundedIconOutside>
              <RoundedIconInside>
                <UsersIcon
                  size={SIZES.height(4)}
                  strokeWidth={2.5}
                  color="#525252"
                />
              </RoundedIconInside>

              <RoundedDescriptionContainer>
                <IconTitle>03</IconTitle>
                <IconDescription>Servings</IconDescription>
              </RoundedDescriptionContainer>
            </RoundedIconOutside>

            {/* --Calories-- */}
            <RoundedIconOutside>
              <RoundedIconInside>
                <FireIcon
                  size={SIZES.height(4)}
                  strokeWidth={2.5}
                  color="#525252"
                />
              </RoundedIconInside>

              <RoundedDescriptionContainer>
                <IconTitle>103</IconTitle>
                <IconDescription>Calories</IconDescription>
              </RoundedDescriptionContainer>
            </RoundedIconOutside>

            {/* --Difficulty-- */}
            <RoundedIconOutside>
              <RoundedIconInside>
                <Square3Stack3DIcon
                  size={SIZES.height(4)}
                  strokeWidth={2.5}
                  color="#525252"
                />
              </RoundedIconInside>

              <RoundedDescriptionContainer>
                <IconTitle></IconTitle>
                <IconDescription>Easy</IconDescription>
              </RoundedDescriptionContainer>
            </RoundedIconOutside>
          </MiscContainer>
          {/* Ingredients */}
          <IngredientsContainer>
            <IngredientsTitle>Ingredients</IngredientsTitle>
            <IngredientsListContainer>
              {ingredientsIndexes(meal).map((i) => (
                <ItemContainer key={i}>
                  <DotContainer />
                  <IngredientsInfoContainer>
                    <IngredientMeasure>
                      {meal[`strMeasure${i}`]}
                    </IngredientMeasure>
                    <IngredientDescription>
                      {meal[`strIngredient${i}`]}
                    </IngredientDescription>
                  </IngredientsInfoContainer>
                </ItemContainer>
              ))}
            </IngredientsListContainer>
          </IngredientsContainer>

          {/* Instructions */}
          <InstructionsContainer>
            <InstructionsTitle>Instructions</InstructionsTitle>
            <InstructionsDescription>
              {meal?.strInstructions}
            </InstructionsDescription>
          </InstructionsContainer>

          {/* Recipe Video */}
          {meal.strYoutube ? (
            <RecipeVideoContainer>
              <RecipeText>Recipe Video</RecipeText>
              <View>
                <YoutubeIframe
                  videoId={getYoutubeVideoId(meal.strYoutube)}
                  // videoId="nMyBC9staMU"
                  height={SIZES.height(30)}
                />
              </View>
            </RecipeVideoContainer>
          ) : (
            <></>
          )}
        </RecipeContainer>
      )}
    </Container>
  );
};

export default RecipeDetailScreen;
