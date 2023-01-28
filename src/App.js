import { Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
import Navigation from "./components/NavBar";
import CategoryPage from "./components/Category";


const App = () => {
  <div>
    <Navigation/>
      <Routes>
        <Route path="/" element={<BookList />}/>
        <Route path="/Category" element={<CategoryPage/>}/>
      </Routes>
  </div>
}

export default App;
