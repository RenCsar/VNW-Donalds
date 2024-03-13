import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import GlobalStyle from "../utils/globalStyles";
import Erro from "../pages/Erro";
import DefaultPage from "../pages/DefaultPage";

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Erro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Router;