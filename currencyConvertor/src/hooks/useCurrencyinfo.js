import { use, useState } from "react";
import { useEffect } from "react";

function useCurrencyinfo(amount,fromCurrency,toCurrency){
    let [data,setData]=useState({})
    let [response,setResponse] = useState({})
    useEffect(()=>{
        async function fetchData(currency){
            const res= await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_M5Uj3eu61GEj0CGtrwrTauCrIGnxi1fUDpCy1KRL")
            const result = await res.json() 
            const resultData = result.data   
            setResponse(resultData)
            let fromCurrencyValue= resultData[fromCurrency].value
            let toCurrencyValue = resultData[toCurrency].value
            let value = amount*[toCurrencyValue/fromCurrencyValue]
            setData(value)
                    console.log(value)

        }    
        fetchData()
        
    },[amount,fromCurrency,toCurrency])
    console.log(response)
    return {
        response,
        convertedAmount:data
    }

}
export default useCurrencyinfo;