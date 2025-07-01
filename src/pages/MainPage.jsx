import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";

export default function MainPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Data z backendu:</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Načítání dat...</p>
      )}
    </div>
  );
}
