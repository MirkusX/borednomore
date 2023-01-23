import { useEffect, useState } from "react";
import "./App.css";
import { Frontpage } from "./Pages/Frontpage";
import axios from "axios";
import { DataContext } from "./Components/Context";

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
  useEffect(() => {
    getData();
  }, []);
  if (data) {
    return (
      <DataContext.Provider value={{ data, setData }}>
        <div className="App">
          <Frontpage />
        </div>
      </DataContext.Provider>
    );
  }
}

export default App;
