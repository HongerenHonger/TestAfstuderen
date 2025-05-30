document.addEventListener('DOMContentLoaded', function () {
  const ervaringen23 = JSON.parse(localStorage.getItem('ervaringen23')) || [];
  const emotieTekstElement23 = document.querySelector('#emotietekstp23');
  const emotieTekstElementtekst23 = document.querySelector('.emotietekst23');
  const ervaringTekstElementtekst23 = document.querySelector('.ervaringtekst23');
  const storedEmotie23 = localStorage.getItem('emotie23');
  const storedErvaring23 = localStorage.getItem('ervaring23');

  
  if (storedEmotie23 && emotieTekstElement23) {
    emotieTekstElement23.textContent = storedEmotie23;
    emotieTekstElementtekst23.style.display = 'block';
  }

  if (storedErvaring23 && ervaringTekstElementtekst23) {
    ervaringTekstElementtekst23.textContent = storedErvaring23;
    ervaringTekstElementtekst23.style.display = 'block';
  }


  ervaringen23.forEach(item => {
    voegErvaringToeAanPagina(item.emotie23, item.ervaring23);
  });

  const reactielijstContainer23 = document.querySelector('#reactieLijst23');
  const reacties23 = JSON.parse(localStorage.getItem('reacties23')) || [];

  reacties23.forEach(item => {
    voegReactieToeAanPagina(item.naam23, item.reactie23);
  });
});


const emotieDiv = document.querySelector('.emotie23'); 
const ervaringDiv = document.querySelector('.ervaring23');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam23');
const reactieDiv = document.querySelector('.reactie23');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst23 = document.querySelector('.ervaringtekst23');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput23 = document.querySelector('#emotieinput23');
  const ervaringInput23 = document.querySelector('#ervaringinput23');
  const emotieTekstElement23 = document.querySelector('#emotietekstp23');
  const emotieTekstElementtekst23 = document.querySelector('.emotietekst23');
  const ervaringTekstElement23 = document.querySelector('#ervaringtekstp23'); 

  if (emotieInput23.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput23.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie23 = emotieInput23.value.trim();
  const ervaring23 = ervaringInput23.value.trim();

  
  
 
  if (emotieTekstElement23) {
    emotieTekstElement23.textContent = emotie23;
    emotieTekstElementtekst23.style.display = 'block'; 
  }


  if (ervaringTekstElement23) {
    ervaringTekstElement23.textContent = ervaring23;
    ervaringTekstElement23.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie23', emotie23);


  localStorage.setItem('ervaring23', ervaring23);

  const ervaringen23 = JSON.parse(localStorage.getItem('ervaringen23')) || [];
  ervaringen23.push({ emotie23, ervaring23 });
  localStorage.setItem('ervaringen23', JSON.stringify(ervaringen23));

  voegErvaringToeAanPagina(emotie23, ervaring23);

  emotieInput23.value = '';
  ervaringInput23.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput23 = document.querySelector('#naaminput23');
  const reactieInput23 = document.querySelector('#reactieinput23');

  if (naamInput23.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput23.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam23 = naamInput23.value.trim();
  const reactie23 = reactieInput23.value.trim();

  const reacties23 = JSON.parse(localStorage.getItem('reacties23')) || [];
  reacties23.push({ naam23, reactie23 });
  localStorage.setItem('reacties23', JSON.stringify(reacties23));

  voegReactieToeAanPagina(naam23, reactie23);

  naamInput23.value = '';
  reactieInput23.value = '';
});


function voegErvaringToeAanPagina(emotie23, ervaring23) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst23.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer23 = document.querySelector('#reactieLijst23');

  const container = document.createElement('div');
  container.classList.add('reactietekst23');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer23.appendChild(container);
  reactielijstContainer23.style.display = 'flex';
}
