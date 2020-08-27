import React, { useState, useEffect } from 'react';
import {
  View, Text, ActivityIndicator, FlatList, Image,
} from 'react-native';

import styles from '../styles';

function PopularScreen() {
  const API_KEY = '3442a518461acfacde338abe50c7dd53';
  const API_URL = 'https://api.themoviedb.org/3';
  const IMG_URL = 'http://image.tmdb.org/t/p/w200/';

  const [isLoading, setLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => setPopularMovies(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Cinephile
      </Text>
      <View style={styles.moviesList}>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            contentContainerStyle={{ paddingBottom: 85 }}
            data={popularMovies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.movieContainer}>
                <Image
                  style={styles.logo}
                  source={{
                    uri: IMG_URL + item.poster_path,
                  }}
                />
                <Text style={styles.movieTitle}>{item.title}</Text>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
}

export default PopularScreen;
