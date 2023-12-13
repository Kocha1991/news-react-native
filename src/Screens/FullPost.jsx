import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Loader } from '../Components/Loader';
import axios from 'axios';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  Alert,
} from 'react-native';

export const FullPost = ({ route, navigation }) => {
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id, title } = route.params;

  const updateTitlePost = title.toUpperCase();

  useEffect(() => {
    setIsLoading(true);
    navigation.setOptions({
      title: updateTitlePost,
    });

    axios
      .get('https://65783fe8f08799dc8044ad6b.mockapi.io/news/' + id)
      .then(({data}) => {
        setPost(data)
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Error', 'failed to get an article')
      })
      .finally(() => {
        setIsLoading(false)
      
      })
  }, [])

  return (
    <View style={styles.container}>
      {isLoading 
          ? <Loader /> 
          : <ScrollView>
              <Image
                style={styles.postImg}
                source={{uri: post.postImg}}
              />
              <Text style={styles.postText}>{post.text}</Text>
            </ScrollView>
      }
      <StatusBar theme='auto'/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: '100%',
    paddingHorizontal: 15,
  },
  postImg: {
    width: '100%',
    height: 250,
    borderRadius: 25,
  },
  postText : {
    marginTop: 20,
    fontSize: 18,
    lineHeight: 24,
  }
})
