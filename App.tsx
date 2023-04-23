import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import Select from './components/Select';

const data = [{ label: 'Selangor', value: 'Selangor' }];

function App(): JSX.Element {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');

  return (
    <SafeAreaView style={{ padding: 20, marginTop: 100 }}>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Select data={data} onChange={setState} selected={state} />
        <Select data={data} onChange={setDistrict} selected={district} />
        <Select data={data} onChange={setCity} selected={city} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
