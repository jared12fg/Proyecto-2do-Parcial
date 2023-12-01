import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Link } from 'react-router-dom';
import Notificaciones from './NotificacionesModal';


const DisenoMenu = () => {
  const [date, setDate] = useState(new Date());
  return (
    
    <div>

      <div className='notificaciones'>
        <Notificaciones></Notificaciones>
      </div>

        {/* Sección de Tareas */}
        <div className="menu-section">
          <h2 className='color'>Tareas Asignadas</h2>
          <Link to="/tareas" className='enlaces'>
          <div className="task-subsection">
            <div className="task-section">
              <h4>Programación I</h4>
              <p>FrontEnd: Crear una aplicación usando ReactJs</p>
            </div>
            {/* Sección 2 */}
            <div className="task-section seleccion">
              <h4>Programación I</h4>
              <p>Base de datos: Se debe crear una base de datos</p>
            </div>
            {/* Sección 3 */}
            <div className="task-section">
              <h4>Base de datos I</h4>
              <p>Subir registros: Subir los registros a la base de datos mediante el sistema</p>
            </div>
            {/* Sección 4 */}
            <div className="task-section">
              <h4>Progrmación I</h4>
              <p>Conectar API: Realizar la conexión con la API</p>
            </div>

          </div>
          </Link>
        </div>


        {/* Sección de Calendario */}
        
        <div className="menu-section">
          <h2 className='color'>Calendario</h2>
          <div className="calendar-section">
            <Link to="/calendario" className='enlaces'>
              <p>{date.toDateString()}</p>
              <Calendar onChange={setDate} value={date} />
            </Link>
          </div>
        </div>

        {/* Sección de Recordatorio */}
        <div className="menu-section">
          <h2 className='color'>Recordatorio</h2>
          <Link to="/recordatorio" className='enlaces'>
          <div className="reminder-subsection">
            {/* Sección 1 */}
            <div className="reminder-section pendiente">
              <h4 className='text-center'>FrontEnd</h4>
              <p>Pendiente</p>
            </div>
            {/* Sección 2 */}
            <div className="reminder-section proceso">
              <h4 className='text-center'>Base de datos</h4>
              <p>En proceso</p>
            </div>
            {/* Sección 3 */}
            <div className="reminder-section terminado">
              <h4 className='text-center'>Subir archivos</h4>
              <p>Terminado</p>
            </div>
            {/* Sección 4 */}
            <div className="reminder-section pendiente">
              <h4 className='text-center'>Conectar API</h4>
              <p>Pendiente</p>
            </div>

          </div>
          </Link>
        </div>

    </div>
  );
};

export default DisenoMenu;