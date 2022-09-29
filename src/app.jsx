import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Layout from './components/Page/Layout';
import Music from './components/Page/Music';
import Main from './components/Page/Main';
import Animals from './components/Page/Animals';
import Rock from './components/Classic Rock/Rock';
import Jam from './components/Jam Band/Jam';
import Metal from './components/Metal/Metal';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="animals" element={<Animals />} />
          <Route path="music" element={<Music />}>
            <Route index element={<Rock />} />
            <Route path="jam" element={<Jam />} />
            <Route path="metal" element={<Metal />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
