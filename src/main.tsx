import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// App already includes a BrowserRouter. Render App directly here.
createRoot(document.getElementById("root")!).render(<App />);
