import React, { useState } from 'react';
import {Modal} from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import '../page/styles.css'
import { FaBell} from 'react-icons/fa';

const Notificaciones = () => {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <FaBell className='noti' onClick={handleShow}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notificaciones</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Stack gap={3}>
                <div className="p-2 opcion">Tareas pendietes: <p className='tar'>Programación I, Base de datos I</p></div>
                <br></br>
                <div className="p-2 opcion">Tareas sin entregar: <p className='tar'>Programación I</p></div>
                <br></br>
                <div className="p-2 opcion">Nuevas tareas: <p className='tar'>Programación I, Base de datos I</p></div>
                <br></br>
                <div className="p-2 opcion">Retrasos: <p className='tar'>Programación I, Base de datos I</p></div>
            </Stack>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Notificaciones;
