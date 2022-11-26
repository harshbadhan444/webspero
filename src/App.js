import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Table from './components/Table';
import RecordDetail from './container/RecordDetail';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Routes>
        <Route path="/" element={<Table />} />
      </Routes>
      <Routes>
        <Route path="/detail/:id" element={<RecordDetail />} />
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
