import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import {
  HomePage,
  ContactPage,
  PortfolioPage,
  MemberPage,
  ErrorPage,
  PublicationPage,
} from './pages'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/team" element={<MemberPage />} />
          <Route path="/publication" element={<PublicationPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
