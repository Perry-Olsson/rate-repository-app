import { Linking } from "react-native";

export const openLink = (url) => () => { Linking.openURL(url); };