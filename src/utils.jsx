export const getDay = (dt) => {
  return new Date(dt * 1000).toLocaleDateString("en-us", {
    weekday: "long",
  });
};

export const getFormattedData = (data) => {
  let result = {};
  (data?.list || []).map((weather) => {
    const day = getDay(weather?.dt);
    if (!result[day]) {
      result[day] = [];
    }
    console.log("day", day);
    result[day].unshift(weather);
  });
  return result;
};
