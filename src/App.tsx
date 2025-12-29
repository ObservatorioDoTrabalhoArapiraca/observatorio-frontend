import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navigation from "./components/Navigation"

import { routePaths } from "@/lib/routes"

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Navigation />
        <main>
          {/* retirar os main de todas as páginas */}
          <Routes>
            {routePaths.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
