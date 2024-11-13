const nombreInput = document.getElementById('nombre');
const apellidosInput = document.getElementById('apellidos');
const telefonoInput = document.getElementById('telefono');
const emailInput = document.getElementById('email');
const formulario = document.getElementById('form');

function validarNombre(){
    const nombre = nombreInput.value
    const nombrePattern = /^[a-zA-Z][a-zA-Z0-9]*$/
    if (nombre.length >= 3 && nombrePattern.test(nombre)) {
        nombreInput.classList.add('valido')
        nombreInput.classList.remove('invalido')
        document.getElementById('nombreError').textContent = ''
    }else {
        nombreInput.classList.add('invalido')
        nombreInput.classList.remove('valido')
        document.getElementById('nombreError').textContent = 'El nombre debe de tener al menos 3 caracteres y empezar con una letra.'
    }
};
function validarApellidos(){
    const apellidos = apellidosInput.value
    const apellidosPattern = /^[a-zA-Z][a-zA-Z0-9]*$/
    if (apellidos.length >= 5 && apellidosPattern.test(apellidos)) {
    apellidosInput.classList.add('valido')
    apellidosInput.classList.remove('invalido')
    document.getElementById('apellidosError').textContent = ''
    }else{
    apellidosInput.classList.add('invalido')
    apellidosInput.classList.remove('valido')
    document.getElementById('apellidosError').textContent = 'Los apellidos deben de tener al menos 5 caracteres y empezar con una letra.'
    }
};
function validarTelefono(){
    const telefono = telefonoInput.value
    const telefonoPattern = /^\d{9}$/
    if (telefonoPattern.test(telefono)) {
        telefonoInput.classList.add('valido')
        telefonoInput.classList.remove('invalido')
        document.getElementById('telefonoError').textContent = ''
    }else{
        telefonoInput.classList.add('invalido')
        telefonoInput.classList.remove('valido')
        document.getElementById('telefonoError').textContent = 'El número de telefono debe tener 9 dígitos y contener solo números.'
        }
};
function validarEmail(){
    const email = emailInput.value
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailPattern.test(email)) {
        emailInput.classList.add('valido')
        emailInput.classList.remove('invalido')
        document.getElementById('emailError').textContent = ''
    }else{
        emailInput.classList.add('invalido')
        emailInput.classList.remove('valido')
        document.getElementById('emailError').textContent = 'Ingrese un correo electrónico correcto.'
        }
};

function resetFormulario() {
    formulario.reset()
    nombreInput.classList.remove('valido');
    apellidosInput.classList.remove('valido');
    telefonoInput.classList.remove('valido');
    emailInput.classList.remove('valido');
    
};
nombreInput.addEventListener('input', validarNombre)
apellidosInput.addEventListener('input', validarApellidos)
telefonoInput.addEventListener('input', validarTelefono)
emailInput.addEventListener('input', validarEmail)


formulario.addEventListener('submit', function(event) {
    event.preventDefault()
    validarNombre()
    validarApellidos()
    validarTelefono()
    validarEmail()
    

    if(nombreInput.classList.contains('valido') && apellidosInput.classList.contains('valido') && telefonoInput.classList.contains('valido') && emailInput.classList.contains('valido')) {
        alert('Formulario enviado correctamente')
        resetFormulario();
    } else {
        alert('Por favor, corrija los errores en el formulario')
    }
})