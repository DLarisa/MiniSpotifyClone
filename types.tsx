/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Auth: NavigatorScreenParams<RootTabParamList> | undefined;
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  AlbumScreen: NavigatorScreenParams<RootTabParamList> | undefined;
  Add: undefined;
  LogOut: undefined;
  SignUp: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabThree: undefined;
  TabFour: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type IAlbumCategory = {
  id: number;
  title: string;
  albums: Album[];
};

export type Album = {
  id: string;
  name: string;
  by: string;
  uri: string;
  imageUri: string;
  artistHeadline: string;
  numberOfLikes: number;
  //songs: Song[];
};

export type Song = {
  id: string;
  uri: string;
  imageUri: string;
  title: string;
  artist: string;
};