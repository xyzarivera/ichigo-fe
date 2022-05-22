import * as React from "react";
import "./Box.css";

interface IBoxProps {
  color: string;
  onClick: () => void;
  num: string;
  gridArea: string;
}

const Box: React.FunctionComponent<IBoxProps> = (props) => {
  const { color, onClick, num, gridArea } = props;

  return (
    <div
      className="box"
      style={{ backgroundColor: color, gridArea: gridArea }}
      onClick={() => onClick()}
    >
      <p>{num}</p>
    </div>
  );
};

export default Box;
