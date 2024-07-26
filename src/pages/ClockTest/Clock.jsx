import React from 'react';
import { PageHeader } from '../../components/PageHeader/PageHeader';

import Swal from 'sweetalert2';

import './clock.css';

const REFERENCE_LAT = -34.6246251543433;
const REFERENCE_LNG = -58.45243991674626;

export default function Clock() {
  function postclock() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          if (isWithinRadius(latitude, longitude, REFERENCE_LAT, REFERENCE_LNG, 1)) {
            Swal.fire({
              icon: 'success',
              title: 'Fichada Enviada',
              text: 'Has enviado con éxito tu fichada',
              confirmButtonText: 'Continuar',
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No te encuentras dentro del rango de tu domicilio de trabajo',
              confirmButtonText: 'Cancelar',
            });
          }
        },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error del servidor al realizar la fichada',
            confirmButtonText: 'Cancelar',
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La geolocalización no es soportada por el navegador',
        confirmButtonText: 'Cancelar',
      });
    }
  }

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  function isWithinRadius(lat1, lon1, lat2, lon2, radius) {
    const distance = getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2);
    return distance <= radius;
  }

  return (
    <section className='clock fade-in'>
      <PageHeader title='FICHERO' />
      <button onClick={postclock} className='btn btn-success'>
        Enviar Fichada
      </button>
    </section>
  );
}
