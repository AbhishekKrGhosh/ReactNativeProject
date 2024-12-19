import React from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Pressable,
} from 'react-native';

const ButtonComp = () => {
  const handlePress = type => {
    Alert.alert(`${type} Button Pressed`);
  };

  return (
    <View style={styles.container}>
      {/* Default Button */}
      <Button title="Default Button" onPress={() => handlePress('Default')} />

      {/* TouchableOpacity */}
      <TouchableOpacity
        style={styles.touchableOpacityButton}
        onPress={() => handlePress('TouchableOpacity')}>
        <Text style={styles.touchableText}>TouchableOpacity Button</Text>
      </TouchableOpacity>

      {/* TouchableWithoutFeedback */}
      <TouchableWithoutFeedback
        onPress={() => handlePress('TouchableWithoutFeedback')}>
        <View style={styles.touchableWithoutFeedback}>
          <Text style={styles.touchableText}>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>

      {/* TouchableHighlight */}
      <TouchableHighlight
        style={styles.touchableHighlight}
        underlayColor="#DDDDDD"
        onPress={() => handlePress('TouchableHighlight')}>
        <Text style={styles.touchableText}>TouchableHighlight Button</Text>
      </TouchableHighlight>

      {/* Pressable */}
      <Pressable
        style={({pressed}) => [
          styles.pressableButton,
          {backgroundColor: pressed ? '#dddddd' : '#007BFF'},
        ]}
        onPress={() => handlePress('Pressable')}>
        <Text style={styles.pressableText}>Pressable Button</Text>
      </Pressable>

      {/* Custom Button with Text */}
      <TouchableOpacity
        style={[styles.customButton, styles.customButtonPrimary]}
        onPress={() => handlePress('Custom')}>
        <Text style={styles.customButtonText}>Custom Styled Button</Text>
      </TouchableOpacity>

      {/* Long Press Example */}
      <TouchableOpacity
        style={[styles.longPressButton]}
        onLongPress={() => handlePress('Long Press')}
        delayLongPress={500}>
        <Text style={styles.touchableText}>Long Press Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  touchableOpacityButton: {
    backgroundColor: '#28A745',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  touchableWithoutFeedback: {
    backgroundColor: '#FFC107',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  touchableHighlight: {
    backgroundColor: '#17A2B8',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  touchableText: {
    color: '#FFF',
    fontSize: 16,
  },
  pressableButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  pressableText: {
    color: '#FFF',
    fontSize: 16,
  },
  customButton: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  customButtonPrimary: {
    backgroundColor: '#6C63FF',
  },
  customButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  longPressButton: {
    backgroundColor: '#E74C3C',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default ButtonComp;
