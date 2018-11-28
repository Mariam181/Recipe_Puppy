/**
 * Obtiene una lista (parcial) de personajes de Rick and Morty.
 *
 */

const input = document.getElementById('input');
input.addEventListener('search', function(){
  console.log(input.value);
  call(input.value);
})

function call(searchValue) {
  // Crea el request.
  const request = new XMLHttpRequest();

  // Registra el manejador de eventos.
  request.addEventListener('load', function (event) {
    // Obtiene la respuesta.
    const response = event.target.response;
    console.log(response);
    // Itera sobre los resultados y los agrega a la lista.
    const list = document.getElementById('lista-recetas');
    list.innerHTML = '';
    for (const item of response.results) {
      console.log(item);
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.setAttribute('href', item.href);
      link.setAttribute('target', '_blank');
      link.innerText = item.title;
      console.log(link);
      listItem.appendChild(link);

      list.appendChild(listItem);
    }
  });

  // Define el tipo de respuesta.
  request.responseType = 'json';

  // Inicializa el request.
  request.open('GET', 'https://cetav-cors-proxy.herokuapp.com/http://www.recipepuppy.com/api/?i='+searchValue);

  // Envía el request.
  request.send();

}


