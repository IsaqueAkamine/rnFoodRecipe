import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

import { COLORS, SIZES } from '../../constants';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.backgroundAmber500};
  gap: ${SIZES.height(1)}px;
`;

export const RingContainer = styled(Animated.View)`
  background-color: ${COLORS.white}60;
  border-radius: 200px;
`;

export const ImagePizza = styled.Image`
  width: ${SIZES.height(20)}px;
  height: ${SIZES.height(20)}px;
`;

export const InfoContainer = styled.View`
  align-items: center;
  padding: 2% 0;
  gap: ${SIZES.height(1)}px;
`;

export const InfoTitle = styled.Text`
  font-weight: bold;
  font-size: ${SIZES.height(7)}px;
  letter-spacing: 2px;
  color: ${COLORS.white};
`;

export const InfoText = styled.Text`
  font-weight: 500;
  font-size: ${SIZES.height(2)}px;
  letter-spacing: 2px;
  color: ${COLORS.white};
`;
