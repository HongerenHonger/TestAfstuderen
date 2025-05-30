document.addEventListener('DOMContentLoaded', function () {
  const ervaringen24 = JSON.parse(localStorage.getItem('ervaringen24')) || [];
  const emotieTekstElement24 = document.querySelector('#emotietekstp24');
  const emotieTekstElementtekst24 = document.querySelector('.emotietekst24');
  const ervaringTekstElementtekst24 = document.querySelector('.ervaringtekst24');
  const storedEmotie24 = localStorage.getItem('emotie24');
  const storedErvaring24 = localStorage.getItem('ervaring24');

  
  if (storedEmotie24 && emotieTekstElement24) {
    emotieTekstElement24.textContent = storedEmotie24;
    emotieTekstElementtekst24.style.display = 'block';
  }

  if (storedErvaring24 && ervaringTekstElementtekst24) {
    ervaringTekstElementtekst24.textContent = storedErvaring24;
    ervaringTekstElementtekst24.style.display = 'block';
  }


  ervaringen24.forEach(item => {
    voegErvaringToeAanPagina(item.emotie24, item.ervaring24);
  });

  const reactielijstContainer24 = document.querySelector('#reactieLijst24');
  const reacties24 = JSON.parse(localStorage.getItem('reacties24')) || [];

  reacties24.forEach(item => {
    voegReactieToeAanPagina(item.naam24, item.reactie24);
  });
});


const emotieDiv = document.querySelector('.emotie24'); 
const ervaringDiv = document.querySelector('.ervaring24');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam24');
const reactieDiv = document.querySelector('.reactie24');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst24 = document.querySelector('.ervaringtekst24');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput24 = document.querySelector('#emotieinput24');
  const ervaringInput24 = document.querySelector('#ervaringinput24');
  const emotieTekstElement24 = document.querySelector('#emotietekstp24');
  const emotieTekstElementtekst24 = document.querySelector('.emotietekst24');
  const ervaringTekstElement24 = document.querySelector('#ervaringtekstp24'); 

  if (emotieInput24.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput24.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie24 = emotieInput24.value.trim();
  const ervaring24 = ervaringInput24.value.trim();

  
  
 
  if (emotieTekstElement24) {
    emotieTekstElement24.textContent = emotie24;
    emotieTekstElementtekst24.style.display = 'block'; 
  }


  if (ervaringTekstElement24) {
    ervaringTekstElement24.textContent = ervaring24;
    ervaringTekstElement24.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie24', emotie24);


  localStorage.setItem('ervaring24', ervaring24);

  const ervaringen24 = JSON.parse(localStorage.getItem('ervaringen24')) || [];
  ervaringen24.push({ emotie24, ervaring24 });
  localStorage.setItem('ervaringen24', JSON.stringify(ervaringen24));

  voegErvaringToeAanPagina(emotie24, ervaring24);

  emotieInput24.value = '';
  ervaringInput24.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput24 = document.querySelector('#naaminput24');
  const reactieInput24 = document.querySelector('#reactieinput24');

  if (naamInput24.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput24.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam24 = naamInput24.value.trim();
  const reactie24 = reactieInput24.value.trim();

  const reacties24 = JSON.parse(localStorage.getItem('reacties24')) || [];
  reacties24.push({ naam24, reactie24 });
  localStorage.setItem('reacties24', JSON.stringify(reacties24));

  voegReactieToeAanPagina(naam24, reactie24);

  naamInput24.value = '';
  reactieInput24.value = '';
});


function voegErvaringToeAanPagina(emotie24, ervaring24) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst24.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer24 = document.querySelector('#reactieLijst24');

  const container = document.createElement('div');
  container.classList.add('reactietekst24');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer24.appendChild(container);
  reactielijstContainer24.style.display = 'flex';
}
