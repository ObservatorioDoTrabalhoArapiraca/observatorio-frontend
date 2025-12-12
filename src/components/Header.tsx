// import "./Header.css"

const Header = () => {
  return (
    <header>
      <div className="p-4 flex items-center justify-between flex-col md:flex-row gap-4">
        <div className="p-1 flex items-center gap-4">
          <div className="w-16 h-16">
            <img
              src="/images/logo-arapiraca.png"
              alt="Brasão da cidade de Arapiraca"
            
            />
          </div>
          <div className="">
            <h1>Observatório do Trabalho</h1>
            <p>Prefeitura Municipal de Arapiraca</p>
          </div>
        </div>
        <div className="w-56  ">
          <img src="/images/sine-logo-min.jpg" alt="Logo do Sine" className="" />
        </div>
      </div>
    </header>
  )
}

export default Header
