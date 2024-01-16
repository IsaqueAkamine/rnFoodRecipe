import styled from 'styled-components/native';
import { COLORS, SIZES } from '../../constants';
import Animated from 'react-native-reanimated';

export const Container = styled.ScrollView`
  background-color: ${COLORS.white};
  flex: 1;
`;

export const Title = styled.Text``;

export const ImageContainer = styled.View`
  justify-content: center;
  flex-direction: row;
`;

export const RecipeImage = styled(Animated.Image)`
  width: ${SIZES.width(98)}px;
  height: ${SIZES.height(50)}px;
  border-radius: ${SIZES.height(4.5)}px;
  background-color: ${COLORS.black}10;
  border-bottom-left-radius: ${SIZES.height(4)}px;
  margin-top: ${SIZES.height(0.4)}px;
`;

export const RecipeContainer = styled.View`
  padding: ${SIZES.height(2)}px;
  justify-content: space-between;
`;

export const InfoContainer = styled(Animated.View)`
  gap: ${SIZES.height(1)}px;
  margin-bottom: ${SIZES.height(2)}px;
`;

export const RecipeTitle = styled.Text`
  flex: 1;
  font-size: ${SIZES.height(3)}px;
  font-weight: bold;
  color: ${COLORS.textNeutral700};
`;

export const RecipeDescription = styled.Text`
  flex: 1;

  font-size: ${SIZES.height(2)}px;
  font-weight: 500;
  color: ${COLORS.textNeutral500};
`;

export const RecipeDescriptionContainer = styled.View``;

export const MiscContainer = styled(Animated.View)`
  flex-direction: row;
  justify-content: space-around;
`;

export const RoundedIconOutside = styled.View`
  border-radius: ${SIZES.height(6)}px;
  background-color: ${COLORS.bgAmber300};
  padding: ${SIZES.height(0.6)}px;
  align-items: center;
`;

export const RoundedIconInside = styled.View`
  border-radius: ${SIZES.height(6)}px;
  background-color: ${COLORS.white};
  align-items: center;
  justify-content: center;
  width: ${SIZES.height(6.5)}px;
  height: ${SIZES.height(6.5)}px;
`;

export const RoundedDescriptionContainer = styled.View`
  padding: ${SIZES.height(1)}px 0;
  gap: ${SIZES.height(1)}px;
  align-items: center;
`;

export const IconTitle = styled.Text`
  font-size: ${SIZES.height(2)}px;
  font-weight: bold;
  color: ${COLORS.textNeutral700};
`;

export const IconDescription = styled.Text`
  font-size: ${SIZES.height(1.3)}px;
  font-weight: bold;
  color: ${COLORS.textNeutral700};
`;

export const IngredientsContainer = styled(Animated.View)`
  padding-top: ${SIZES.height(2)}px;
`;

export const IngredientsTitle = styled.Text`
  font-size: ${SIZES.height(2.5)}px;
  font-weight: bold;
  color: ${COLORS.textNeutral700};
`;

export const IngredientsListContainer = styled.View`
  padding: ${SIZES.height(1)}px 0;
  margin: 0 0 0 ${SIZES.height(1)}px;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  padding: ${SIZES.height(0.5)}px;
  padding-left: 0;
  align-items: center;
  gap: ${SIZES.height(1)}px;
`;

export const DotContainer = styled.View`
  height: ${SIZES.height(1.5)}px;
  width: ${SIZES.height(1.5)}px;
  background-color: ${COLORS.bgAmber300};
  border-radius: ${SIZES.height(1)}px;
`;

export const IngredientsInfoContainer = styled.View`
  flex-direction: row;
  gap: ${SIZES.height(1)}px;
`;

export const IngredientMeasure = styled.Text`
  font-size: ${SIZES.height(1.7)}px;
  font-weight: 800;
  color: ${COLORS.textNeutral600};
`;

export const IngredientDescription = styled.Text`
  font-size: ${SIZES.height(1.7)}px;
  font-weight: 500;
  color: ${COLORS.textNeutral600};
`;

// Instructions

export const InstructionsContainer = styled(Animated.View)`
  padding-top: ${SIZES.height(2)}px;
`;

export const InstructionsTitle = styled.Text`
  font-size: ${SIZES.height(2.5)}px;
  font-weight: bold;
  color: ${COLORS.textNeutral700};
`;

export const InstructionsDescription = styled.Text`
  font-size: ${SIZES.height(1.6)}px;
  color: ${COLORS.textNeutral700};
`;

// Recipe Video

export const RecipeVideoContainer = styled(Animated.View)`
  padding: ${SIZES.height(2)}px 0;
`;

export const RecipeText = styled.Text`
  font-size: ${SIZES.height(2.5)}px;
  font-weight: bold;
  color: ${COLORS.textNeutral700};
`;
