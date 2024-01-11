import React from 'react';

import {
  CategoryButton,
  CategoryImage,
  CategoryList,
  CategoryName,
  Container,
} from './styles';

import { categoryData } from '../../constants/mocks';
import { SIZES } from '../../constants';

type CategoryProps = {
  name: string;
  image: string;
};

const CategoryCard: React.FC<CategoryProps> = ({ name, image }) => {
  return (
    <CategoryButton>
      <CategoryImage source={{ uri: image }} />
      <CategoryName>{name}</CategoryName>
    </CategoryButton>
  );
};

const Categories: React.FC = () => {
  return (
    <Container>
      <CategoryList
        data={categoryData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <CategoryCard {...item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: SIZES.height(2) }}
      />
    </Container>
  );
};

export default Categories;
