const form = document.getElementById('myForm');


export function enviarFormulario() {
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:8090/api/v1/usuario/auth');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = respuestaServidor;
  xhr.send(new URLSearchParams(formData).toString());
}

function respuestaServidor() {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log('Éxito:', response.message);
  } else {
    console.error('Error:', xhr.statusText);
  }
}