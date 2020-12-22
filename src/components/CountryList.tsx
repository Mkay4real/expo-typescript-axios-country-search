import React from 'react';
import { FlatList, Text } from 'react-native';
import CountryItem from './CountryItem';
import { Country } from '../services/api/types';

type Data = {
  posts: {
    text: string;
    id: number;
  }[];
};


interface IProps {
  readonly item: Country;
  data: [Country];
  nairaAmount: string;
}


const CountryList: React.FC<IProps | any> = (props: React.PropsWithChildren<IProps>) => {
  const { item, nairaAmount, data } = props;
 
  return (
    <FlatList
      data={data}
      keyExtractor={(item: Country) => String(item.name)}
      renderItem={({ item }) => <CountryItem item={item} nairaAmount={nairaAmount}/>}
    />
  );
};

export default CountryList;
