import { Route, Routes, Navigate } from 'react-router-dom'
import Editor from './pages/Editor'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:id" element={<Editor />} />
        {/* <Route path="*" element={<Navigate to="/1" />}/> */}
      </Routes>
    </div>
  );
}

export default App;
