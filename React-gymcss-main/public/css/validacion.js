document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('inscripcionForm');

    form.addEventListener('submit', function (event) {
        // Validación del nombre completo
        const nombreCompleto = document.getElementById('nombreCompleto').value;
        const nombreCompletoRegex = /^[a-zA-Z\s]+$/;
        if (!nombreCompletoRegex.test(nombreCompleto)) {
            alert('Por favor, ingrese un nombre completo válido (solo letras y espacios).');
            event.preventDefault();
            return false;
        }

        // Validación del correo electrónico
        const correoElectronico = document.getElementById('correoElectronico').value;
        const correoElectronicoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!correoElectronicoRegex.test(correoElectronico)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            event.preventDefault();
            return false;
        }

        // Validación del número de teléfono
        const numeroTelefono = document.getElementById('numeroTelefono').value;
        const numeroTelefonoRegex = /^\d{10}$/; // Suponiendo un número de teléfono de 10 dígitos
        if (!numeroTelefonoRegex.test(numeroTelefono)) {
            alert('Por favor, ingrese un número de teléfono válido (10 dígitos).');
            event.preventDefault();
            return false;
        }

        // Validación de la fecha de nacimiento
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        const fechaNacimientoRegex = /^\d{4}-\d{2}-\d{2}$/; // Formato YYYY-MM-DD
        if (!fechaNacimientoRegex.test(fechaNacimiento)) {
            alert('Por favor, ingrese una fecha de nacimiento válida.');
            event.preventDefault();
            return false;
        }

        // Validación del campo "nuevoMiembro"
        const nuevoMiembro = document.getElementById('nuevoMiembro').value;
        if (nuevoMiembro === "") {
            alert('Por favor, seleccione si es un nuevo miembro.');
            event.preventDefault();
            return false;
        }

        // Validación del campo "comoTeEnteraste"
        const comoTeEnteraste = document.getElementById('comoTeEnteraste').value;
        if (comoTeEnteraste === "") {
            alert('Por favor, seleccione cómo se enteró de nosotros.');
            event.preventDefault();
            return false;
        }

        // Validación del campo "clasesDisponibles"
        const clasesDisponibles = document.getElementById('clasesDisponibles').value;
        if (clasesDisponibles === "") {
            alert('Por favor, seleccione una clase disponible.');
            event.preventDefault();
            return false;
        }

        // Validación del campo "metodoPago"
        const metodoPago = document.getElementById('metodoPago').value;
        if (metodoPago === "") {
            alert('Por favor, seleccione un método de pago.');
            event.preventDefault();
            return false;
        }

        // Validación de aceptación de términos y condiciones
        const terminosCondiciones = document.getElementById('terminosCondiciones').checked;
        if (!terminosCondiciones) {
            alert('Por favor, acepte los términos y condiciones.');
            event.preventDefault();
            return false;
        }

        // Si todas las validaciones pasan
        alert('Formulario enviado con éxito.');
    });
});
