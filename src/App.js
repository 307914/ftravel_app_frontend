import { Route, Routes } from 'react-router';
import './App.css';

import { Home } from './pages/home/home';
import { SearchResult, SingleHotel } from './pages';
import { Hotel } from './components';
import { Filter } from './components/filter';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/hotels/:name/:category/:id/reserve'
        element={<SingleHotel />}
      ></Route>
      <Route path='/hotels/:destination' element={<SearchResult />}></Route>
      <Route path='/filter' element={<Filter />} />
    </Routes>
  );
}

export default App;
