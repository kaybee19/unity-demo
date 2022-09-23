import { Route, Routes, Navigate } from 'react-router-dom'
import Editor from './pages/Editor'

// Checkout Context
import { CheckoutProvider } from "./context/CheckoutContext";

function App() {
  return (
    <CheckoutProvider>
      <div className="App">
        <Routes>
          <Route path="/:id" element={<Editor />} />
          {/* <Route path="*" element={<Navigate to="/1" />}/> */}
        </Routes>
      </div>
    </CheckoutProvider>
  );
}

export default App;
