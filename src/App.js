// import logo from './logo.svg';
// import './App.scss';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import DealerHome from "./pages/dealer/dealer_home";
import OutletHome from "./pages/outlet/outlet_home";
import CarsXL7 from "./pages/cars/cars_xl7";
import FrontendRoutes from "./routes/FrontendRoutes";
import ReactModal from "react-modal";
import { useState } from "react";

function App() {
  const [modalState, setModalState] = useState(false);

  const handleOpenModal = () => {
    setModalState(true)
  }

  const handleCloseModal = () => {
    setModalState(false)
  }

  return (
    <div>
      <ReactModal 
        isOpen={modalState} 
        closeTimeoutMS={100}
        onRequestClose={handleCloseModal}
        style={{
          overlay: {
            "transition": "all 100ms cubic-bezier(0.8, 0, 0.2, 1)",
            "z-index": "4000",
            "background-color": "rgba(0, 0, 0, 0.75)",
          }
        }}
      >
        <div className="button" onClick={handleCloseModal}>
          Close Modal
        </div>
      </ReactModal>
      <BrowserRouter>
        <Switch>
          <Route exact path={FrontendRoutes.dealer.home}>
            <DealerHome/>
          </Route>
          <Route exact path={FrontendRoutes.outlet.home}>
            <OutletHome/>
          </Route>
          <Route exact path={FrontendRoutes.cars.xl7.home}>
            <CarsXL7 handler={{handleOpenModal, handleCloseModal}}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
