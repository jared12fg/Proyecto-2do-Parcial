import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import "./styles.css";
import { IconContext } from "react-icons";
import Photo from "../img/doom.png";
import DatosRecordatorio from "../modals/DatosRecordatorio";
import Swal from "sweetalert2";


function Recordatorio() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  //Alerta para cerrar sesion
  const navigate = useNavigate();
  const handleLogout = () => {
    Swal.fire({
      title: "¿Quieres Cerrar Sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Realiza la lógica de cierre de sesión necesaria
        Swal.fire("¡Sesión cerrada!", "", "success");
  
        // Redirige al usuario a la página de inicio de sesión
        navigate('/');
      }
    });
  };

  return (
    <>
       <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h2 className="titulo">Recordatorio</h2>
        </div>
        
        {/*Menu lateral */}
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <div className="spaUser">
              <img src={Photo} alt="Imagen de usuario"></img>
            </div>
            <div className="nameUser">
              <p>Angel Montalvo</p>
            </div>

            <Link to="/main" className="d-flex align-items-center coll">
              <FaIcons.FaHome className="mr-2" /> {/* Icono para Home */}
              <span>Menu Principal</span>
            </Link>

            <Link to="/tareas" className="d-flex align-items-center coll">
              <FaIcons.FaTasks className="mr-2" /> {/* Icono para Tareas Asignadas */}
              <span>Tareas Asignadas</span>
            </Link>

            <Link to="/calendario" className="d-flex align-items-center coll">
              <FaIcons.FaCalendarAlt className="mr-2" /> {/* Icono para Calendario */}
              <span>Calendario</span>
            </Link>

            <Link to="/recordatorio" className="d-flex align-items-center coll">
              <FaIcons.FaBell className="mr-2" /> {/* Icono para Recordatorio */}
              <span>Recordatorio</span>
            </Link>

            <Link  className="d-flex align-items-center cerrar" onClick={handleLogout}>
              <FaIcons.FaSignOutAlt className="mr-2" /> {/* Icono para Cerrar Sesión */}
              <span>Cerrar Sesión</span>
            </Link>
          </ul>
        </nav>

        {/*Card con informacion */}
        <DatosRecordatorio></DatosRecordatorio>
      </IconContext.Provider>
    </>
  );
}

export default Recordatorio;
