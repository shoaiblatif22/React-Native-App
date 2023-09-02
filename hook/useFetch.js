import { useState, useEffect } from 'react';
import axios from 'axios';


const useFetch = (endpoint, query) => {
    const [data, setData] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null); 

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
         headers: {
         'X-RapidAPI-Key': 'e420c07c94msha92321da6a31c76p147260jsn15c4c446d92f',
         'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'

  },
   params: { ...query },
};

const fetchData = async () => {
    setIsLoading(true);

    try {
        const response = await axios.request(options); 
            setData(response.data.data);
            setIsLoading(false);

        } catch (error) { 
            setError(error);
            alert('There was an error')

        } finally { 
            setIsLoading(false);

        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;

