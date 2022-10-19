import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";

const App = () => {
  return (
    <div>
      <HelloWorld />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
