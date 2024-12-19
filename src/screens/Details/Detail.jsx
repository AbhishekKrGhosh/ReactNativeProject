import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const Detail = ({code, description}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Code Snippet:</Text>
      <ScrollView
        style={styles.codeScrollContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.codeContainer}>
          <Text style={styles.code}>{code}</Text>
        </View>
      </ScrollView>
      <Text style={styles.heading}>Details:</Text>
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  codeScrollContainer: {
    marginBottom: 16,
  },
  codeContainer: {
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 12,
    minWidth: '100%',
  },
  code: {
    color: '#FFF',
    fontFamily: 'Courier',
    fontSize: 14,
    lineHeight: 20,
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
});

export default Detail;
