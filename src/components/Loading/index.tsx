import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps, View } from 'react-native';

import { Container } from './styles';

type LoadingProps = ActivityIndicatorProps;

const Loading: React.FC<LoadingProps> = ({ ...props }) => {
  return (
    <Container>
      <ActivityIndicator {...props} />
    </Container>
  );
};

export default Loading;
