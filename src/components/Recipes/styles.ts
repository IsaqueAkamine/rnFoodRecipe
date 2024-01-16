import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { COLORS, SIZES } from '../../constants';

type ImageProps = {
  isThirdItem: boolean;
};

export const Container = styled.View`
  padding: ${SIZES.height(2)}px;
`;

export const Title = styled.Text`
  font-size: ${SIZES.height(3)}px;
  font-weight: 600;
  color: ${COLORS.textNeutral600};
`;

export const RecipeCardContainer = styled(Animated.View)`
  margin: ${SIZES.height(1)}px 0;
`;

export const RecipeButtonImage = styled.Pressable`
  margin: 0 0 ${SIZES.height(0.5)}px 0;
  width: 100%;
  justify-content: center;
`;

export const RecipeImage = styled(Animated.Image)<ImageProps>`
  width: 100%;
  height: ${(props) =>
    props.isThirdItem ? SIZES.height(25) : SIZES.height(35)}px;
  border-radius: ${SIZES.height(3.5)}px;
  background-color: ${COLORS.black}10;
`;

export const RecipeName = styled.Text`
  font-size: ${SIZES.height(1.5)}px;
  font-weight: 600;
  color: ${COLORS.textNeutral600};
`;
