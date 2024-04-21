import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import Loader from './components/utility/Loader';

const Movies = React.lazy(() => import('./pages/Bookmark'));

const Error = React.lazy(() => import('./pages/Error'));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/bookmark" element={<Suspense fallback={<Loader/>}> <Movies /> </Suspense>} /> 
          <Route element={<Suspense fallback={<Loader/>}> <Error /> </Suspense>} /> 
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
