import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Button, TextInput, StyleSheet, Pressable } from 'react-native';
import { Link } from "expo-router";

const App = () => {
  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 1; // Number of items to load per page

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data.map(post => ({ ...post, comments: [], votes: 0 }))))
      .catch(error => console.error('Error fetching data:', error));
  };

  const loadMore = () => {
    const newStartIndex = startIndex + itemsPerPage;
    const newData = data.slice(startIndex, newStartIndex).map(post => ({ ...post, comments: [], votes: 0 }));
    setVisibleData([...visibleData, ...newData]);
    setStartIndex(newStartIndex);
  };

  const clearData = () => {
    setVisibleData([]);
    setStartIndex(0);
  };

  const handleVote = (id, type) => {
    const updatedData = visibleData.map(item => {
      if (item.id === id) {
        return {
          ...item,
          votes: type === 'upvote' ? item.votes + 1 : item.votes - 1,
        };
      }
      return item;
    });
    setVisibleData(updatedData);
  };

  const handleComment = (postId, comment) => {
    const updatedData = visibleData.map(item => {
      if (item.id === postId) {
        return {
          ...item,
          comments: [...(item.comments ?? []), comment], // Ensure comments is initialized as an array
        };
      }
      return item;
    });
    setVisibleData(updatedData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Fetched Data:</Text>
      {visibleData.map(item => (
        <View key={item.id} style={styles.item}>
          <Text>Title: {item.title}</Text>
          <Text>Body: {item.body}</Text>
          <View style={styles.votesContainer}>
            <Button title="Upvote" onPress={() => handleVote(item.id, 'upvote')} />
            <Text style={styles.votes}>{item.votes}</Text>
            <Button title="Downvote" onPress={() => handleVote(item.id, 'downvote')} />
          </View>
          <TextInput
            placeholder="Comment"
            style={styles.commentInput}
            onChangeText={Text => handleComment(item.id, Text)}
            onSubmitEditing={() => handleComment(item.id, Text)}
          />
          <Text style={styles.commentsTitle}>Comments:</Text>
          {(item.comments ?? []).map((comment, index) => ( // Ensure comments is initialized as an array
            <Text key={index} style={styles.comment}>{comment}</Text>
          ))}
        </View>
      ))}
      {startIndex < data.length && (
        <Button title="Load More" onPress={loadMore} />
      )}
      <View style={styles.footer}>
        <Button title="Clear" onPress={clearData} />
      </View>
      <Link href="/" asChild>
        <Pressable style={styles.backButton}>
          <Text style={styles.backButtonText}>BACK</Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    width: '100%',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  votesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  votes: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginTop: 10,
  },
  commentsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  comment: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
  },
  footer: {
    marginTop: 20,
    width: '100%',
  },
  backButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
