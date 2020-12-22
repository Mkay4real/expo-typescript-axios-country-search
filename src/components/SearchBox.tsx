import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

interface IProps{
  onCountrySubmit?: Function;
  onCurrencySubmit?: Function;

}
const SearchBox: React.FC<IProps> = ({onCountrySubmit, onCurrencySubmit}) => {
  
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const _onCountrySubmit = () => { 
    setText('');
    onCountrySubmit(text)
  };
  const _onCurrencySubmit = () => {
    // setAmount('');
    onCurrencySubmit(amount)
  };
  return (
    <View style={{flexDirection:'row', justifyContent:'space-evenly', padding:30, borderBottomWidth:5}}>
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      placeholder="   Search country   "
      onSubmitEditing={_onCountrySubmit}
      onChangeText={setText}
      value={text}
    />
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      placeholder="Enter amount in NGN"
      onSubmitEditing={_onCurrencySubmit}
      onChangeText={setAmount}
      value={amount}
    />
    </View>
  );
};

export default SearchBox;
