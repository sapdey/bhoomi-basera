import { useLayoutEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import ApplicationRoutes from "./routes";
import "./App.css";
const App = () => {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <BrowserRouter>
      <Wrapper>
        <ApplicationRoutes />
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
