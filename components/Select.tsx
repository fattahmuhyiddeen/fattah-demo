import React, { useState, ComponentType } from 'react';
import { Modal, StyleSheet, View, FlatList, Text, PressableProps } from 'react-native';
import Button from './Button';

interface SelectProps extends PressableProps {
  data: { value: string, label: string }[];
  selected: string;
  onChange: Function;
}

export default ({ data = [], selected = '', onChange, ...props }: SelectProps) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button {...props} onPress={() => setShow(true)} style={{ ...styles.button, ...(selected ? styles.selected : styles.unselected) }}>
        <Text children={data.find((d) => d.value == selected)?.label || '+'} />
      </Button>
      <Modal
        animationType="slide"
        transparent
        visible={show}
        onRequestClose={() => setShow(false)}>
        <Button style={styles.centeredView} onPress={() => setShow(false)}>
          <View style={styles.modalBody}>
            <FlatList
              ListEmptyComponent={<Text style={{ margin: 5 }}>No data available</Text>}
              ItemSeparatorComponent={<View style={{ width: '90%', height: 1, backgroundColor: '#00000011', alignSelf: 'center' }} /> as unknown as ComponentType<React.ReactElement>}
              data={data.filter(d => d.value != selected)}
              keyExtractor={item => item.value}
              renderItem={({ item }) => (
                <Button onPress={() => { setShow(false); onChange?.(item.value) }} style={{ paddingVertical: 10, paddingHorizontal: 5 }}><Text>{item.label}</Text></Button>
              )} />
          </View>
        </Button>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  button: { padding: 10 },
  unselected: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 20,
  },
  selected: {
    backgroundColor:'orange',
    borderRadius:20,
  },
  modalBody: {
    margin: 20,
    width: '90%',
    height: '50%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
