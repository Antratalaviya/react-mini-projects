import React from 'react'

function InputField({
    label,
    amount,
    onCurrencyChange,
    onAmountChange,
    currencyOptions = [],
    amountDisabled = false,
    currencyDisabled = false,
    selectCurrency,
    className = ''
}) {
    return (
        <div className={`rounded-lg py-3 px-5 bg-white mx-auto flex justify-between ${className}`}>
            <div className='flex flex-col w-1/2'>
                <label htmlFor='uniqueInput' className='text-gray-700'>{label}</label>
                <input
                    id='uniqueInput'
                    type="number"
                    placeholder='Amount'
                    className='outline-none py-1 my-1 text-xs w-48 bg-transparent'
                    value={amount}
                    disabled={amountDisabled}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className='w-1/3 flex flex-col'>
                <label className='text-gray-700 text-right'>Currency Type</label>
                <select
                    className='outline-none py-1 my-1 bg-transparent rounded-lg text-right text-xs'
                    value={selectCurrency}
                    disabled={currencyDisabled}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => (

                        <option value={currency} key={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputField
