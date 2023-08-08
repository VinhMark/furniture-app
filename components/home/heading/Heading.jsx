import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../constants';
import styles from './heading.style';
import { useNavigation } from '@react-navigation/native';

const Heading = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headingContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>New Rivals</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ProductList')}>
          <Ionicons name='ios-grid' size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heading;
