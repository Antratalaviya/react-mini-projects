import { CiSearch } from "react-icons/ci";
import { MdMessage, MdAddCircle, MdEventAvailable } from "react-icons/md";
import { IoMdPerson, IoLogoAngular } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { RiHome5Fill, RiBuilding2Fill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
function App() {

  return (
    <div className="grid grid-cols-12 w-screen h-screen">
      <div className="bg-black text-white/80 h-full col-span-auto">
        <IoLogoAngular />
        <div>
          <ul>
            <li><MdAddCircle />Add Event</li>
            <li><RiHome5Fill/>Home</li>
            <li><TiMessages/>Messages</li>
            <li><RiBuilding2Fill/>Building</li>
            <li><MdEventAvailable/>Events</li>
          </ul>
        </div>
        <div>
          <ul>
            <li><IoSettingsSharp/>Settings</li>
            <li><FaSignInAlt/>Sign In</li>
            <li><FaSignOutAlt/>Logout</li>
          </ul>
        </div>
      </div>
      <div className="col-span-11">
        <div className="flex bg-black/75">
          <div>
            <h1>Flex</h1>
          </div>
          <div>
            <CiSearch />
            <MdMessage />
            <IoMdPerson />
          </div>
        </div>
        <div>Pages</div>
      </div>
    </div>
  )
}

export default App
