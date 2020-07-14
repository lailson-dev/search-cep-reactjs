import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostalCodeTable from './Components/PostalCodeTable';

function App() {

  const [data, setData] = useState({});

  async function fetchData() {
    await axios.get("https://cep.awesomeapi.com.br/json/38183052")
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <PostalCodeTable {...data} />;
}

export default App;
