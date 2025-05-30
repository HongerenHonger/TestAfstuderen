document.addEventListener('DOMContentLoaded', function () {
  const lijstContainer = document.querySelector('#ervaringenLijst');
  const ervaringen = JSON.parse(localStorage.getItem('ervaringen')) || [];
  const emotieTekstElement = document.querySelector('#emotietekstp');
  const emotieTekstElementtekst = document.querySelector('.emotietekst');
  const ervaringTekstElementtekst = document.querySelector('.ervaringtekst');
  const storedEmotie = localStorage.getItem('emotie');
  const storedErvaring = localStorage.getItem('ervaring');

  
  if (storedEmotie && emotieTekstElement) {
    emotieTekstElement.textContent = storedEmotie;
    emotieTekstElementtekst.style.display = 'block';
  }

  if (storedErvaring && ervaringTekstElementtekst) {
    ervaringTekstElementtekst.textContent = storedErvaring;
    ervaringTekstElementtekst.style.display = 'block';
  }


  ervaringen.forEach(item => {
    voegErvaringToeAanPagina(item.emotie, item.ervaring);
  });

  const reactielijstContainer = document.querySelector('#reactieLijst');
  const reacties = JSON.parse(localStorage.getItem('reacties')) || [];

  reacties.forEach(item => {
    voegReactieToeAanPagina(item.naam, item.reactie);
  });
});


const emotieDiv = document.querySelector('.emotie'); 
const ervaringDiv = document.querySelector('.ervaring');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam');
const reactieDiv = document.querySelector('.reactie');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst = document.querySelector('.ervaringtekst');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput = document.querySelector('#emotieinput');
  const ervaringInput = document.querySelector('#ervaringinput');
  const emotieTekstElement = document.querySelector('#emotietekstp');
  const emotieTekstElementtekst = document.querySelector('.emotietekst');
  const ervaringTekstElement = document.querySelector('#ervaringtekstp'); 

  if (emotieInput.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie = emotieInput.value.trim();
  const ervaring = ervaringInput.value.trim();

 
  if (emotieTekstElement) {
    emotieTekstElement.textContent = emotie;
    emotieTekstElementtekst.style.display = 'block'; 
  }


  if (ervaringTekstElement) {
    ervaringTekstElement.textContent = ervaring;
    ervaringTekstElement.style.display = 'block'; 
  }

  localStorage.setItem('emotie', emotie);


  localStorage.setItem('ervaring', ervaring);

  const ervaringen = JSON.parse(localStorage.getItem('ervaringen')) || [];
  ervaringen.push({ emotie, ervaring });
  localStorage.setItem('ervaringen', JSON.stringify(ervaringen));

  voegErvaringToeAanPagina(emotie, ervaring);

  emotieInput.value = '';
  ervaringInput.value = '';

});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput = document.querySelector('#naaminput');
  const reactieInput = document.querySelector('#reactieinput');

  if (naamInput.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam = naamInput.value.trim();
  const reactie = reactieInput.value.trim();

  const reacties = JSON.parse(localStorage.getItem('reacties')) || [];
  reacties.push({ naam, reactie });
  localStorage.setItem('reacties', JSON.stringify(reacties));

  voegReactieToeAanPagina(naam, reactie);

  naamInput.value = '';
  reactieInput.value = '';
});


function voegErvaringToeAanPagina(emotie, ervaring) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer = document.querySelector('#reactieLijst');

  const container = document.createElement('div');
  container.classList.add('reactietekst');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer.appendChild(container);
  reactielijstContainer.style.display = 'flex';
}

localStorage.clear();
