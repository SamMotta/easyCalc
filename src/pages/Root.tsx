import { Link, Outlet } from "react-router-dom"
import { useState } from "react"

import Navbar from "../components/Navbar"

import { getCurrentTheme, setTheme } from "../lib/themeChanger";

const drawerTitles = "text-xl font-semibold"

// Root is a Layout Route
function Root() {
  const [isDarkMode, setDarkMode] = useState<boolean>(getCurrentTheme);

  function handleChangeTheme() {
    setTheme()
    setDarkMode(getCurrentTheme)
  }

  return (
    <div className="drawer" data-theme={isDarkMode ? "night" : "cupcake"}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Page content here */}
        <Navbar isDarkMode={isDarkMode} callback={handleChangeTheme} />
        <Outlet />
        {/* <ReloadPrompt /> */}
      </div>
      <ul className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* Sidebar content below here */}
          <h1 className={drawerTitles}>Funções</h1>
          <li><Link to="./funcao/funcaoQuadratica">Função quadrática</Link></li>
          <li><Link to="./funcao/funcaoAfim">Função afim</Link></li>

          <h1 className={drawerTitles}>Movimento uniforme</h1>
          <li><Link to="./fisica/funcaoHorariaEspaco">Função horária do espaço</Link></li>

          <h1 className={drawerTitles}>Movimento circular uniforme</h1>
          <li><Link to="./fisica/aceleracaoCentripetra">Aceleração Centrípetra</Link></li>

          <h1 className={drawerTitles}>Movimento uniforme variado</h1>
          <li><Link to="./fisica/funcaoHorariaVel">Função horária da velocidade</Link></li>

          <h1 className={drawerTitles}>Outros</h1>
          <li><Link to="./outro/conversaoBinario">Conversão para binário</Link></li>
          <li><Link to="./outro/RegraTres">Regra de Três</Link></li>
          <li><Link to="./financeira/JurosSimples">Juros Simples</Link></li>
          <li><Link to="./financeira/JurosCompostos">Juros Compostos</Link></li>
          <li><Link to="./">Porcentagem</Link></li>
          <li><Link to="./fisica/temperatura">Temperatura</Link></li>

        </ul>
      </ul>
    </div>
  )
}

export default Root
