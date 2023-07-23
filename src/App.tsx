import { Outlet } from "react-router-dom";
import Header from "./components/shared/Header";
import Profile from "./pages/profile/Profile";

const App = () => {
  // console.log(import.meta.env.VITE_BASE_URL);
  return (
    <div className="mb-20">


      <Profile></Profile>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
