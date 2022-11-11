import "./App.css";
import Todo from "./modules/Todo/Todo";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./modules/Users/Users";
import Products from "./modules/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/" element={<Todo />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
