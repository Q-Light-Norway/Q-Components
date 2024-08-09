import { useState } from "react";
import TableComponents from "./Development/TableComponents";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Test react app {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <TableComponents />
    </>
  );
}

export default App;
