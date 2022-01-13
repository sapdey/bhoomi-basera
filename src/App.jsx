import { BrowserRouter } from "react-router-dom";
import ApplicationRoutes from "./routes";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter basename="/bhoomi-basera">
      <ApplicationRoutes />
    </BrowserRouter>
  );
};

export default App;
