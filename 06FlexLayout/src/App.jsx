import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdMessage, MdDelete } from "react-icons/md";
import { IoMdPerson, IoLogoAngular } from "react-icons/io";
import { navfooterLinks, navlinks } from "./lib/consts";
import Modal from './Modal';
function App() {

  const [profileOpen, setProfileOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <div className="flex flex-row w-screen h-screen overflow-hidden">
      <Modal open={deleteOpen} onClose={() => setDeleteOpen(false)}>
        <div className='mx-auto w-56 text-center'>
          <MdDelete className='text-red-600 w-11 mx-auto h-11 cursor-pointer' />
          <div className='mx-auto'>
            <h3 className='text-lg font-black mx-auto'>Confirm Delete</h3>
            <p>Are you sure you want to delete it</p>
          </div>
        </div>

      </Modal>
      <div className="bg-black text-white/80 text-base items-center">
        <div className="py-4 grid place-items-center">
          <IoLogoAngular fontSize={40} />
        </div>
        <div className="">
          <ul className="">
            {navlinks && navlinks.map((item) => (
              <a href={item.path} key={item.key}>
                <div className={`${item.active ? "bg-blue-700" : ""} flex p-4 items-center gap-x-2`}>
                  {item.icon}
                  <p>{item.label}</p>
                </div>
              </a>
            ))}
          </ul>
          <hr />
          <ul className="absolute bottom-3 left-0">
            {navfooterLinks && navfooterLinks.map((item) => (
              <a href={item.path} key={item.key}>
                <div className={`${item.active ? "bg-blue-700" : ""} flex p-4 items-center gap-x-2`}>
                  {item.icon}
                  <p>{item.label}</p>
                </div>
              </a>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex bg-neutral-500/25 p-4">
          <h1 className="text-3xl text-black/80 flex-1">Flex</h1>
          <div className="flex gap-x-4 text-2xl items-center justify-around">
            <div className="flex items-center md:ring-1 md:ring-black/40 md:rounded-sm gap-x-2 p-1">
              <CiSearch />
              <input
                type="text"
                placeholder="Search"
                className="focus:outline-none text-sm px-2 py-1 bg-transparent hidden md:block"
              />
            </div>
            <MdMessage />
            <div className="ring-1 ring-black/80 rounded-full p-1 relative">
              <IoMdPerson className='cursor-pointer' onClick={() => setProfileOpen(!profileOpen)} />
              <div className={`bg-white ring-1 ring-black/25 gap-y-2 text-sm ${profileOpen ? "absolute top-[110%] right-3" : "hidden"}`}>
                <p className='border-b border-black/25 py-2 px-5 cursor-pointer hover:bg-black/10'>Profile</p>
                <p className='border-b border-black/25 py-2 px-5 cursor-pointer hover:bg-black/10'>Settings</p>
                <p className='border-b border-black/25 py-2 px-5 cursor-pointer hover:bg-black/10'>Logout</p>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 gap-2 overflow-y-scroll p-2'>
          <div className='col-span-8 gap-2 space-y-2'>
            <div className='bg-pink-200 p-32 grid place-items-center'>

              <MdDelete className='text-red-600 w-11 h-11 cursor-pointer' onClick={() => setDeleteOpen(true)} />
            </div>
            <div className='grid grid-flow-dense col-span-8 gap-2'>
              <div className='bg-yellow-400 col-span-1 p-4'></div>
              <div className='bg-blue-800 col-span-3 p-4'></div>
              <div className='bg-emerald-500 col-span-2 p-4'></div>
              <div className='bg-rose-400 col-span-1 p-4'></div>
              <div className='bg-neutral-400 col-span-1 p-4'></div>
              <div className='bg-green-400 col-span-3 p-4'></div>
              <div className='bg-pink-500 col-span-1 p-4'></div>
              <div className='bg-orange-300 col-span-4 p-4'></div>
              <div className='bg-emerald-800 col-span-2 p-4'></div>
              <div className='bg-rose-700 col-span-1 p-4'></div>
              <div className='bg-neutral-800 col-span-1 p-4'></div>
              <div className='bg-green-300 col-span-3 p-4'></div>
              <div className='bg-pink-200 col-span-1 p-4'></div>
            </div>

          </div>
          <div className='col-span-4 gap-2 space-y-2'>
            <div className='bg-green-400 p-12'></div>
            <div className='grid gap-2'>
              <div className='bg-indigo-600 p-16'></div>
              <div className='bg-indigo-600 p-16'></div>
              <div className='bg-indigo-600 p-16'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App



