import React from "react";
import "../page/styles.css";
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import esLocale from "date-fns/locale/es"


const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay, 
    locales : {
        es:esLocale
    }
})

const events = [
    {
        title : "FrontEnd",
        allDay : true,
        start : new Date(2023, 10, 2),
        end : new Date(2023, 10, 2)
    },
    {
        title : "Base de datos",
        allDay : true,
        start : new Date(2023, 10, 5),
        end : new Date(2023, 10, 5)
    },
    {
        title : "Subir registros",
        allDay : true,
        start : new Date(2023, 10, 10),
        end : new Date(2023, 10, 10)
    },
    {
        title : "Conectar API",
        allDay : true,
        start : new Date(2023, 10, 15),
        end : new Date(2023, 10, 15)
    },
    {
        title : "Revisar registros",
        allDay : true,
        start : new Date(2023, 10, 20),
        end : new Date(2023, 10, 20)
    },
    {
        title : "Crear tablas",
        allDay : true,
        start : new Date(2023, 10, 28),
        end : new Date(2023, 10, 28)
    },
    {
        title : "Modulo usuarios",
        allDay : true,
        start : new Date(2023, 11, 5),
        end : new Date(2023, 11, 5)
    },
    {
        title : "Resumen",
        allDay : true,
        start : new Date(2023, 11, 5),
        end : new Date(2023, 11, 5)
    },
    {
        title : "Reporte",
        allDay : true,
        start : new Date(2023, 11, 10),
        end : new Date(2023, 11, 10)
    },
    {
        title : "Investigación",
        allDay : true,
        start : new Date(2023, 11, 12),
        end : new Date(2023, 11, 12)
    },
    {
        title : "Investigación",
        allDay : true,
        start : new Date(2023, 11, 22),
        end : new Date(2023, 11, 22)
    },
    {
        title : "Reporte",
        allDay : true,
        start : new Date(2023, 11, 22),
        end : new Date(2023, 11, 22)
    },
]

function ModeloCalendario() {

  return (
    <>
        <div className="calendario">
            <Calendar 
            localizer={localizer} 
            events={events} 
            startAccessor="start" 
            endAccessor="end" 
            style={{height:600, margin:"50px"}}
            culture="es"></Calendar>
        </div>
    </>
  );
}

export default ModeloCalendario;
