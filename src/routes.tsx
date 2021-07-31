import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { SignUp } from './pages/SignUp';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route path="*" component={() => <h1>Página não encontrada.</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;