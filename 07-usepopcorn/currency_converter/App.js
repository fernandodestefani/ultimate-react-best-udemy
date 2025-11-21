import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      const controller = new AbortController();
      async function currencyConverter() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching currencies");

          const data = await res.json();
          setResult(data.rates[toCurrency]);
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
            setResult(null);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (fromCurrency === toCurrency) return setResult(amount)
      currencyConverter();
      return () => controller.abort();
    },
    [amount, fromCurrency, toCurrency]
  );

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{result !== null ? result.toFixed(2) + " " + toCurrency : "..."}</p>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
