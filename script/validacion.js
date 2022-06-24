// Haz tú vali// Validar formulario
const datos = document.querySelector("#form__data");
const form__name = document.querySelector("#form__name");
const email = document.querySelector("#form__email");
const form__asunto = document.querySelector("#form__asunto");
const form__mensaje = document.querySelector("#form__mensaje");
const boton = document.querySelector("#form__boton");


document.addEventListener("DOMContentLoaded", function() {
    datos.addEventListener('submit', validarFormulario);
});


function validarFormulario(event) {
    event.preventDefault();

    let nombre = form__name.value;

    if(nombre.length > 25) {
        Swal.fire({
            title: "Error al digital el nombre",
            text: 'Puede contener un máximo de 25 caracteres',
            icon: 'error',
            confirmButtonText: "Continuar"
          })
      return;
    }
    let asunto = form__asunto.value;
    if(asunto.length > 50) {
        Swal.fire({
            title: "Error al escribir el asunto",
            text: "Puede contener un máximo de 50 caracteres",
            icon: "error",
            confirmButtonText: "Continuar"
          })
      return;
    }
    let mensaje = form__mensaje.value;
    if(mensaje.length > 350) {
        Swal.fire({
            title: "Error en el mensaje",
            text: "Puede contener un máximo de 300 caracteres",
            icon: "error",
            confirmButtonText: "Continuar"
          })
      return;
    }
    this.submit();
}



