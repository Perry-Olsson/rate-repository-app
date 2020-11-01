import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import { Link } from 'react-router-native';

//styles
import theme from './theme';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: windowWidth / 3 - 2,
    paddingBottom: 10,
  },
  tab: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.subheading,
  },
  link: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  }
});

const AppBarTab = ({ name, path }) => {
  return (
    <Link style={styles.link} to={path}>
      <View style={styles.container} component={TouchableHighlight}>
          <Text style={styles.tab}>
            {name}
          </Text> 
      </View>
    </Link>
  );
};

export default AppBarTab;