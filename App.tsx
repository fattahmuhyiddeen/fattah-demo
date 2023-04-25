import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Select from './components/Select';
import Button from './components/Button';
import data from './data';

const mapData = (key: 'state' | 'city' | 'district') => data.reduce((a: string[], { [key]: d }) => a.includes(d) ? a : [...a, d], []).map(d => ({ label: d, value: d }))

function App(): JSX.Element {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const search = () => {
    setSearchResult(`Search results for ${city || district || state || 'all'}`);
  }

  const changeState = (s:string) =>{
    setState(s);
    setDistrict('');
    setCity('');
  }

  const changeDistrict = (d:string)=>{
    setDistrict(d);
    setCity('');
  }

  const clearFilter = () => {
    setState('');
    setDistrict('');
    setCity('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        {!!state ? <Button onPress={clearFilter}><Text>Clear filter</Text></Button> : <Text>Filter</Text>}
      </View>
      <View style={{ flexDirection: 'row', gap: 5, marginBottom: 30 }}>
        <Select data={mapData('state')} onChange={changeState} selected={state} />
        {!!state && <Select data={mapData('district')} onChange={changeDistrict} selected={district} />}
        {!!district && <Select data={mapData('city')} onChange={setCity} selected={city} />}
        <Button style={styles.searchButton} onPress={search}><Text>Search</Text></Button>
      </View>
      <Text>{searchResult}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { margin: 10, marginTop: 50 },
  searchButton: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 20,
    borderRadius: 10,
    marginLeft: 20
  }
});

export default App;
