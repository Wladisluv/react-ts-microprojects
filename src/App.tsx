import React, { useEffect, useRef, useState } from 'react'
import Converter from './components/Converter'

const App = () => {

  const [fromCurrency, setFromCurrency] = useState("RUB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromPrice, setFromPrice] = useState(0)
  const [toPrice, setToPrice] = useState(1)
  
  const ratesRef = useRef({});

  useEffect(() => {
    fetch('https://api.exchangerate.host/latest.json')
    .then(res => res.json())
    .then((json) => {
      ratesRef.current = json.rates;
      onChangeToPrice(1);
    })
    .catch(error => console.log('error', error));
  }, []);

  const onChangeFromPrice = (value: number) => {
    const price = value / ratesRef.current[fromCurrency];
    const result = price * ratesRef.current[toCurrency];
    setToPrice(Number(result.toFixed(4)));
    setFromPrice(value);
  }

  const onChangeToPrice = (value: number) => {
    const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
    setFromPrice(Number(result.toFixed(4)));
    setToPrice(value);
  }

  useEffect(() => {
      onChangeFromPrice(fromPrice);
  }, [fromCurrency])

  useEffect(() => {
      onChangeToPrice(toPrice);
  }, [toCurrency])
  
  

  return (
    <div className='grid grid-cols-2 gap-7 w-[800px] m-[100px] p-7 shadow-xl mx-auto'>
      <Converter value={fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromPrice}/>
      <Converter value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency} onChangeValue={onChangeToPrice}/>
    </div>
  )
}

export default App