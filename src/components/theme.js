import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#e8eced',
    primary: '#0366d6',
    appBar: '#1f272b',
    repositoryBackground: '#cdd3d4'
  },
  fontSizes: {
    body: 16,
    subheading: 18,
  },
  fonts:{
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System', 
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  }
};

export default theme;