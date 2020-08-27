import React, { useEffect, useState } from 'react';
import {
  View, Text, Image, ActivityIndicator,
} from 'react-native';

import styles from '../styles';

function MovieDetails() {
  const movieId = 605116;
  const API_KEY = '3442a518461acfacde338abe50c7dd53';
  const API_URL = 'https://api.themoviedb.org/3';
  const IMG_URL = 'http://image.tmdb.org/t/p/w300';

  const [isLoading, setLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => setMovieDetails(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Cinephile
      </Text>
      {isLoading ? <ActivityIndicator /> : (
        <Image
          style={styles.chosenMovie}
          source={{
            uri: IMG_URL + movieDetails.poster_path,
          }}
        />
      )}
    </View>
  );
}

export default MovieDetails;
