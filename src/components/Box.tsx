import * as React from "react";

interface IAppProps {
  color: string;
  onClick: () => void;
}

export const defaultDivStyle: React.CSSProperties = {};

const App: React.FunctionComponent<IAppProps> = (props) => {
  const { color, onClick } = props;
  return (
    <div
      onClick={() => onClick()}
      style={{ ...defaultDivStyle, backgroundColor: color }}
    >
      <p>Im a box? {color}</p>
    </div>
  );
};

export default App;
