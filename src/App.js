import "./App.css";
import Todo from "./modules/Todo/Todo";

import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Users from "./modules/Users/Users";
import Products from "./modules/Products/Products";

const activeItem = { background: "blue" };

function App() {
  return (
    <BrowserRouter>
      <div className="appContainer">
        <nav className="app-nav">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeItem : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/users"
            style={({ isActive }) => (isActive ? activeItem : undefined)}
          >
            Users
          </NavLink>
          <NavLink
            to="/products"
            style={({ isActive }) => (isActive ? activeItem : undefined)}
          >
            Products
          </NavLink>
          <NavLink
            to="/test"
            style={({ isActive }) => (isActive ? activeItem : undefined)}
          >
            Test
          </NavLink>
        </nav>
        <div className="app-content">
          <Routes>
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/test" element={<h1>Test Page</h1>} />
            <Route path="/" element={<Todo />} />
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
