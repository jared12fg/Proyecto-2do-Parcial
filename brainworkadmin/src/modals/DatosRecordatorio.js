import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import '../page/styles.css'
import {Form} from 'react-bootstrap';
import '../page/styles.css'

function DatosRecordatorio() {

  const [data, setData] = useState ([
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

  //Cambiar el color el referencia al estado
  const [estadoSeleccionado, setEstadoSeleccionado] = useState("");
  const coloresEstados = {
    pendiente: '#ff0000',
    'en-proceso': '#ffff00',
    completo: '#00ff00',
  };
  const handleEstadoChange = (event, index) => {
    const newData = [...data];
    newData[index].estado = event.target.value;
    setData(newData);
    setEstadoSeleccionado(event.target.value);
  };

  //Funcion de busqueda
  const [materiaSeleccionada, setMateriaSeleccionada] = useState("");
  const handleMateriaChange = (event) => {
    setMateriaSeleccionada(event.target.value);
  };
  const tarjetasFiltradas = data.filter((item) => {
    if (materiaSeleccionada === "") {
      return true; // Mostrar todas las tarjetas si no hay materia seleccionada
    } else {
      return item.estado === materiaSeleccionada;
    }
  });

  return (
    <>
        {/*Funcion de busqueda */}
        <div className="text-center">
            <div className="text-center boral23">
                <Form>
                    <Form.Group controlId="formMateria">
                        <Form.Control
                            as="select"
                            value={materiaSeleccionada}
                            onChange={handleMateriaChange}
                        >
                            <option value="">Todos</option>
                            <option value="pendiente">Pendiente</option>
                            <option value="en-proceso">En Proceso</option>
                            <option value="completo">Terminado</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
        </div>

        {/* Tarjetas con información de recordatorios */}
        <div style={{ marginTop: '60px' }} className="d-flex justify-content-around mt-4 tarjetas-container" >
          {tarjetasFiltradas.map((item, index) => (
            <Card className="mi-tarjeta" key={item.id}>
                <Card.Header>
                <Card.Title className="text-center"><h1>Actividad</h1></Card.Title>
                </Card.Header>
              <Card.Body>
                <Card.Text>Actividad: {item.nombreTareas}</Card.Text>
                <Card.Text>Descripción: {item.descripcion}</Card.Text>
                <Card.Text>Materia: {item.materia}</Card.Text>
                <Card.Text>Estado: {item.estado}</Card.Text>
                <Card.Text>Fecha: {item.fechaEntrega}</Card.Text>
              </Card.Body>
              <Card.Footer style={{ backgroundColor: coloresEstados[item.estado]}}>
              <Form>
                    <Form.Group controlId="formSubject">
                            <Form.Control  as="select"
                                name="estado"
                                value={item.estado}
                                onChange={(event) => handleEstadoChange(event, index)}>
                                <option value="">Cambiar estado</option>
                                <option value="pendiente">Pendiente</option>
                                <option value="en-proceso">En Proceso</option>
                                <option value="completo">Terminado</option>
                            </Form.Control>
                    </Form.Group>
                </Form>
              </Card.Footer>
            </Card>
          ))}
        </div>
    </>
  );
}

export default DatosRecordatorio;
