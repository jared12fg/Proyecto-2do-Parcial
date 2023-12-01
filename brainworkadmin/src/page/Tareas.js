import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import "./styles.css";
import { IconContext } from "react-icons";
import Photo from "../img/doom.png";
import Modales from "../modals/Modal";
import { Container, Row, Col } from 'react-bootstrap';
import DataTable from "../modals/Tabla";
import './styles.css'
import Swal from "sweetalert2";


function Tareas() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  //Datos de la tabla
  const [taskData] = useState([
    {
      id: 1,
      nombreTareas: 'FrontEnd',
      descripcion: 'Crear una aplicación usando ReactJs',
      materia: 'Programación 1',
      estado: 'Pendiente',
      fechaEntrega: '2023-10-02',
    },
    {
      id: 2,
      nombreTareas: 'Base de datos',
      descripcion: 'Se debe crear una base de datos',
      materia: 'Programación 1',
      estado: 'Pendiente',
      fechaEntrega: '2023-10-05',
    },
    {
      id: 3,
      nombreTareas: 'Subir registros',
      descripcion: 'Subir los registros a la base de datos mediante el sistema',
      materia: 'Bases de datos 1',
      estado: 'Pendiente',
      fechaEntrega: '2023-10-10',
    },
    {
      id: 4,
      nombreTareas: 'Conectar API',
      descripcion: 'Realizar la conexion con la API',
      materia: 'Programación 1',
      estado: 'Pendiente',
      fechaEntrega: '2023-10-15',
    },
    {
      id: 5,
      nombreTareas: 'Revisar registros',
      descripcion: 'Verificar que los registros se encuentre de bien redactados',
      materia: 'Bases de datos 1',
      estado: 'Pendiente',
      fechaEntrega: '2023-10-20',
    },
    {
      id: 6,
      nombreTareas: 'Crear tablas',
      descripcion: 'Crear las tablas necesarias para el sistema',
      materia: 'Bases de datos 1',
      estado: 'Pendiente',
      fechaEntrega: '2023-10-28',
    },
    {
      id: 7,
      nombreTareas: 'Modulo Usuarios',
      descripcion: 'Crear el modulo de usuarios',
      materia: 'Programación 1',
      estado: 'Pendiente',
      fechaEntrega: '2023-11-05',
    },
    {
      id: 8,
      nombreTareas: 'Resumen',
      descripcion: 'Realizar un resumen de 2 cuartillas sobre JavaScript',
      materia: 'Programación 1',
      estado: 'Pendiente',
      fechaEntrega: '2023-11-05',
    },
    {
      id: 9,
      nombreTareas: 'Reporte',
      descripcion: 'Realizar un reporte sobre las bases de datos nos relacionales',
      materia: 'Bases de datos 1',
      estado: 'Pendiente',
      fechaEntrega: '2023-11-10',
    },
    {
      id: 10,
      nombreTareas: 'Investigacion',
      descripcion: 'Realizar una investigacion sobre React Native',
      materia: 'Programación 1',
      estado: 'Pendiente',
      fechaEntrega: '2023-11-12',
    },
    {
      id: 11,
      nombreTareas: 'Investigacion',
      descripcion: 'Realizar una investigacion sobre React JS',
      materia: 'Programación 1',
      estado: 'Pendiente',
      fechaEntrega: '2023-11-22',
    },
    {
      id: 12,
      nombreTareas: 'Reporte',
      descripcion: 'Realizar un reporte sobre las bases de datos no relacionales',
      materia: 'Programación 1',
      estado: 'Pendiente',
      fechaEntrega: '2023-11-22',
    },
    
  ]);

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
          <h2 className="titulo">Tareas Asignadas</h2>
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

        {/*Modal para agregar tareas*/}
        <div className="text-center space">
          <div className="text-center boral">
          <Modales></Modales>
          </div>
          
        </div>

        {/*Tabla de tareas asignadas*/}
        <div className="bordeo">
        <Container>
          <Row>
            <Col>
              <h1>Tabla de tareas asignadas</h1>
              <DataTable data={taskData} />
            </Col>
          </Row>
        </Container>
        </div>

      </IconContext.Provider>
    </>
  );
}

export default Tareas;
