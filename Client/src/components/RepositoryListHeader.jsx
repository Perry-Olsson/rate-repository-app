import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

import SortRepositoriesSelector from './SortRepositoriesSelector';

const RepositoryListHeader = ({ searchQuery, setSearchQuery, sortOrder, setSortOrder }) => (
  <View style={{ justifyContent: 'center', height: 125}}>
    <Searchbar
      placeholder='Search'
      onChangeText={query => setSearchQuery(query)}
      value={searchQuery}
      style={styles.searchBar}
    />
    <SortRepositoriesSelector sortOrder={sortOrder} setSortOrder={setSortOrder} />
  </View>
);

const styles = StyleSheet.create({
  searchBar: {
    margin: 8
  }
});

export default RepositoryListHeader;