import React, { FC, useEffect, useState } from "react";

export interface ConverterProps {
    value: number; 
    currency: string;
    onChangeValue?: (param: any) => void; 
    onChangeCurrency: (param: any) => void;
  }

const Converter = ({ value, currency, onChangeValue, onChangeCurrency }: ConverterProps) => {
  const defaultCurrencies = ["RUB", "USD", "EUR", "GBP"];
  
    return (
    <div className="font-main">
      <ul className="flex list-none border border-solid rounded overflow-hidden">
        {defaultCurrencies.map((cur) => (
          <li
            onClick={() => onChangeCurrency(cur)}
            className={currency === cur ? "inline-flex py-2 px-4 cursor-pointer bg-green-500 text-white justify-center flex-1" : "inline-flex py-2 px-4 cursor-pointer justify-center flex-1 last-of-type:inline-flex, items-center"}
            key={cur}
          >
            {cur}
          </li>
        ))}
        <li className="flex justify-center items-center w-6 m-2 cursor-pointer">
          <svg className="w-4 h-4" height="50px" viewBox="0 0 50 50" width="50px">
            <rect fill="none" height="50" width="50" />
            <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
          </svg>
        </li>
      </ul>
      <input
      className="py-5 px-5 outline-none tracking-[1.3px] text-5xl font-bold rounded-md mt-5 border border-solid w-full"
      onChange={(e) => onChangeValue?.(e.target.value)}
      value={value}
      type="number"
      placeholder={`${0}`}
    />
    </div>
    )
};

export default Converter;
