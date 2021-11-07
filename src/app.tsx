import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './components/Container';
import Navbar from './components/Navbar';
import './global.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PlotPage from './pages/PlotPage';
import { plotRoutes } from './plotRoutes';

const App: FC = () => {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          {plotRoutes.map((r) => (
            <Route
              key={r.to}
              path={r.name}
              element={
                <PlotPage
                  plot={r.plot}
                  title={r.name}
                  description={r.description}
                />
              }
            />
          ))}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
