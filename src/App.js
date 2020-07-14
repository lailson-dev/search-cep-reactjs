import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Loader from './Components/Loader';
import PostalCodeTable from './Components/PostalCodeTable';

function App() {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    await axios.get("https://cep.awesomeapi.com.br/json/05424020")
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

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  return isLoading ? <Loader /> : <PostalCodeTable {...data} />;
}

export default App;
