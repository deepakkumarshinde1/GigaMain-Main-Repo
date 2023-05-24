import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
