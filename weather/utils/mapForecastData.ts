import { getDayOfWeek } from './getDayOfWeek';
import { ForecastData } from './types/weatherTypes';

export const mapForecastData = (response: { data: any }): ForecastData => {
  const { forecast, location } = response.data;

  return {
    forecast: {
      forecastDay: forecast.forecastday.map((forecastDay: any) => {
        return {
          date: getDayOfWeek(forecastDay.date),
          day: {
            condition: forecastDay.day.condition,
            maxTempF: Math.round(forecastDay.day.maxtemp_f),
            minTempF: Math.round(forecastDay.day.mintemp_f),
          },
        };
      }),
    },
    location: {
      name: location.name,
      region: location.region,
    },
  };
};
