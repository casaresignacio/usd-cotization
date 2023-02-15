import { useState, useEffect } from 'react';
import axios from 'axios';



export const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    //setting initial states
    setLoading('loading...');
    setData(null);
    setError(null);
    //creating a CancelToken to cancel previus request
    const source = axios.CancelToken.source();
    //using get method + sending CancelToken as additional config
    axios.get( url, { cancelToken: source.token } )
      .then( res => {
        setLoading(false);
        //console.log( res );
        res.data && setData(res.data);

      })
      .catch( err => {
        setLoading(false)
        setError('Something went wrong...')
      })
    return () => {
      source.cancel();
    }
  }, [url])
  
  return { data, loading, error }
 
}

