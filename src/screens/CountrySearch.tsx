import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { StackParams } from './types';
import NewPost from '../components/NewPost';
import PostList from '../components/PostList';
import SearchBox from '../components/SearchBox';
import MainApi from '../services/api/main';
import { Country } from '../services/api/types';
import CountryList from '../components/CountryList';
import ProgressBar from '../components/ProgressBar';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

type Props = {
  navigation: StackNavigationProp<StackParams>;
};


const CountrySearchScreen: React.FC<Props> = ({ navigation }) => {


const [searchResults, setSearchResults] = React.useState<Country []>([]);
const [nairaAmount, setNairaAmount] = React.useState(1);
const [loading, setLoading] = React.useState(false);
const [error, SetError] = React.useState(null);
  // const { item, loading, error, data } = props;
  
  
  const searchCountry = async(name: String)=>{
    try {
      setLoading(true);
      console.log("started")
      const mainApi = await MainApi.getInstance().searchCountry(name);
      // MainApi.getInstance().searchCountry(name).then((val: any)=>{
      //   console.log(val)
      // });
      setLoading(false);
      setSearchResults(mainApi);
      
      console.log("stopped")
    } catch (error) {
      setLoading(false);
    }
   
  }
  const convertCurrency = async(amount: string)=>{
    setNairaAmount(parseInt(amount));
    // setLoading(true);
    // const mainApi = await MainApi.getInstance().searchCountry(name);
    // setSearchResults(mainApi);
    // setLoading(false);
  }
  return (
  <View style={styles.container}>
    {/* <Button onPress={() => navigation.navigate('About')} title="Show About" /> */}
    {/* <NewPost /> */}
    <SearchBox onCountrySubmit={searchCountry} onCurrencySubmit={convertCurrency}/>
   
  { (!searchResults &&  <Text>No Data</Text> )}
  {
    loading && <Text>Loading:{error}</Text>
  }
    <CountryList data={searchResults} nairaAmount={nairaAmount}/>
    {loading && <ProgressBar/>}
  </View>
);
  }


export default CountrySearchScreen;
