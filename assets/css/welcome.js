import { StyleSheet } from 'react-native';

const welcomeStyles = StyleSheet.create({
  mainImage: {
    width: 193,
    height: 110,
    margin: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  basicText: {
    fontFamily: 'EuphemiaUCAS-Italic'
  },
  headerText: {
    fontFamily: 'EuphemiaUCAS',
    margin: 5
  },
  redButton: {
    color: "#FF0000"
  }
});


export default welcomeStyles
