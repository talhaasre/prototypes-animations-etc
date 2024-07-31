import { BrowserRouter, Route, Routes } from "react-router-dom";
import Routing from "./Routing";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MetaDecorator from "./components/MetaDecorator/MetaDecorator";
function App() {
  return (
    <>
      <MetaDecorator
        metaTitle="Talha Asre - Prototypes, Animations & more."
        metaDesc="Talha Asre - Prototypes, Animations & more."
        canonicalLink={window.location}
      />
      <ToastContainer />

      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="*" element={<Routing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
