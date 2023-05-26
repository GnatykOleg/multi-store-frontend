import { Header } from "./components";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import PagesRoutes from "./pages-routes/PagesRoutes";

const App = () => (
  <>
    <Header />
    <PagesRoutes />
    <ToastContainer />
  </>
);
export default App;
