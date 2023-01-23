import { useContext } from "react";
import { DataContext } from "../Components/Context";
import { StyledDiv, StyledH1 } from "../Components/StyledComponents";

export const Frontpage = () => {
  const { data, setData } = useContext(DataContext);

  return (
    <section>
      <StyledDiv>
        <StyledH1>{data.activity}</StyledH1>
        <p>How many is needed: {data.participants}</p>
        <p>Cost: {data.price * 10}/10</p>
        <p>Difficulty: {data.accessibility * 10}/10</p>
        <p>What kind of activity it is: {data.type.toUpperCase()}</p>
        <button>ROLL NEW ACTIVITY</button>
      </StyledDiv>
    </section>
  );
};
