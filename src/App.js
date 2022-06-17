import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Create from "./pages/create/Create";
import Catalogue from "./pages/catalogue/Catalogue";
import Single from "./pages/single/Single";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          {/* Nested Route for Users */}
          <Route path="users">
            <Route index element={<Catalogue />} />
            <Route path=":userId" element={<Single />} />
            <Route path="create" element={<Create />} />
          </Route>
          {/* Nested Route for Products */}
          <Route path="products">
            <Route index element={<Catalogue />} />
            <Route path=":productId" element={<Single />} />
            <Route path="create" element={<Create />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
