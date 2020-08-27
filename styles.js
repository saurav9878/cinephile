import { Platform, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
  title: {
    backgroundColor: 'skyblue',
    fontSize: 32,
    color: 'black',
  },
  moviesList: {
    backgroundColor: 'tomato',
  },
  logo: {
    width: 179,
    height: 265,
  },
  movieContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  movieTitle: {
    color: 'white',
    fontSize: 20,
    padding: 20,
    flex: 1,
  },
  chosenMovie: {
    width: 400,
    height: 600,
  },
  chosenMovieContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
