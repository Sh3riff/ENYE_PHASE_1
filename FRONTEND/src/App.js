import React from 'react';
 import { useQuery } from 'react-query'
 import GlobalStyles from './styles'
import Table from './components/Table';

function App() {

    const { data, isLoading, isError } = useQuery('enyeApi', () =>
        fetch('https://api.enye.tech/v1/challenge/records')
            .then(res => res.json())
    )

    if(isLoading){
        return  <p>loading</p>
    }
    if(isError){
        return  <p>Error</p>
    }
  return (
    <>
    <GlobalStyles />
    <Table fetchedData={data}/>
    </>
  );
}

export default App;
