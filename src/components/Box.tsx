import * as React from "react";

interface IAppProps {
  color: string;
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const { color } = props;
  return (
    <div>
      <p>Im a box? {color}</p>
    </div>
  );
};

export default App;
