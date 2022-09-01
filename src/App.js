import React, { useState } from "react";
import axios from "axios";

function App() {
  // const [data, setData] = useState({});

  // const { location, setLocation } = useState("");
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bcd5bc4477bbbee12c419d9f4fae7241&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  // function newLocation(event) {
  //   return setLocation(event.target.value);
  // }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          // onChange={newLocation}
          placeholder="Enter Location"
          onKeyPress={searchLocation}
          type="text"
        ></input>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            {/* <p>Dallas</p> */}
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {/* <h1>60`G</h1> */}
            {/* {data.main.temp} */}
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {/* <p>Cloads</p> */}
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like}°C</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {/* <p className="bold">20%</p> */}
              {data.main ? (
                <p className="bold">{data.main.feels_like}%</p>
              ) : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {/* <p>12 MPH</p>  */}
              {data.wind ? <p className="bold">{data.wind.speed}KPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
