function verificarUsuario(usuario, callback) {
    setTimeout(() => {
      // Simulamos que solo los usuarios "ana" y "luis" existen
      const usuariosExistentes = ['Ana', 'Luis'];
      const existe = usuariosExistentes.includes(usuario);
      callback(existe);
    }, 1000);
  }
  
  function comprobarCuentaActiva(usuario, callback) {
    setTimeout(() => {
      // Simulamos que todas las cuentas excepto "luis" están activas
      const cuentaActiva = usuario !== 'Luis';
      callback(cuentaActiva);
    }, 1000);
  }
  
  function verificarPermisos(usuario, callback) {
    setTimeout(() => {
      // Simulamos que solo "ana" tiene permisos
      const tienePermisos = usuario === 'Ana';
      callback(tienePermisos);
    }, 1000);
  }
  
  // Orquestación de las verificaciones
  function procesoDeVerificacion(usuario) {
    console.log(`Iniciando verificación para el usuario: ${usuario}`);
    
    verificarUsuario(usuario, (existe) => {
      if (!existe) { 
        return console.log('El usuarion ' + usuario +' no existe.');
      }
      console.log('Usuario verificado exitosamente.');
      
      comprobarCuentaActiva(usuario, (activa) => {
        if (!activa) {
          return console.log('La cuenta del usuario '+ usuario + ' no está activa.');
        }
        console.log('La cuenta del usuario ' +usuario+ ' está activa.');
        
        verificarPermisos(usuario, (permisos) => {
          if (!permisos) {
            return console.log('El usuario '+usuario+' no tiene permisos.');
          }
          console.log('El usuario ' +usuario+ ' tiene permisos. Acceso concedido.');
        });
      });
    });
  }
  
  // Ejecución de la función con diferentes usuarios
  procesoDeVerificacion('Ana');   // Usuario con acceso completo
  procesoDeVerificacion('Luis');  // Usuario sin cuenta activa
  procesoDeVerificacion('Pedro'); // Usuario que no existe
  