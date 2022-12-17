const sendMessage = document.getElementById('enviar');

sendMessage.addEventListener('click', () => {
  Swal.fire({
    title: "Mensaje enviado con éxito",
    text: "A la brevedad se prondrán en contacto con usted",
    icon: "success",
  });
});
