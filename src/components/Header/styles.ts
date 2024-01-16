import styled from 'styled-components/native';
import { COLORS, SIZES } from '../../constants';
import Animated from 'react-native-reanimated';

export const Container = styled(Animated.View)`
  position: absolute;
  z-index: 10;
  width: 100%;
  margin: ${SIZES.height(5)}px 0 0 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconButton = styled.TouchableOpacity`
  padding: ${SIZES.height(1)}px;
  background-color: ${COLORS.white};
  border-radius: ${SIZES.height(3)}px;
  justify-content: center;
  align-items: center;
  margin: 0 ${SIZES.height(2.5)}px;
`;
