document.addEventListener('DOMContentLoaded', function () {
  const ervaringen19 = JSON.parse(localStorage.getItem('ervaringen19')) || [];
  const emotieTekstElement19 = document.querySelector('#emotietekstp19');
  const emotieTekstElementtekst19 = document.querySelector('.emotietekst19');
  const ervaringTekstElementtekst19 = document.querySelector('.ervaringtekst19');
  const storedEmotie19 = localStorage.getItem('emotie19');
  const storedErvaring19 = localStorage.getItem('ervaring19');

  
  if (storedEmotie19 && emotieTekstElement19) {
    emotieTekstElement19.textContent = storedEmotie19;
    emotieTekstElementtekst19.style.display = 'block';
  }

  if (storedErvaring19 && ervaringTekstElementtekst19) {
    ervaringTekstElementtekst19.textContent = storedErvaring19;
    ervaringTekstElementtekst19.style.display = 'block';
  }


  ervaringen19.forEach(item => {
    voegErvaringToeAanPagina(item.emotie19, item.ervaring19);
  });

  const reactielijstContainer19 = document.querySelector('#reactieLijst19');
  const reacties19 = JSON.parse(localStorage.getItem('reacties19')) || [];

  reacties19.forEach(item => {
    voegReactieToeAanPagina(item.naam19, item.reactie19);
  });
});


const emotieDiv = document.querySelector('.emotie19'); 
const ervaringDiv = document.querySelector('.ervaring19');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam19');
const reactieDiv = document.querySelector('.reactie19');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst19 = document.querySelector('.ervaringtekst19');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput19 = document.querySelector('#emotieinput19');
  const ervaringInput19 = document.querySelector('#ervaringinput19');
  const emotieTekstElement19 = document.querySelector('#emotietekstp19');
  const emotieTekstElementtekst19 = document.querySelector('.emotietekst19');
  const ervaringTekstElement19 = document.querySelector('#ervaringtekstp19'); 

  if (emotieInput19.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput19.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie19 = emotieInput19.value.trim();
  const ervaring19 = ervaringInput19.value.trim();

  
  
 
  if (emotieTekstElement19) {
    emotieTekstElement19.textContent = emotie19;
    emotieTekstElementtekst19.style.display = 'block'; 
  }


  if (ervaringTekstElement19) {
    ervaringTekstElement19.textContent = ervaring19;
    ervaringTekstElement19.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie19', emotie19);


  localStorage.setItem('ervaring19', ervaring19);

  const ervaringen19 = JSON.parse(localStorage.getItem('ervaringen19')) || [];
  ervaringen19.push({ emotie19, ervaring19 });
  localStorage.setItem('ervaringen19', JSON.stringify(ervaringen19));

  voegErvaringToeAanPagina(emotie19, ervaring19);

  emotieInput19.value = '';
  ervaringInput19.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput19 = document.querySelector('#naaminput19');
  const reactieInput19 = document.querySelector('#reactieinput19');

  if (naamInput19.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput19.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam19 = naamInput19.value.trim();
  const reactie19 = reactieInput19.value.trim();

  const reacties19 = JSON.parse(localStorage.getItem('reacties19')) || [];
  reacties19.push({ naam19, reactie19 });
  localStorage.setItem('reacties19', JSON.stringify(reacties19));

  voegReactieToeAanPagina(naam19, reactie19);

  naamInput19.value = '';
  reactieInput19.value = '';
});


function voegErvaringToeAanPagina(emotie19, ervaring19) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst19.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer19 = document.querySelector('#reactieLijst19');

  const container = document.createElement('div');
  container.classList.add('reactietekst19');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer19.appendChild(container);
  reactielijstContainer19.style.display = 'flex';
}

