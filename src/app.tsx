import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BarPlot from './pages/BarPlot';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/bar" element={<BarPlot />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
