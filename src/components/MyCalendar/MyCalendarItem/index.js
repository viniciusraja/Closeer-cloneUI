import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

import Constants from 'config/constants';
import { styles } from './styles';
import { Ionicons, AntDesign } from '@expo/vector-icons';
export default function MyCalendarItem(props) {
  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={async () => {
        await SecureStore.deleteItemAsync('userToken');
        await SecureStore.deleteItemAsync('userId');
      }}>
      <Ionicons
        name={props.iconName}
        size={Constants.Fonts.mainButtonsIconSize}
        color="black"
      />
      <Text style={styles.dayNumberText}>{props.dayNumber}</Text>
      <Text style={styles.dayNameText}>{props.dayName}</Text>
      <View style={styles.workPeriodContainer}>
        <Text style={styles.workPeriodText}>M</Text>
        <Text style={styles.workPeriodText}>T</Text>
        <Text style={styles.workPeriodText}>N</Text>
      </View>
    </TouchableOpacity>
  );
}
