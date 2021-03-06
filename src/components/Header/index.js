import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import Constants from 'config/constants';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

import { useNavigation, useNavigationState } from 'react-navigation-hooks';
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
  const { navigate } = useNavigation();
  const navigation = useNavigation();
  const { routeName } = useNavigationState();
  const userInfo = useSelector((state) => state.getUserInfo.userInfo);
  return routeName == 'HomeScreen' ? (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.logoImage}
        source={require('assets/images/logo-closeer-black.png')}
      />
      <View style={styles.userInformationContainer}>
        <Text style={styles.userInformationText}>
          Olá, {userInfo.first_name}
        </Text>
        <TouchableOpacity
          style={styles.userImageContainer}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image
            resizeMode="cover"
            style={styles.userImage}
            source={{ uri: userInfo.avatar }}
          />
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigate('HomeScreen')}>
        <Ionicons
          name="ios-arrow-round-back"
          size={Constants.Fonts.xLargeFontSize}
          color={Constants.Colors.closeerPrimaryText}
        />
      </TouchableOpacity>
      {userInfo.avatar ? (
        <View style={styles.userInformationContainer}>
          <Text style={styles.userInformationText}>
            {routeName == 'HomeScreen' && 'Olá,'}
            {userInfo.first_name}
          </Text>
          <TouchableOpacity
            style={styles.userImageContainer}
            onPress={async () => {
              navigation.openDrawer();
            }}>
            <Image
              resizeMode="cover"
              style={styles.userImage}
              source={{ uri: userInfo.avatar }}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <Image
          resizeMode="contain"
          style={styles.logoImage}
          source={require('assets/images/logo-closeer-black.png')}
        />
      )}
    </View>
  );
}
