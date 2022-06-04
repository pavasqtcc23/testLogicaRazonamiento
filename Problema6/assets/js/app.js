/*
* Evento de click para llamar al botón de buscar
*/
$('#pokesearch').click(function() {
  // Rescatando el valor ingresado
  const pokemonName = $('#pokemon-name').val();
  const pokemonNameLower = pokemonName.toLowerCase();
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonNameLower}`,
    type: 'GET',
    datatype: 'json',
    success: function(results) {
      console.log(results);
    }
  }).done(response).fail(error);
  function response(data) {
    $('#pokemon-container').empty();
    const pokemonImg = data.sprites.front_default;
    const pokemonName = data.name;
    const pokemonNumber = data.order;
    const pokemonWeight = data.weight;
    const pokemonAbbilities = data.abilities[0].ability.name;
    const pokemonType = data.types[0].type.name;
    const pokemonAltura = data.height
    $('.info-modal').empty();
    $('#pokemon-container').append(`<img class="pakimon-imagen pakimon-img-modal" src="${pokemonImg}" data-toggle="modal" data-target="#myModal"><h3><strong>${data.name}</strong></h3>`);
    $('.info-modal').append(`<p>Peso: ${pokemonWeight}</p><p>Número: ${pokemonNumber}<p>Habilidades: ${pokemonAbbilities}</p>
      <p>Tipo:  ${pokemonType}</p>
      <p>Altura:  ${pokemonAltura}</p>`);
  }

  function error() {
    alert('Lo sentimos, ha ocurrido un error :(');
  }
});

