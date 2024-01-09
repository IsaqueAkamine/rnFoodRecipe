import styled from 'styled-components/native';
import { COLORS, SIZES } from '../../constants';

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.white};
`;

export const StyledScrollView = styled.ScrollView`
  padding: ${SIZES.height(5)}px ${SIZES.height(2)}px ${SIZES.height(2)}px
    ${SIZES.height(2)}px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AvatarImage = styled.Image`
  height: ${SIZES.height(5)}px;
  width: ${SIZES.height(5)}px;
`;

export const GreetingsContainer = styled.View`
  margin: ${SIZES.height(2)}px 0 ${SIZES.height(1)}px 0;
`;

export const GreetingsText = styled.Text`
  font-size: ${SIZES.height(1.7)}px;
  color: ${COLORS.textNeutral600};
`;

export const InfoContainer = styled.View``;

export const PunchlineText = styled.Text`
  font-weight: 600;
  font-size: ${SIZES.height(3.8)}px;
  color: ${COLORS.textNeutral600};
`;

export const PunchlineContainer = styled.View`
  flex-direction: row;
`;

export const PunchlineText2 = styled.Text`
  font-weight: 600;
  font-size: ${SIZES.height(3.8)}px;
  color: ${COLORS.textAmber400};
`;

export const SearchContainer = styled.View`
  margin: ${SIZES.height(2.5)}px 0 0 0;
  flex-direction: row;
  align-items: center;
  border-radius: ${SIZES.height(4)}px;
  background-color: ${COLORS.black}10;
  padding: ${SIZES.height(0.5)}px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: ${SIZES.height(1.7)}px;
  letter-spacing: 0.8px;
  padding-left: ${SIZES.height(1.5)}px;
`;

export const SearchIconContainer = styled.View`
  background-color: ${COLORS.white};
  border-radius: ${SIZES.height(4)}px;
  padding: ${SIZES.height(1)}px;
  opacity: 0.9;
`;
