import styled from 'styled-components/native';
import { COLORS, SIZES } from '../../constants';

export const Container = styled.View``;

export const CategoryList = styled.FlatList`
  padding-left: ${SIZES.height(2)}px;
`;

export const CategoryButton = styled.TouchableOpacity`
  align-items: center;
  border-radius: ${SIZES.height(6)}px;
  gap: ${SIZES.height(0.5)}px;
`;

export const CategoryImage = styled.Image`
  width: ${SIZES.height(6)}px;
  height: ${SIZES.height(6)}px;
  border-radius: ${SIZES.height(6)}px;
`;

export const CategoryName = styled.Text`
  color: ${COLORS.textNeutral600};
  font-size: ${SIZES.height(1.6)}px;
`;
