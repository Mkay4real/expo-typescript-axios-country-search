import React, { useState } from 'react';
import { TextInput, View, Image, Text } from 'react-native';

import { Country } from '../services/api/types';

const CountryItem = (props: any) => {
  
  const [text, setText] = useState('');  
  const item: Country = props.item;
  const naira: string = props.nairaAmount;
  
  return (
    <View style={{flexDirection:'row', padding:30, borderBottomWidth:5}}>
      <Image source={{uri:item.flag}} style={{width: 64, height:64}} />
      <View style={{flexDirection:'column'}}>
        <Text style={{fontWeight:"bold", fontSize:24, color:"blue"}}>{item.name}</Text>
        <Text style={{fontWeight:"bold", fontSize:18, color:"grey"}}>{item.capital}</Text>
        <Text>{'Size: '+parseInt(item?.population).toFixed(0)}</Text>
        <Text>{`Currency: ${item?.currencies[0].name}  (${item?.currencies[0].symbol})`}</Text>
        <Text>{`Exchange: NGN ${naira || 1} = ${item?.currencies[0].symbol} ${(0.015 * naira ).toFixed(2)} `}</Text>

      </View>

    </View>
      
  );
};

export default CountryItem;
