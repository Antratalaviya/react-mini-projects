import { useState } from "react"

function App() {
  const [color, setColor] = useState('');

  return (
    <div style={{backgroundColor : color}} className="h-screen w-screen">
      <div className="flex flex-wrap justify-center lg:space-x-2 space-y-2 space-x-2">
        <div className="rounded-lg shadow-md overflow-hidden md:flex lg:flex-col mt-2 ml-2">
          <div>
            <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8z6COdqAuSOZDxwftc8Lp0gw-bHdMrkHgwvN4H9YLQ&s" alt="img" />
          </div>
          <div className="p-2 md:p-5">
            <div className="flex align-middle justify-between py-2">
              <h1 className="text-xl text-slate-900 font-sans">Image collection</h1>
              <div className="text-slate-500 text-center">$100</div>
            </div>
            <div className="text-slate-600 peer font-semibold">
              img size
            </div>
            <div className="flex flex-wrap space-x-2 py-2">
              <label>
                <input type="radio" className="peer hidden" defaultChecked />
                <div className="w-9 h-9 flex justify-center items-center text-slate-700 p-2 shadow rounded-lg delay-300 ease-in peer-checked:bg-pink-500 peer-checked:font-semibold peer-checked:text-white">XS</div>
              </label>
              <input type="radio" className="peer hidden" />
              <div className="w-9 h-9 flex justify-center items-center text-slate-700 p-2 shadow rounded-lg delay-300 ease-in peer-checked:bg-pink-500 peer-checked:font-semibold peer-checked:text-white">S</div>
              <input type="radio" className="peer hidden" />
              <div className="w-9 h-9 flex justify-center items-center  text-slate-700 p-2 shadow rounded-lg delay-300 ease-in peer-checked:bg-pink-500 peer-checked:font-semibold peer-checked:text-white">M</div>
              <input type="radio" className="peer hidden" />
              <div className="w-9 h-9 flex justify-center items-center text-slate-700 p-2 shadow rounded-lg delay-300 ease-in peer-checked:bg-pink-500 peer-checked:font-semibold peer-checked:text-white">L</div>
              <input type="radio" className="peer hidden" />
              <div className="w-9 h-9 flex justify-center items-center  text-slate-700 p-2 shadow rounded-lg delay-300 ease-in peer-checked:bg-pink-500 peer-checked:font-semibold peer-checked:text-white">XL</div>
            </div>
            <div className="flex">
              <div className="py-2 flex flex-auto justify-between align-middle md:max-lg:flex-none">
                <button className="font-semibold bg-pink-500 h-10 px-6 text-white mr-1 rounded-md md:max-md:h-7 md:max-md:text-sm">
                  Buy now
                </button>
                <button className="font-semibold h-10 px-6 text-black shadow rounded-md md:max-md:h-7 md:max-md:text-sm">
                  Add to Bag
                </button>
              </div>
            </div>
            <p className="text-slate-500 p-2 text-sm">
              Free shipping on all continental US orders.
            </p>
          </div>
        </div>
        <div className="rounded-lg shadow-md overflow-hidden md:flex lg:flex-col">
          <div>
            <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8z6COdqAuSOZDxwftc8Lp0gw-bHdMrkHgwvN4H9YLQ&s" alt="img" />
          </div>
          <div className="p-2 md:p-5">
            <div className="flex align-middle justify-between py-2">
              <h1 className="text-xl text-slate-900 font-sans">Image collection</h1>
              <div className="text-slate-500 text-center">$100</div>
            </div>
            <div className="text-slate-600 peer font-semibold">
              img size
            </div>
            <div className="flex flex-wrap space-x-2 py-2">
              <label>
                <input type="radio" className="peer hidden" defaultChecked />
                <div className="w-9 h-9 flex justify-center items-center text-slate-700 p-2 shadow rounded-lg delay-300 ease-in peer-checked:bg-pink-500 peer-checked:font-semibold peer-checked:text-white">XS</div>
              </label>
              <input type="radio" className="peer hidden" />
              <div className="w-9 h-9 flex justify-center items-center text-slate-700 p-2 shadow rounded-lg delay-300 ease-in peer-checked:bg-pink-500 peer-checked:font-semibold peer-checked:text-white">S</div>
              <input type="radio" className="peer hidden" />
              <div className="w-9 h-9 flex justify-center items-center  text-slate-700 p-2 shadow rounded-lg delay-300 ease-in peer-checked:bg-pink-500 peer-checked:font-semibold peer-checked:text-white">M</div>
              <input type="radio" className="peer hidden" />
              <div className="w-9 h-9 flex justify-center items-center text-slate-700 p-2 shadow rounded-lg delay-300 ease-in peer-checked:bg-pink-500 peer-checked:font-semibold peer-checked:text-white">L</div>
              <input type="radio" className="peer hidden" />
              <div className="w-9 h-9 flex justify-center items-center  text-slate-700 p-2 shadow rounded-lg delay-300 ease-in peer-checked:bg-pink-500 peer-checked:font-semibold peer-checked:text-white">XL</div>
            </div>
            <div className="flex">
              <div className="py-2 flex flex-auto justify-between align-middle md:max-lg:flex-none">
                <button className="font-semibold bg-pink-500 h-10 px-6 text-white mr-1 rounded-md md:max-md:h-7 md:max-md:text-sm">
                  Buy now
                </button>
                <button className="font-semibold h-10 px-6 text-black shadow rounded-md md:max-md:h-7 md:max-md:text-sm">
                  Add to Bag
                </button>
              </div>
            </div>
            <p className="text-slate-500 p-2 text-sm">
              Free shipping on all continental US orders.
            </p>
          </div>
        </div>
        <div className="rounded-lg shadow-md overflow-hidden md:flex lg:flex-col">
          <div>
            <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8z6COdqAuSOZDxwftc8Lp0gw-bHdMrkHgwvN4H9YLQ&s" alt="img" />
          </div>
          <div className="p-2 md:p-5">
            <div className="flex align-middle justify-between py-2">
              <h1 className="text-xl text-slate-900 font-sans">Image collection</h1>
              <div className="text-slate-500 text-center">$100</div>
            </div>
            <div className="text-slate-600 peer font-semibold">
              img size
            </div>
            <div className="flex flex-wrap space-x-2 py-2">
              <label>
                <input type="radio" className="peer hidden" defaultChecked />
                <div className="w-9 h-9 flex justify-center items-center text-slate-700 p-2 shadow rounded-lg delay-300 ease-in peer-checked:bg-pink-500 peer-checked:font-semibold peer-checked:text-white">XS</div>
              </label>
              <input type="radio" className="peer hidden" />
              <div className="w-9 h-9 flex justify-center items-center text-slate-700 p-2 shadow rounded-lg delay-300 ease-in peer-checked:bg-pink-500 peer-checked:font-semibold peer-checked:text-white">S</div>
              <input type="radio" className="peer hidden" />
              <div className="w-9 h-9 flex justify-center items-center  text-slate-700 p-2 shadow rounded-lg delay-300 ease-in peer-checked:bg-pink-500 peer-checked:font-semibold peer-checked:text-white">M</div>
              <input type="radio" className="peer hidden" />
              <div className="w-9 h-9 flex justify-center items-center text-slate-700 p-2 shadow rounded-lg delay-300 ease-in peer-checked:bg-pink-500 peer-checked:font-semibold peer-checked:text-white">L</div>
              <input type="radio" className="peer hidden" />
              <div className="w-9 h-9 flex justify-center items-center  text-slate-700 p-2 shadow rounded-lg delay-300 ease-in peer-checked:bg-pink-500 peer-checked:font-semibold peer-checked:text-white">XL</div>
            </div>
            <div className="flex">
              <div className="py-2 flex flex-auto justify-between align-middle md:max-lg:flex-none">
                <button className="font-semibold bg-pink-500 h-10 px-6 text-white mr-1 rounded-md md:max-md:h-7 md:max-md:text-sm">
                  Buy now
                </button>
                <button className="font-semibold h-10 px-6 text-black shadow rounded-md md:max-md:h-7 md:max-md:text-sm">
                  Add to Bag
                </button>
              </div>
            </div>
            <p className="text-slate-500 p-2 text-sm">
              Free shipping on all continental US orders.
            </p>
          </div>
        </div>
      </div>

      <div className="flex p-4 flex-wrap rounded-full justify-center shadow-md m-3 space-x-2">
        <div className="flex justify-center align-middle shadow text-sm font-semibold text-white bg-red-300 rounded-full">
          <button className="outline-none px-5 py-3" onClick={()=>setColor("rgb(252 165 165)")}>
            Red
          </button>
        </div>
        <div className="flex justify-center align-middle shadow text-sm font-semibold text-white bg-sky-500 rounded-full">
          <button className="outline-none px-5 py-3" onClick={()=>setColor("rgb(14 165 233)")}>
            Blue
          </button>
        </div>
        <div className="flex justify-center align-middle shadow text-sm font-semibold text-white bg-amber-400 rounded-full">
          <button className="outline-none px-5 py-3" onClick={()=>setColor("rgb(251 191 36)")}>
            Orange
          </button>
        </div>
        <div className="flex justify-center align-middle shadow text-sm font-semibold text-white bg-lime-300 rounded-full">
          <button className="outline-none px-5 py-3" onClick={()=>setColor("rgb(190 242 100 )")}>
            Green
          </button>
        </div>
        <div className="flex justify-center align-middle shadow text-sm font-semibold text-white bg-cyan-400 rounded-full">
          <button className="outline-none px-5 py-3" onClick={()=>setColor("cyan")}>
            Cyan
          </button>
        </div>
        <div className="flex justify-center align-middle shadow text-sm font-semibold text-white bg-purple-400 rounded-full">
          <button className="outline-none px-5 py-3" onClick={()=>setColor("lavender")}>
            Lavender
          </button>
        </div>
        <div className="flex justify-center align-middle shadow text-sm font-semibold text-black bg-pink-300 rounded-full">
          <button className="outline-none px-5 py-3" onClick={()=>setColor("pink")}>
            Pink
          </button>
        </div>
        <div className="flex justify-center align-middle shadow text-sm font-semibold text-black bg-slate-300 rounded-full">
          <button className="outline-none px-5 py-3" onClick={()=>setColor("rgb(203 213 225)")}>
            Slate
          </button>
        </div>
        <div className="flex justify-center align-middle shadow text-sm font-semibold text-black bg-white rounded-full">
          <button className="outline-none px-5 py-3" onClick={()=>setColor("white")}>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
