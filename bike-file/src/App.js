import "./App.css";

import { UserProvider } from "./contexts/UserContext";
import { BikeProvider } from "./contexts/BikeContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Logout } from "./components/Logout";
import { Check } from "./components/Check";
import { AddBike } from "./components/AddBike";
import { MyBike } from "./components/MyBike";
import { EditBike } from "./components/EditBike";
import { DeleteBike } from "./components/DeleteBike";

function App() {
  return (
    <>
      <UserProvider>
        <BikeProvider>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/check" element={<Check />} />
              <Route path="/users/login" element={<Login />} />
              <Route path="/users/register" element={<Register />} />
              <Route path="/users/logout" element={<Logout />} />
              <Route path="/bike/add" element={<AddBike />} />
              <Route path="/bike/my" element={<MyBike />} />
              <Route path="/bike/edit/:IdBike" element={<EditBike />} />
              <Route path="/bike/delete/:IdBike" element={<DeleteBike />} />
            </Routes>
          </main>
          <Footer />
        </BikeProvider>
      </UserProvider>
    </>
  );
}

export default App;
