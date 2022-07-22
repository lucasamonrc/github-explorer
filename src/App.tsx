import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { RepoPage } from './pages/Repo';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="repo">
            <Route index element={<NotFound />} />
            <Route path=":repoId" element={<RepoPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
