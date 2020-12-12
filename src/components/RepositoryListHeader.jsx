import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

import SortRepositoriesSelector from './SortRepositoriesSelector';

const RepositoryListHeader = ({ searchQuery, setSearchQuery, setSortOrder }) => (
  <View>
    <Searchbar
      placeholder='Search'
      onChangeText={query => setSearchQuery(query)}
      value={searchQuery}
      style={styles.searchBar}
    />
    <SortRepositoriesSelector setSortOrder={setSortOrder} />
  </View>
);

const styles = StyleSheet.create({
  searchBar: {
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
  }
});

export default RepositoryListHeader;