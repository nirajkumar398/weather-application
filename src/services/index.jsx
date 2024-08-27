export const fetchWeatherData = async (city) => {
    try {
      const data = await (
        await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=6557810176c36fac5f0db536711a6c52`
        )
      ).json();
      console.log(data);
      return data;
    } catch (error) {
      console.log("error in api", error);
    }
  };