import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import Home from './component/Home';
import AppRouter from './config/Router'


function App() {


  return (
    <div className="App">

      <Provider store={store} >

      <AppRouter />

      </Provider>

    </div>
  );
}

export default App;
