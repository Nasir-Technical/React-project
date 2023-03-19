import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./config/router";
import { Autocomplete } from "@mui/material";

function App() {
  return (
    <div className="bg-light">
      <AppRouter />
      <Autocomplete/>
    </div>
  );
}

export default App;
