
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formMatricula');
    const mensajeExito = document.getElementById('mensajeExito');
    const btnNueva = document.getElementById('btnNueva');

    function mostrarError(idCampo, mensaje) {
        const errorSpan = document.getElementById('error-' + idCampo);
        const input = document.getElementById(idCampo);
        if (errorSpan) {
            errorSpan.textContent = mensaje;
            errorSpan.style.display = 'block';
        }
        if (input) {
            input.classList.add('input-error');
        }
    }
    function limpiarError(idCampo) {
        const errorSpan = document.getElementById('error-' + idCampo);
        const input = document.getElementById(idCampo);
        if (errorSpan) {
            errorSpan.textContent = '';
            errorSpan.style.display = 'none';
        }
        if (input) {
            input.classList.remove('input-error');
        }
    }


    function esEmailValido(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function soloNumeros(valor) {
        return /^[0-9]+$/.test(valor);
    }

  
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita el envío real


        const campos = ['nombre', 'documento', 'email', 'telefono', 'carrera', 'modalidad', 'terminos'];
        campos.forEach(campo => limpiarError(campo));

        let esValido = true;
         }
        const nombre = document.getElementById('nombre').value.trim();
        if (nombre.length < 5) {
            mostrarError('nombre', 'Ingresa tu nombre completo (mínimo 5 caracteres)');
            esValido = false;
        }

        const documento = document.getElementById('documento').value.trim();
        if (!soloNumeros(documento) || documento.length < 6) {
            mostrarError('documento', 'Ingresa un número de documento válido');
            esValido = false;
        }

        const email = document.getElementById('email').value.trim();
        if (!esEmailValido(email)) {
            mostrarError('email', 'Ingresa un correo electrónico válido');
            esValido = false;
        }

        const telefono = document.getElementById('telefono').value.trim();
        if (!soloNumeros(telefono) || telefono.length < 7) {
            mostrarError('telefono', 'Ingresa un número de teléfono válido');
            esValido = false;
        }

        const carrera = document.getElementById('carrera').value;
        if (carrera === '') {
            mostrarError('carrera', 'Debes seleccionar una carrera');
            esValido = false;
        }

        const modalidad = document.getElementById('modalidad').value;
        if (modalidad === '') {
            mostrarError('modalidad', 'Debes seleccionar una modalidad');
            esValido = false;
        }

    
        const terminos = document.getElementById('terminos').checked;
        if (!terminos) {
            mostrarError('terminos', 'Debes aceptar los términos y condiciones');
            esValido = false;
        }


        if (esValido) {

            form.classList.add('oculto');
            mensajeExito.classList.remove('oculto');

            console.log('Datos enviados:', {
                nombre,
                documento,
                email,
                telefono,
                carrera,
                modalidad,
                sede: document.getElementById('sede').value,
                comentarios: document.getElementById('comentarios').value
            });
        }
    });


    btnNueva.addEventListener('click', function () {
        form.reset();
        form.classList.remove('oculto');
        mensajeExito.classList.add('oculto');

        const campos = ['nombre', 'documento', 'email', 'telefono', 'carrera', 'modalidad', 'terminos'];
        campos.forEach(campo => limpiarError(campo));
    });

    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function () {
            limpiarError(this.id);
        });
    });
});