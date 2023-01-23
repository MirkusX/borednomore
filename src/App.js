import { useEffect, useState } from "react";
import "./App.css";
import { Frontpage } from "./Pages/Frontpage";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const getData = () => {
    axios
      .get("https://www.boredapi.com/api/activity/")
      .then((response) => {
        setData(response.data);
      })
      .catch((response) => {
        setError(response);
      });
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <Frontpage />
    </div>
  );
}

export default App;
