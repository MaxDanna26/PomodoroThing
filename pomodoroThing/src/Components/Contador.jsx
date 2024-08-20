import React, { useState, useEffect } from 'react';

export function Contador({time, isActive, onTick}) {

  useEffect(() => {
    // Si el temporizador no está activo o el tiempo ha llegado a 0, no hacer nada
    if (!isActive || time === 0) return;

    // Configura el intervalo para que disminuya el tiempo cada segundo
    const interval = setInterval(() => {
        onTick(); // Llama para decrementar
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta o el tiempo llega a 0
    return () => clearInterval(interval);
  }, [isActive,time,onTick]);

  // Convierte los segundos restantes en minutos y segundos
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div style={{ textAlign: 'center'}}>
      <h2>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h2>
      {time === 0 && <h3>¡Tiempo terminado!</h3>}
    </div>
  );
};