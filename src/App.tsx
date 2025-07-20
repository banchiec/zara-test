import { BrowserRouter } from 'react-router-dom';
import routes from './config/routes';
import { useRoutes } from 'react-router-dom';

export const AppRouter = () => useRoutes(routes);
const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
