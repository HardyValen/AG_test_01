// import logo from './logo.svg';
// import './App.scss';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import DealerHome from "./pages/dealer/dealer_home";
import OutletHome from "./pages/outlet/outlet_home";
import CarsXL7 from "./pages/cars/cars_xl7";
import FrontendRoutes from "./routes/FrontendRoutes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={FrontendRoutes.dealer.home}>
            <DealerHome/>
          </Route>
          <Route exact path={FrontendRoutes.outlet.home}>
            <OutletHome/>
          </Route>
          <Route exact path={FrontendRoutes.cars.xl7.home}>
            <CarsXL7/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
