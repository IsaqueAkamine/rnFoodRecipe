import React, { Dispatch, SetStateAction } from 'react';

import { FadeInDown } from 'react-native-reanimated';

import {
  CategoryButton,
  CategoryImage,
  CategoryImageContainer,
  CategoryList,
  CategoryName,
  Container,
} from './styles';

import { categoryData } from '../../constants/mocks';
import { SIZES } from '../../constants';

type CategoriesProps = {
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<string>>;
};

type CategoryCardProps = {
  name: string;
  image: string;
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<string>>;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  image,
  activeCategory,
  setActiveCategory,
}) => {
  let isActive = name === activeCategory;
  return (
    <CategoryButton key={name} onPress={() => setActiveCategory(name)}>
      <CategoryImageContainer isActive={isActive}>
        <CategoryImage source={{ uri: image }} />
      </CategoryImageContainer>
      <CategoryName>{name}</CategoryName>
    </CategoryButton>
  );
};

const Categories: React.FC<CategoriesProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <Container entering={FadeInDown.duration(500).springify()}>
      <CategoryList
        data={categoryData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <CategoryCard
            {...item}
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: SIZES.height(2) }}
      />
    </Container>
  );
};

export default Categories;
