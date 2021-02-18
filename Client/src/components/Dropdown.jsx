import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Chevron } from 'react-native-shapes';

const Dropdown = ({ items, handleValueChange, value, ...props }) => {
  return (
    <RNPickerSelect
      onValueChange={(value) => handleValueChange(value)}
      items={items}
      Icon={Chevron}
      value={value}
      {...props}
    />
  );
};

export default Dropdown;