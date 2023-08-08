import { Image, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import SafeAreaView from '../../components/layout/SafeAreaView';
import { COLORS, SIZES } from '../../constants';
import { Feather, Ionicons } from '@expo/vector-icons';

import styles from './search.style';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import { SearchTitle } from '../../components/products';

const Search = () => {
  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://192.168.1.13:3000/api/products/search/' + searchKey);
      setSearchResults(response.data);
    } catch (error) {
      console.log('Failed search product,', error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name='camera-outline' size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder='What are you looking for?'
          />
        </View>
        {/*  */}
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => handleSearch()}>
            <Feather name='search' size={SIZES.xLarge} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>

      {searchResults.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image source={require('../../assets/images/Pose23.png')} style={styles.searchImage} />
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item._id}
          ItemSeparatorComponent={<View style={{ height: 10 }} />}
          renderItem={({ item }) => <SearchTitle product={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
