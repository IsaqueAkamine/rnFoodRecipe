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

import { SIZES } from '../../constants';

export type CategoryProps = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

type CategoriesProps = {
  categories: CategoryProps[];
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<string>>;
};

type CategoryCardProps = {
  category: CategoryProps;
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<string>>;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  activeCategory,
  setActiveCategory,
}) => {
  let isActive = category.strCategory === activeCategory;
  return (
    <CategoryButton
      key={category.idCategory}
      onPress={() => setActiveCategory(category.strCategory)}
    >
      <CategoryImageContainer isActive={isActive}>
        <CategoryImage source={{ uri: category.strCategoryThumb }} />
      </CategoryImageContainer>
      <CategoryName>{category.strCategory}</CategoryName>
    </CategoryButton>
  );
};

const Categories: React.FC<CategoriesProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <Container entering={FadeInDown.duration(500).springify()}>
      <CategoryList
        data={categories}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <CategoryCard
            category={item}
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: SIZES.height(2),
          paddingHorizontal: SIZES.height(2),
        }}
      />
    </Container>
  );
};

export default Categories;
