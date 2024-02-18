import "./App.css";
import ListEmployee from "./component/ListEmployee";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Employee from "./component/Employee";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          {/* https:localhost:3000  */}
          <Route path="/" element={<ListEmployee />} />

          {/* https:localhost:3000/employees */}
          <Route path="/employees" element={<ListEmployee />} />

          {/* https:localhost:3000/add-employee */}
          <Route path="/add-employee" element={<Employee />} />

          {/* https:localhost:3000/update-employee */}
          <Route path="/update-employee/:id" element={<Employee />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
