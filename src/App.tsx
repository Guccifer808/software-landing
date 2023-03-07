import { useState } from "react";
import Navbar from "./components/navbar";
import { SelectedPage } from "./shared/types";
//do structure same as fintess-ts project

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <div className="app">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
