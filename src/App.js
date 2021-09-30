import { Route } from "react-router-dom";
import Home from "./views/home";

function App() {
  return (
    <>
      <Route path="/" exact component={Home} />
    </>
  );
}

export default App;
