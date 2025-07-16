import { useState } from "react";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Bem vindo ao Meu App Next.js</h1>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default HomePage;