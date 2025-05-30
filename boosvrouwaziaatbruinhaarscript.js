document.addEventListener('DOMContentLoaded', function () {
  const ervaringen12 = JSON.parse(localStorage.getItem('ervaringen12')) || [];
  const emotieTekstElement12 = document.querySelector('#emotietekstp12');
  const emotieTekstElementtekst12 = document.querySelector('.emotietekst12');
  const ervaringTekstElementtekst12 = document.querySelector('.ervaringtekst12');
  const storedEmotie12 = localStorage.getItem('emotie12');
  const storedErvaring12 = localStorage.getItem('ervaring12');

  
  if (storedEmotie12 && emotieTekstElement12) {
    emotieTekstElement12.textContent = storedEmotie12;
    emotieTekstElementtekst12.style.display = 'block';
  }

  if (storedErvaring12 && ervaringTekstElementtekst12) {
    ervaringTekstElementtekst12.textContent = storedErvaring12;
    ervaringTekstElementtekst12.style.display = 'block';
  }


  ervaringen12.forEach(item => {
    voegErvaringToeAanPagina(item.emotie12, item.ervaring12);
  });

  const reactielijstContainer12 = document.querySelector('#reactieLijst12');
  const reacties12 = JSON.parse(localStorage.getItem('reacties12')) || [];

  reacties12.forEach(item => {
    voegReactieToeAanPagina(item.naam12, item.reactie12);
  });
});


const emotieDiv = document.querySelector('.emotie12'); 
const ervaringDiv = document.querySelector('.ervaring12');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam12');
const reactieDiv = document.querySelector('.reactie12');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst12 = document.querySelector('.ervaringtekst12');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput12 = document.querySelector('#emotieinput12');
  const ervaringInput12 = document.querySelector('#ervaringinput12');
  const emotieTekstElement12 = document.querySelector('#emotietekstp12');
  const emotieTekstElementtekst12 = document.querySelector('.emotietekst12');
  const ervaringTekstElement12 = document.querySelector('#ervaringtekstp12'); 

  if (emotieInput12.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput12.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie12 = emotieInput12.value.trim();
  const ervaring12 = ervaringInput12.value.trim();

  
  
 
  if (emotieTekstElement12) {
    emotieTekstElement12.textContent = emotie12;
    emotieTekstElementtekst12.style.display = 'block'; 
  }


  if (ervaringTekstElement12) {
    ervaringTekstElement12.textContent = ervaring12;
    ervaringTekstElement12.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie12', emotie12);


  localStorage.setItem('ervaring12', ervaring12);

  const ervaringen12 = JSON.parse(localStorage.getItem('ervaringen12')) || [];
  ervaringen12.push({ emotie12, ervaring12 });
  localStorage.setItem('ervaringen12', JSON.stringify(ervaringen12));

  voegErvaringToeAanPagina(emotie12, ervaring12);

  emotieInput12.value = '';
  ervaringInput12.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput12 = document.querySelector('#naaminput12');
  const reactieInput12 = document.querySelector('#reactieinput12');

  if (naamInput12.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput12.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam12 = naamInput12.value.trim();
  const reactie12 = reactieInput12.value.trim();

  const reacties12 = JSON.parse(localStorage.getItem('reacties12')) || [];
  reacties12.push({ naam12, reactie12 });
  localStorage.setItem('reacties12', JSON.stringify(reacties12));

  voegReactieToeAanPagina(naam12, reactie12);

  naamInput12.value = '';
  reactieInput12.value = '';
});


function voegErvaringToeAanPagina(emotie12, ervaring12) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst12.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer12 = document.querySelector('#reactieLijst12');

  const container = document.createElement('div');
  container.classList.add('reactietekst12');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer12.appendChild(container);
  reactielijstContainer12.style.display = 'flex';
}

