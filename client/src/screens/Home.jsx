import axios from "axios";
import { Layout } from "../components/Layout";
import { ForcastCards } from "../components/ForcastCards";
import { Tasks } from "../components/Tasks";
import { useEffect } from "react";
import { useState } from "react";
export const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [isTaskLoading, setTaskLoading] = useState(true);
  const [isApiDataSaved, setIsApiDataSaved] = useState(false);
  const [forcastData, setForcastData] = useState([]);
  const [taskData, setTaskData] = useState([]);
  const lat = 40.71614716471199;
  const lon = -73.9973312219811;

  useEffect(() => {
    const fetchData = async () => {
      if (isLoading) {
        await axios
          .get(
            `${process.env.REACT_APP_WEATHER_API_URL}units=imperial&lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
          )
          .then((response) => {
            setForcastData(response.data);
            setLoading(false);
            setIsApiDataSaved(true);
            console.log(response.data);
          });
      } else {
        console.log("Data Fetched");
      }
    };

    fetchData();
  }, [isLoading, lon]);

  useEffect(() => {
    const fetchDatabaseData = async () => {
      await axios.get(process.env.REACT_APP_MONGO_URL).then((response) => {
        setTaskData(response.data.tasks);
        setTaskLoading(false);
      });
    };
    fetchDatabaseData();
  }, [taskData]);

  if (isLoading) {
    return <div className="loading-screen">Loading...</div>;
  }

  return (
    <Layout>
      <ForcastCards forcastData={forcastData} />
      <Tasks taskData={taskData} />
    </Layout>
  );
};
