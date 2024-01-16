import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, RecipeDetailScreen, Welcome } from '../screens';
import { MealsProps } from '../components/Recipes';

// export type ScreenNames = ['Welcome', 'Home', { RecipeDetail: { item: {} } }];
// export type RootStackParamList = Record<ScreenNames[number], {}>;
export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  RecipeDetail: { item: MealsProps };
};
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
    </Stack.Navigator>
  );
}
