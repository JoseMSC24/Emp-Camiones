$(document).ready(function() {
    $('#compraForm').submit(function(e) {
      e.preventDefault(); // Evitar el envío del formulario
  
      // Obtener los datos del formulario
      const nombre = $('#nombre').val();
      const apellidos = $('#apellidos').val();
      const direccion = $('#direccion').val();
      const horario = $('#horario').val();
      const dia = $('#dia').val();
      const asiento = $('#asiento').val();
  
      // Redireccionar a la página de confirmación con los parámetros de la URL
      window.location.href = `confirmacion.html?nombre=${nombre}&apellidos=${apellidos}&direccion=${direccion}&horario=${horario}&dia=${dia}&asiento=${asiento}`;
    });
  });
  