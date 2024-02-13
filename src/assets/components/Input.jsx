import React from 'react'

function Input({
    label,
    className="",
    amount,
    onamountchange,
    selectcurrency,
    oncurrencychange,
    currencyoptions=[],
    amountdisable=false,
    currencydisable=false



}) {
  return (
     <div className=' '>
     
     
      <div className=' h-40 w-svw   bg-slate-100 flex flex-row justify-center items-center rounded-l'>
            
            <div className='m-3'>
            {label}
                <input type="number" 
                  disabled={amountdisable}
                  value={amount}
                  onChange={(e)=>onamountchange && onamountchange(Number(e.target.value))}
                  className='border rounded-lg'
                
                />
            </div>
            <div className='m-3'>
                Currency type
                <select 
                defaultChecked={currencydisable}
                value={selectcurrency}
                onChange={(e)=>oncurrencychange && oncurrencychange(e.target.value)}
                 
                > 
               {currencyoptions.map((currency)=>(
                <option key={currency} value={currency}>
                   {currency}
                </option>
               ))}
                </select>
            </div>
            
      </div>

  

     </div>
  )
};

export default Input;
