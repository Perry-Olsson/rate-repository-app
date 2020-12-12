import React from 'react';
import { StyleSheet } from 'react-native';

import Dropdown from './Dropdown';

const SortRepositoriesSelector = ({ setSortOrder }) => (
  <Dropdown 
    handleValueChange={setSortOrder}
    items={sortingParams}
    placeholder={{}}
    style={{ 
      ...pickerSelectStyles,
      iconContainer: {
        height: '100%',
        justifyContent: 'center',
        paddingRight: 30,
      }
    }} />
);

const sortingParams = [
  { label: 'Latest repositories', value: { orderBy: 'CREATED_AT', orderDirection: 'DESC' }},
  { label: 'Highest rated repositories', value: { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' }},
  { label: 'Lowest rated repositories', value: { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' }}
];

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    padding: 20,
    paddingLeft: 30,
  }
});


export default SortRepositoriesSelector;