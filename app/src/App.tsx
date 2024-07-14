import { useState } from "react";
import Layout from "./components/layout/Layout";
import MainPage from "./pages/MainPage";

const App = () => {
  const [showName, setShowName] = useState<boolean>(false);
  const [reset, setReset] = useState<boolean>(false);
  const handleToggleName = (showName: boolean) => {
    setShowName(showName);
  };
  const handleReset = () => {
    setReset((prev) => !prev);
  };

  return (
    <Layout
      showName={showName}
      handleToggleName={handleToggleName}
      handleReset={handleReset}
    >
      <MainPage handleToggleName={handleToggleName} reset={reset} />
    </Layout>
  );
};

export default App;
