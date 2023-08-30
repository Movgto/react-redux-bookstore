import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Books />} />
            <Route path="/categories" element={<Categories />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
