import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface Props {
  value: string;
  onChange: (text: string) => void;
}

const Search = ({ value, onChange }: Props) => (
  <TextInput
    placeholder="Search..."
    value={value}
    onChangeText={onChange}
    style={styles.input}
  />
);

const styles = StyleSheet.create({
  input: {
    padding: 10,
    margin: 10,
    marginTop: 10,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default Search;
