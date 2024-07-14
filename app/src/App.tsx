import { useState } from "react";
import Layout from "./components/layout/Layout";

const App = () => {
  const [showName, setShowName] = useState<boolean>(false);
  const [reset, setReset] = useState<boolean>(false);
  const handleToggleName = (showName: boolean) => {
    setShowName(showName);
  };

  //for future reset function
  const handleReset = () => {
    console.log(reset);
    setReset((prev) => !prev);
  };

  return (
    <Layout
      showName={showName}
      handleToggleName={handleToggleName}
      handleReset={handleReset}
    >
      <div style={{ height: "calc(100vh - 8.5rem - 5rem)" }}>MainPage</div>
    </Layout>
  );
};

export default App;
