import {BrowserRouter,Routes,Link,Route} from "react-router-dom";
import "./App.css";
import ListUser from "./components/ListUser";
import CreateUSer from "./components/CreateUSer";
import EditUser from "./components/EditUser";
function App() {
  return (
    <div>
     <BrowserRouter>
     <nav>
     <ul>
      <li> <Link to="/">List Users</Link> </li>
      <li> <Link to="user/create">Create User</Link> </li>
     </ul>
     </nav>
     <Routes>
      <Route index element={<ListUser />}/>
      <Route path="user/create" element={<CreateUSer />}/>
      <Route path="user/:id/edit" element={<EditUser />}/>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
