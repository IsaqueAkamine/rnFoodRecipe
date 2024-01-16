import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FadeInDown } from 'react-native-reanimated';
import MasonryList from '@react-native-seoul/masonry-list';

import { StackNavigation } from '../../routes/AppStack';
import { SIZES } from '../../constants';
import { CategoryProps } from '../Categories';
import Loading from '../Loading';

import {
  Container,
  RecipeButtonImage,
  RecipeCardContainer,
  RecipeImage,
  RecipeName,
  Title,
} from './styles';

export type MealsProps = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

type RecipeCardProps = {
  item: MealsProps;
  index: number;
};

type RecipeProps = {
  meals: MealsProps[];
  categories: CategoryProps[];
};

const RecipeCard: React.FC<RecipeCardProps> = ({ item, index }) => {
  const navigation = useNavigation<StackNavigation>();
  const isThirdItem = index % 3 === 0;

  return (
    <RecipeCardContainer
      key={index.toString()}
      entering={FadeInDown.delay(index * 100)
        .duration(600)
        .springify()
        .damping(20)}
    >
      <RecipeButtonImage
        onPress={() => navigation.navigate('RecipeDetail', { item: item })}
      >
        <RecipeImage
          source={{ uri: item.strMealThumb }}
          isThirdItem={isThirdItem}
          sharedTransitionTag={item.strMeal}
        />
      </RecipeButtonImage>
      <RecipeName>
        {item.strMeal.length > 20
          ? item.strMeal.slice(0, 20) + '...'
          : item.strMeal}
      </RecipeName>
    </RecipeCardContainer>
  );
};

const Recipes: React.FC<RecipeProps> = ({ meals, categories }) => {
  return (
    <Container>
      <Title>Recipes</Title>

      <View>
        {categories.length == 0 || meals.length == 0 ? (
          <Loading size={'large'} style={{ marginTop: SIZES.height(10) }} />
        ) : (
          <MasonryList
            data={meals}
            keyExtractor={(item): string => item.idMeal}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, i }) => <RecipeCard item={item} index={i} />}
            // refreshing={isLoadingNext}
            // onRefresh={() => refetch({ first: ITEM_CNT })}
            onEndReachedThreshold={0.1}
            // onEndReached={() => loadNext(ITEM_CNT)}
            style={{ gap: SIZES.height(1.7) }}
          />
        )}
      </View>
    </Container>
  );
};

export default Recipes;
