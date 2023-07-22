import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const navItems = [
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
  const items = navItems.map((item) => (
    <MenuItem as={Link} to={item.path} key={item.label}>
      {item.label}
    </MenuItem>
  ));

  return (
    <div>
      <nav className="bg-blue-500 ">
        <div className="p-4 max-w-screen-xl mx-auto">
          <div className="flex justify-between items-center">
            <Link
              to={"/"}
              className="  border p-3 rounded text-white font-semibold text-lg "
            >
              <h1>CollegeBooking</h1>
            </Link>

            <div>
              <ul className=" hidden md:flex gap-5 items-center text-white font-semibold text-lg">
                {/* {items} */}
              </ul>
              <Menu>
                <MenuButton>Open menu</MenuButton>
                <MenuList>{items}</MenuList>
              </Menu>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
