import { Routes, Route } from "react-router";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing/>}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
