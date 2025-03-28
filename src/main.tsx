import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Providers } from "./components/providers";

createRoot(document.getElementById("root")!).render(
  <Providers>
    <App />
  </Providers>
);
