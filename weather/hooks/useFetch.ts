import { useState, useEffect } from 'react';
import axios from 'axios';

const WEATHER_API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

const getUrl = (param: string) => {
	switch (param) {
		case "5":
			return `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=02893&days=5`
		case "7":
			return `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=02893&days=7`
		case "current":
			return `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=02893`
    default:
      throw new Error(`Unknown param: ${param}`);
	}
};

export const useFetch = <T = unknown>(url: string): { data: T | null; loading: boolean; error: boolean } => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fullUrl = getUrl(url);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${fullUrl}`);
        setData(response.data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};
