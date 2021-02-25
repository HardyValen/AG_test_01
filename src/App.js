// import logo from './logo.svg';
// import './App.scss';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import DealerHome from "./pages/dealer/dealer_home";
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
            Outlet
          </Route>
          <Route exact path={FrontendRoutes.cars.xl7.home}>
            XL7
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
