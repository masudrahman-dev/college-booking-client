import { Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SearchField from "../ui/fields/SearchField";
const Items = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Colleges",
    path: "/colleges",
  },
  {
    label: "Admission",
    path: "/admission",
  },
  {
    label: "My College",
    path: "/my-college",
  },
];

const Header = () => {
  // const [user, setUser] = useState(null);

  // Listen for changes in authentication state
  // auth.onAuthStateChanged((user) => {
  //   if (user) {
  //     // User is logged in
  //     setUser(user);
  //   } else {
  //     // User is logged out
  //     setUser(null);
  //   }
  // });

  // ================================

  const linkstyle = "  p-3 lg:px-0 hover:text-rose-600 text-start";
  const navItems = Items.map((item) => (
    <Link key={item.label} to={item.path} className={linkstyle}>
      {item.label}
    </Link>
  ));
  const isLogin = true ? (
    <Link to="/login" className={`${linkstyle} `}>
      Login
    </Link>
  ) : (
    <button className={`${linkstyle} `}>Logout</button>
  );

  const profile = (
    <Link to="/profile" className={linkstyle}>
      Profile
    </Link>
  );
  return (
    <div>
      <nav className="bg-gray-800 ">
        <div className="p-4 max-w-screen-xl mx-auto">
          <div className="flex justify-between items-center ">
            <Link
              to={"/"}
              className="  border p-3 rounded text-white font-semibold text-lg "
            >
              <h1>CollegeBooking</h1>
            </Link>
            <div className=" hidden md:block w-96">
              <SearchField />
            </div>
            <div>
              <div className=" hidden lg:flex gap-5 items-center text-white font-semibold text-lg">
                {navItems}
                {profile}
                {isLogin}
              </div>
              <div className=" lg:hidden   ">
                <Menu>
                  <MenuButton className="text-white font-semibold text-lg">
                    Menu
                  </MenuButton>
                  <MenuList className="flex flex-col ">
                    {profile} {navItems} {isLogin}
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
          <div className=" md:hidden">
            <SearchField />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
