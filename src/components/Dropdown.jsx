import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Chevron } from 'react-native-shapes';

const Dropdown = ({ items, handleValueChange, ...props }) => {
  return (
    <RNPickerSelect
      onValueChange={(value) => handleValueChange(value)}
      items={items}
      Icon={Chevron}
      {...props}
    />
  );
};

export default Dropdown;