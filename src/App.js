import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element ={<Home />}/>
          <Route path="/users" element ={<UserList />}/>
          <Route path="/newUser" element={<NewUser/>}/>
          <Route path="/products" element ={<Product/>} />
          <Route path="/user" element ={<User/>} />
          <Route path="/newProduct" element ={<NewProduct/>} />
          <Route path="/productList" element ={<ProductList/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;