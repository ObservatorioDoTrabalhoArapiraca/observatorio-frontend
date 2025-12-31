import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navigation from "./components/Navigation"

import { routePaths } from "@/lib/routes"
import { AlertCircle } from "lucide-react"

function App() {
  return (
    <div className="App">
      <div className="bg-red-500 text-white p-2  flex items-center justify-center gap-2">
        <AlertCircle /> Atenção! Site em desenvolvimento. Os dados mostrados aqui são fictícios e não representam dados reais do SINE. Data prevista para lançamento: 30/05/2026 ou quando esse aviso parar de ser exibido.
      </div>
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
