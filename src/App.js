import { Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import Home from './pages';
import Authentication from './pages/Authentication';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='signin' element={<Authentication />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;
