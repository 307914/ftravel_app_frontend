import { Route, Routes } from 'react-router';
import './App.css';

import { Home } from './pages/home/home';
import { SearchResult, SingleHotel } from './pages';
import { Hotel } from './components';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/hotels/:name/:category/:id/reserve'
        element={<SingleHotel />}
      ></Route>
      <Route path='/hotels/:destination' element={<SearchResult />}></Route>
    </Routes>
  );
}

export default App;
