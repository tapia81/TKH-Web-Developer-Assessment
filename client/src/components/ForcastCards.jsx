export const ForcastCards = ({ forcastData }) => {
  return (
    <div className="forcast-cards">
      {forcastData.list.map((data, key) => {
        const dateFormat = new Date(data.dt_txt);
        return (
          <div className="forcast-card" key={key}>
            <p>
              {dateFormat.toLocaleString("default", {
                weekday: "long",
                hour: "numeric",
              })}
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
            <p>{data.main.temp.toFixed(0)}</p>
            <div className="min-and-max">
              <p>min:{data.main.temp_min.toFixed(0)}</p>
              <p>max:{data.main.temp_max.toFixed(0)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
