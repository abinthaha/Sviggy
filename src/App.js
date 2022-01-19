import ProductPage from './pages/Product';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ProductPage />
    </Provider>
  );
}

export default App;
