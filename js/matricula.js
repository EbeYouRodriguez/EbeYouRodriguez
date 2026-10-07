// ===== Validación del formulario de matrícula =====

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

    // Validar email
    function esEmailValido(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Validar solo números (documento y teléfono)
    function soloNumeros(valor) {
        return /^[0-9]+$/.test(valor);
    }

    // Evento submit
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita el envío real

        // Limpiar errores anteriores
        const campos = ['nombre', 'documento', 'email', 'telefono', 'carrera', 'modalidad', 'terminos'];
        campos.forEach(campo => limpiarError(campo));

        let esValido = true;

        // Validar nombre
        const nombre = document.getElementById('nombre').value.trim();
        if (nombre.length < 5) {
            mostrarError('nombre', 'Ingresa tu nombre completo (mínimo 5 caracteres)');
            esValido = false;
        }

        // Validar documento
        const documento = document.getElementById('documento').value.trim();
        if (!soloNumeros(documento) || documento.length < 6) {
            mostrarError('documento', 'Ingresa un número de documento válido');
            esValido = false;
        }

        // Validar email
        const email = document.getElementById('email').value.trim();
        if (!esEmailValido(email)) {
            mostrarError('email', 'Ingresa un correo electrónico válido');
            esValido = false;
        }

        // Validar teléfono
        const telefono = document.getElementById('telefono').value.trim();
        if (!soloNumeros(telefono) || telefono.length < 7) {
            mostrarError('telefono', 'Ingresa un número de teléfono válido');
            esValido = false;
        }

        // Validar carrera
        const carrera = document.getElementById('carrera').value;
        if (carrera === '') {
            mostrarError('carrera', 'Debes seleccionar una carrera');
            esValido = false;
        }

        // Validar modalidad
        const modalidad = document.getElementById('modalidad').value;
        if (modalidad === '') {
            mostrarError('modalidad', 'Debes seleccionar una modalidad');
            esValido = false;
        }

        // Validar términos
        const terminos = document.getElementById('terminos').checked;
        if (!terminos) {
            mostrarError('terminos', 'Debes aceptar los términos y condiciones');
            esValido = false;
        }

        // Si todo está correcto
        if (esValido) {
            // Aquí podrías enviar los datos a un servidor con fetch()
            // Por ahora solo mostramos el mensaje de éxito
            form.classList.add('oculto');
            mensajeExito.classList.remove('oculto');

            // Opcional: mostrar los datos en consola
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

    // Botón para realizar otra preinscripción
    btnNueva.addEventListener('click', function () {
        form.reset();
        form.classList.remove('oculto');
        mensajeExito.classList.add('oculto');

        // Limpiar todos los errores
        const campos = ['nombre', 'documento', 'email', 'telefono', 'carrera', 'modalidad', 'terminos'];
        campos.forEach(campo => limpiarError(campo));
    });

    // Limpiar error al escribir
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function () {
            limpiarError(this.id);
        });
    });
});