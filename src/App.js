import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/**
 *
 * Layout
 */
import Header from "./componentes/layout/Header";
import Navegacion from "./componentes/layout/navegacion";
import Clientes from "./componentes/clientes/Clientes";
import Pedidos from "./componentes/pedidos/Pedidos";
import Productos from "./componentes/productos/Productos";

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <div class="grid contenedor contenido-principal">
          <Navegacion />
          <main class="caja-contenido col-9">
            {/* Routing a los diferentes recursos */}
            <Routes>
              <Route exact path="/" element={<Clientes />} />

              <Route exact path="/productos" element={<Productos />} />

              <Route exact path="/pedidos" element={<Pedidos />} />
            </Routes>
          </main>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
