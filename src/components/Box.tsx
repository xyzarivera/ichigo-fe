import * as React from "react";

interface IAppProps {
  input: string;
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const { input } = props;
  return (
    <div>
      <p>Im a box? {input}</p>
    </div>
  );
};

export default App;
