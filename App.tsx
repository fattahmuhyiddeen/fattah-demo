// Assumptions: no city has 2 parent districts and no district has 2 parent states

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Select from './components/Select';
import Button from './components/Button';
import data from './data';

function App(): JSX.Element {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [searchResult, setSearchResult] = useState('');

  useEffect(() => {
    setDistrict('');
    setCity('')
  }, [state]);

  useEffect(() => {
    setCity('')
  }, [district]);

  const search = () => {
    setSearchResult(`Search results for ${city || district || state || 'all'}`);
  }

  return (
    <SafeAreaView style={{ margin: 10, marginTop: 50 }}>
      <Text>Filter</Text>
      <View style={{ flexDirection: 'row', gap: 5, marginBottom: 30 }}>
        <Select data={data.reduce((a: string[], { state: d }) => a.includes(d) ? a : [...a, d], []).map(d => ({ label: d, value: d }))} onChange={setState} selected={state} />
        {!!state && <Select data={data.filter(d => d.state === state).reduce((a: string[], { district: d }) => a.includes(d) ? a : [...a, d], []).map(d => ({ label: d, value: d }))} onChange={setDistrict} selected={district} />}
        {!!district && <Select data={data.filter(d => d.district === district).reduce((a: string[], { city: d }) => a.includes(d) ? a : [...a, d], []).map(d => ({ label: d, value: d }))} onChange={setCity} selected={city} />}
        <Button style={styles.searchButton} onPress={search}><Text>Search</Text></Button>
      </View>
      <Text>{searchResult}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
searchButton:{
  backgroundColor: 'lightblue',
  paddingHorizontal: 20,
  borderRadius:10,
  marginLeft: 20
}
});

export default App;
