import React from 'react';
import {View, Text} from 'react-native';
import ButtonComp from '../../components/Button/Button';
import Detail from '../Details/Detail';
import {details} from '../../components/Button/ButtonData';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <Detail code={details.code} description={details.description} />
    </View>
  );
};

export default Home;
