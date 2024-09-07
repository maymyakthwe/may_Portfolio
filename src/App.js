import Home from './components/Home/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorkMenu from './components/WorkProjects/WorkMenu/WorkMenu';
import ProjectDetail from './components/WorkProjects/WorkMenu/Project/ProjectDetail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<WorkMenu />} />
          <Route path='/projects/:id' element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
