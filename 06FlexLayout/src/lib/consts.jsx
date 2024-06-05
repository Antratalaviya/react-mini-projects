import { MdAddCircle, MdEventAvailable } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { RiBuilding2Fill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

export const navlinks = [
  {
    key: "addEvent",
    label: "Add Event",
    icon: <MdAddCircle />,
    path: "/",
    active : true,
  },
  {
    key: "message",
    label: "Messages",
    icon: <TiMessages />,
    path: "/",
  },
  {
    key: "building",
    label: "Building",
    icon: <RiBuilding2Fill />,
    path: "/",
  },
  {
    key: "events",
    label: "Events",
    icon: <MdEventAvailable />,
    path: "/",
  },
];

export const navfooterLinks = [
  {
    key: "settings",
    label: "Settings",
    icon: <IoSettingsSharp />,
    path: "/",
  },
  {
    key: "signin",
    label: "Sign In",
    icon: <FaSignInAlt />,
    path: "/",
  },
  {
    key: "signout",
    label: "Logout",
    icon: <FaSignOutAlt />,
    path: "/",
  },
];
