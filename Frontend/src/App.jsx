import { BrowserRouter, Route, Routes } from 'react-router'
import AnalysePage from './pages/AnalysePage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analyse" element={<AnalysePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
