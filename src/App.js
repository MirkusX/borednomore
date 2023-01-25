import { useEffect, useState } from "react";
import "./App.css";
import { Frontpage } from "./Pages/Frontpage";
import { DataContext } from "./Components/Context";
import axios from "axios";
import { StyledButton } from "./Components/StyledComponents";

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
          <StyledButton onClick={() => getData()}>
            Roll new activity
          </StyledButton>
        </div>
      </DataContext.Provider>
    );
  }
}

export default App;
