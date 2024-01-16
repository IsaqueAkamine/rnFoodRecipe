import React from 'react';
import { View } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';

import { mealData } from '../../constants/mocks';
import { SIZES } from '../../constants';

import {
  Container,
  RecipeButtonImage,
  RecipeCardContainer,
  RecipeImage,
  RecipeName,
  Title,
} from './styles';

type RecipeCardProps = {
  item: {
    name: string;
    image: string;
  };
  index: number;
};

const RecipeCard: React.FC<RecipeCardProps> = ({ item, index }) => {
  const isThirdItem = index % 3 === 0;

  return (
    <RecipeCardContainer key={index.toString()}>
      <RecipeButtonImage>
        <RecipeImage source={{ uri: item.image }} isThirdItem={isThirdItem} />
      </RecipeButtonImage>
      <RecipeName>
        {item.name.length > 20 ? item.name.slice(0, 20) + '...' : item.name}
      </RecipeName>
    </RecipeCardContainer>
  );
};

const Recipes: React.FC = () => {
  return (
    <Container>
      <Title>Recipes</Title>

      <View>
        <MasonryList
          data={mealData}
          keyExtractor={(item): string => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, i }) => <RecipeCard item={item} index={i} />}
          // refreshing={isLoadingNext}
          // onRefresh={() => refetch({ first: ITEM_CNT })}
          onEndReachedThreshold={0.1}
          // onEndReached={() => loadNext(ITEM_CNT)}
          style={{ gap: SIZES.height(1.7) }}
        />
      </View>
    </Container>
  );
};

export default Recipes;
