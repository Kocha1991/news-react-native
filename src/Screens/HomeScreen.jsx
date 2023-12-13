import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  View, 
  Alert, 
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { Post } from '../Components/Post';
import { Loader } from '../Components/Loader';

export const HomeScreen = ({
  navigation
}) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const featchPosts = () => {
    setIsLoading(true);

    axios
      .get('https://65783fe8f08799dc8044ad6b.mockapi.io/news')
      .then(({data}) => {
        setItems(data)
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Error', 'error in data retrieval')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(featchPosts, [])

  return (
    <View>
      <View style={styles.container}>
        {isLoading 
          ? <Loader /> 
          : <View style={styles.posts}>
              <FlatList 
                refreshControl={
                  <RefreshControl 
                    refreshing={isLoading}
                    onRefresh={featchPosts}
                  /> 
                }
                data={items}
                renderItem={({item}) =>
                  <TouchableOpacity
                    onPress={() => navigation
                      .navigate('FullPost',
                      { 
                        id: item.id,
                        title: item.title,
                      })}
                  >
                    <Post 
                      icon={item.avatar}
                      title={item.title}
                      data={item.createdAt}
                      name={item.name}
                    />
                  </TouchableOpacity>
                }
              />
              <StatusBar theme='auto'/>
            </View>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
})
