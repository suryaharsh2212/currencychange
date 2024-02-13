import { useState } from 'react'
import Input from './assets/components/Input'
import currency_ from './assets/components/Data'


function App() {
  const [amount,setamount]=useState()
  const [from,setfrom]=useState("usd")
  const [to,setto]=useState("inr")
  const [convertedamount,setconvertedamount]=useState()
  let currencyinfo=currency_(from);
  const options= Object.keys(currencyinfo);
  
  const converter=()=>{
    setconvertedamount(amount*currencyinfo[to])
  }
  const swap = () => {
    setfrom(to);
    setto(from);
    setamount(convertedamount);
    setconvertedamount(amount);
  }
  return (
    <>
    <div className='flex flex-wrap justify-center items-center flex-column h-screen w-screen '>
      <div>
        <Input
        label="From"
        amount={amount}
        onamountchange={(amount)=>setamount(amount)}
        currencyoptions={options}
         oncurrencychange={(from)=>setfrom(from)} 
        selectcurrency={from}

        /> 
        <div className='flex justify-center'>
        <button onClick={()=>swap()} className=' z-10 bg-slate-500 text-white p-3 rounded-xl'>Swap</button>
        </div>
         <Input
        label="To"
        amount={convertedamount}
        onamountchange={(amount)=>setamount(convertedamount)}
        currencyoptions={options}
         oncurrencychange={(to)=>setto(to)} 
        selectcurrency={to}
        />
      </div>
      <button onClick={converter} className=' top-1/3 bg-slate-500 text-white p-3 rounded-xl'>Convert {from} to {to}</button>
     

    </div>
    
   

    </>
  )
}

export default App
