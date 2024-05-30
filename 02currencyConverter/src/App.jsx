import { useEffect, useState } from "react";
import InputField from "./Components/InputField"
import useCurrencyRef from "./hooks/useCurrencyRef"

function App() {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [to, setTo] = useState('INR');
  const [from, setFrom] = useState('USD');

  const data = useCurrencyRef(from);
  const options = Object.keys(data);

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }


  const handleConvert = () => {
    setConvertedAmount(amount * data[to]);
  }

  return (
    <>
      <div
        style={{ backgroundImage: "url('https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
        className='w-full h-screen overflow-hidden bg-cover bg-no-repeat flex justify-center items-center'>
        <div className="w-full max-w-md p-5 rounded-lg border-gray-600 gap-y-2 bg-white/30 backdrop-blur-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleConvert();
            }}
          >
            <div className="w-full mb-2">
              <InputField
                label='From'
                amount={amount}
                currency={from}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(curr) => setFrom(curr)}
                currencyOptions={options}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full">
              <button
                className="absolute left-1/2 outline-none -translate-x-1/2 -translate-y-1/2 bg-pink-600 text-white w-24 h-12 border-none rounded-lg"
                onClick={handleSwap}
              >Swap
              </button>
            </div>
            <div className="w-full mt-2">

              <InputField
                label='To'
                amount={convertedAmount}
                currency={to}
                onCurrencyChange={(curr) => setTo(curr)}
                currencyOptions={options}
                selectCurrency={to}
                amountDisabled
              />
            </div>
            <button
              className="w-full h-12 flex justify-center items-center text-white font-semibold rounded-lg bg-pink-600 mt-2"
              type="submit"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
