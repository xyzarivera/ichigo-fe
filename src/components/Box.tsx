import * as React from "react";

interface IAppProps {
  color: string;
  onClick: (num: number) => void;
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const { color, onClick } = props;
  return (
    <div onClick={() => onClick(9)}>
      <p>Im a box? {color}</p>
    </div>
  );
};

export default App;
