import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';

//styles
import theme from './theme';

const styles = StyleSheet.create({
  tab: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.subheading,
  }
});

const AppBarTab = ({ name }) => {
  return (
    <View>
      <TouchableWithoutFeedback>
        <Text style={styles.tab}>
          {name}
        </Text> 
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AppBarTab;