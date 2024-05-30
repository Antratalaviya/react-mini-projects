import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { darkTheme, lightTheme } from "./store/themeSlicer";

function App() {
  const theme = useSelector((state) => state.themeMode)
  const dispatch = useDispatch();

  const handleTheme = (e) => {
    let darkStatus = e.currentTarget.checked;

    if (darkStatus) {
      dispatch(darkTheme())
    } else {
      dispatch(lightTheme())
    }
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(theme);
  }, [theme])

  return (
    <>
      <div className="h-screen w-screen flex justify-center flex-col dark:bg-[#1f1b23] overflow-hidden">
        <label
          className="relative inline-flex items-center cursor-pointer"
        >
          <input
            type="checkbox"
            className="sr-only peer"
            checked={theme === 'dark'}
            onChange={handleTheme}
          />
          <div
            className="mx-auto translate-x-36 border-2 border-pink-400 rounded-md p-1 dark:border-2 dark:border-white dark:bg-black"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-3 fill-pink-400 dark:fill-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-3 stroke-pink-400 dark:stroke-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            )}

          </div>


        </label>

        <div className="flex flex-wrap justify-center lg:space-x-2 space-y-2 space-x-2">

          <div className="rounded-lg shadow-md overflow-hidden md:flex lg:flex-col mt-2 ml-2 dark:border dark:border-white/20 dark:bg-[#184238]">
            <div>
              <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8z6COdqAuSOZDxwftc8Lp0gw-bHdMrkHgwvN4H9YLQ&s" alt="img" />
            </div>
            <div className="p-2 md:p-5">
              <div className="flex align-middle justify-between py-2">
                <h1 className="text-xl text-slate-900 font-sans dark:text-white/90">Image collection</h1>
                <div className="text-slate-500 text-center dark:text-white/50">$100</div>
              </div>
              <div className="text-slate-600 peer font-semibold dark:text-white/60">
                img size
              </div>
              <div className="flex flex-wrap space-x-2 py-2">
                <label>
                  <input type="radio" className="peer hidden" defaultChecked />
                  <div className="w-9 h-9 flex justify-center items-center text-slate-700 p-2 shadow rounded-lg delay-300 ease-in peer-checked:bg-pink-500 peer-checked:font-semibold peer-checked:text-white dark:text-white peer-checked:dark:bg-black/50 peer-checked:dark:text-white dark:shadow-sm dark:shadow-white/30">XS</div>
                </label>
                <input type="radio" className="peer hidden" />
                <div className="w-9 h-9 flex justify-center items-center text-slate-700 p-2 shadow rounded-lg delay-300 ease-in peer-checked:bg-pink-500 peer-checked:font-semibold peer-checked:text-white dark:text-white peer-checked:dark:bg-black/50 peer-checked:dark:text-white dark:shadow-sm dark:shadow-white/30">S</div>
                <input type="radio" className="peer hidden" />
                <div className="w-9 h-9 flex justify-center items-center  text-slate-700 p-2 shadow rounded-lg delay-300 ease-in peer-checked:bg-pink-500 peer-checked:font-semibold peer-checked:text-white
                dark:text-white peer-checked:dark:bg-black/50 peer-checked:dark:text-white dark:shadow-sm dark:shadow-white/30">M</div>
                <input type="radio" className="peer hidden" />
                <div className="w-9 h-9 flex justify-center items-center text-slate-700 p-2 shadow rounded-lg delay-300 ease-in peer-checked:bg-pink-500 peer-checked:font-semibold peer-checked:text-white dark:text-white peer-checked:dark:bg-black/50 peer-checked:dark:text-white dark:shadow-sm dark:shadow-white/30">L</div>
                <input type="radio" className="peer hidden" />
                <div className="w-9 h-9 flex justify-center items-center  text-slate-700 p-2 shadow rounded-lg delay-300 ease-in peer-checked:bg-pink-500 peer-checked:font-semibold peer-checked:text-white dark:text-white peer-checked:dark:bg-black/50 peer-checked:dark:text-white dark:shadow-sm dark:shadow-white/30">XL</div>
              </div>
              <div className="flex">
                <div className="py-2 flex flex-auto justify-between align-middle md:max-lg:flex-none">
                  <button className="font-semibold bg-pink-500 h-10 px-6 text-white mr-1 rounded-md md:max-md:h-7 md:max-md:text-sm dark:bg-black">
                    Buy now
                  </button>
                  <button className="font-semibold h-10 px-6 text-black shadow rounded-md md:max-md:h-7 md:max-md:text-sm dark:bg-white">
                    Add to Bag
                  </button>
                </div>
              </div>
              <p className="text-slate-500 p-2 text-sm dark:text-white/50">
                Free shipping on all continental US orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
