import React from "react";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-600">
      <div className="container mx-auto w-screen h-screen flex items-center justify-center">
        <Counter />
      </div>
    </div>
  );
}

export default App;
