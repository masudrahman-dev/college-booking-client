import { Outlet } from "react-router-dom";
import Header from "./components/shared/Header";
const App = () => {
  // console.log(import.meta.env.VITE_BASE_URL);
  return (
    <div className="mb-20">


      <Header />
      <Outlet />
    </div>
  );
};

export default App;
