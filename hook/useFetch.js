import { useState, useEffect } from 'react';
import axios from 'axios';
import { RAPID_API_KEY } from '@env'


const rapidApiKey = RAPID_API_KEY; 

const useFetch = (endpoint) => {
    const [data, setData] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null); 

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
         headers: {
         'X-RapidAPI-Key': rapidApiKey,
         'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'

  },
   params: { ...query },
};

}