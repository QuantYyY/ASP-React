import { useEffect } from 'react';
import './App.css';
import axios from 'axios';

import { urlWeather } from './endpoints/endpoints';

function App() {
  useEffect(() => {
    axios.get(urlWeather)
      .then(response => {
        console.log(response.data)
      })
  }, []);

  return (
    <>
      <h1>Hi buddy</h1>
    </>
  );
}

export default App;
