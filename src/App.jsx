import { useState } from "react";

import FormAntd from "./Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FormAntd />
    </>
  );
}

export default App;
