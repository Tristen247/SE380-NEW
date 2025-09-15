export type CurrentResponse = {
  location: {
    name: string,
    region: string,
  },
  current: {
    temp_f: string,
    feelslike_f: string,
    condition: {
      icon: string,
      text: string,
    },
  },
};

export type CurrentData = {
  city: string,
  state: string,
  temp: string,
  feelslike: string,
  icon: string,
  condition: string,
};

export type ForecastData = {
	forecast: {
		forecastDay: {
			date: string,
			day: {
				condition: string,
				maxTempF: Number,
				minTempF: Number,
			},
		},
	},
	location: {
		name: string,
		region: string,
	},
};
