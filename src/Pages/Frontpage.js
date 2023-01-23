import { useContext } from "react";
import { getData } from "../App";
import { DataContext } from "../Components/Context";

export const Frontpage = () => {
  const { data, setData } = useContext(DataContext);

  return (
    <section>
      <div>
        <h1>{data.activity}</h1>
        <p>How many is needed: {data.participants}</p>
        <p>Cost (in $): {data.price}</p>
        <p>Difficulty: {data.accessibility}</p>
        <p>What kind of activity it is: {data.type}</p>
      </div>
    </section>
  );
};
