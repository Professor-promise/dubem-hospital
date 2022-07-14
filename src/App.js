import { Routes, Route } from 'react-router-dom';
import Home from './pages';
import Authentication from './pages/Authentication';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='signin' element={<Authentication />} />
    </Routes>
  );
}

export default App;
