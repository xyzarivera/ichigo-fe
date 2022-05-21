import * as React from "react";
import "./Box.css";

interface IAppProps {
  color: string;
  onClick: () => void;
  num: string;
  gridArea: string;
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const { color, onClick, num, gridArea } = props;

  return (
    <div
      className={"box " + gridArea}
      style={{ backgroundColor: color, gridArea: gridArea }}
      onClick={() => onClick()}
    >
      <p>{num}</p>
    </div>
  );
};

export default App;
