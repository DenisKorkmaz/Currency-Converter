import { useEffect, useState } from "react";
import './Rechner.css';



const flags = {
  USD: "🇺🇸",
  EUR: "🇪🇺",
  JPY: "🇯🇵",
  GBP: "🇬🇧",
  AUD: "🇦🇺",
  CAD: "🇨🇦",
  CHF: "🇨🇭",
  CNY: "🇨🇳",
  SEK: "🇸🇪",
  NZD: "🇳🇿",
  INR: "🇮🇳",
  BRL: "🇧🇷",
  RUB: "🇷🇺",
  ZAR: "🇿🇦",
  MXN: "🇲🇽",
  SGD: "🇸🇬",
  KRW: "🇰🇷",
  TRY: "🇹🇷",
  AED: "🇦🇪",
  NGN: "🇳🇬",
  HKD: "🇭🇰",
  NOK: "🇳🇴",
  DKK: "🇩🇰",
  PHP: "🇵🇭",
  PLN: "🇵🇱",
  MYR: "🇲🇾",
  ILS: "🇮🇱",
  CZK: "🇨🇿",
  HUF: "🇭🇺",
  ARS: "🇦🇷",
  THB: "🇹🇭",
  IDR: "🇮🇩",
  CLP: "🇨🇱",
  SAR: "🇸🇦",
  EGP: "🇪🇬",
  PKR: "🇵🇰",
  DZD: "🇩🇿",
  RON: "🇷🇴",
  COP: "🇨🇴",
  IQD: "🇮🇶",
  UAH: "🇺🇦",
  VND: "🇻🇳",
};

export default function Rechner() {
  const getFlag = (currency) => flags[currency] || "Währung nicht verfügbar";

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        );
        const data = await response.json();
        setExchangeRate(data.rates[toCurrency]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSwitchCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <input
            type="number"
            value={amount}
            placeholder="Betrag"
            onChange={handleAmountChange}
          />
          <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            {Object.keys(flags).map((currency) => (
              <option key={currency} value={currency}>
                {getFlag(currency)} {currency}
              </option>
            ))}
          </select>
          <button className="switch-button" onClick={handleSwitchCurrencies}>
            🔁
          </button>
          <select value={toCurrency} onChange={handleToCurrencyChange}>
            {Object.keys(flags).map((currency) => (
              <option key={currency} value={currency}>
                {getFlag(currency)} {currency}
              </option>
            ))}
          </select>
          <p>
            {amount} {fromCurrency} = {amount * exchangeRate} {toCurrency}
          </p>
        </div>
      )}
    </div>
  );
}
