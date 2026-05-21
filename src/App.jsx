import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./components/landing";
import Profile from "./components/profile";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;