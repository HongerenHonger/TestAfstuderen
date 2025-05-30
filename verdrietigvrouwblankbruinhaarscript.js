document.addEventListener('DOMContentLoaded', function () {
  const ervaringen38 = JSON.parse(localStorage.getItem('ervaringen38')) || [];
  const emotieTekstElement38 = document.querySelector('#emotietekstp38');
  const emotieTekstElementtekst38 = document.querySelector('.emotietekst38');
  const ervaringTekstElementtekst38 = document.querySelector('.ervaringtekst38');
  const storedEmotie38 = localStorage.getItem('emotie38');
  const storedErvaring38 = localStorage.getItem('ervaring38');

  
  if (storedEmotie38 && emotieTekstElement38) {
    emotieTekstElement38.textContent = storedEmotie38;
    emotieTekstElementtekst38.style.display = 'block';
  }

  if (storedErvaring38 && ervaringTekstElementtekst38) {
    ervaringTekstElementtekst38.textContent = storedErvaring38;
    ervaringTekstElementtekst38.style.display = 'block';
  }


  ervaringen38.forEach(item => {
    voegErvaringToeAanPagina(item.emotie38, item.ervaring38);
  });

  const reactielijstContainer38 = document.querySelector('#reactieLijst38');
  const reacties38 = JSON.parse(localStorage.getItem('reacties38')) || [];

  reacties38.forEach(item => {
    voegReactieToeAanPagina(item.naam38, item.reactie38);
  });
});


const emotieDiv = document.querySelector('.emotie38'); 
const ervaringDiv = document.querySelector('.ervaring38');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam38');
const reactieDiv = document.querySelector('.reactie38');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst38 = document.querySelector('.ervaringtekst38');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput38 = document.querySelector('#emotieinput38');
  const ervaringInput38 = document.querySelector('#ervaringinput38');
  const emotieTekstElement38 = document.querySelector('#emotietekstp38');
  const emotieTekstElementtekst38 = document.querySelector('.emotietekst38');
  const ervaringTekstElement38 = document.querySelector('#ervaringtekstp38'); 

  if (emotieInput38.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput38.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie38 = emotieInput38.value.trim();
  const ervaring38 = ervaringInput38.value.trim();

  
  
 
  if (emotieTekstElement38) {
    emotieTekstElement38.textContent = emotie38;
    emotieTekstElementtekst38.style.display = 'block'; 
  }


  if (ervaringTekstElement38) {
    ervaringTekstElement38.textContent = ervaring38;
    ervaringTekstElement38.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie38', emotie38);


  localStorage.setItem('ervaring38', ervaring38);

  const ervaringen38 = JSON.parse(localStorage.getItem('ervaringen38')) || [];
  ervaringen38.push({ emotie38, ervaring38 });
  localStorage.setItem('ervaringen38', JSON.stringify(ervaringen38));

  voegErvaringToeAanPagina(emotie38, ervaring38);

  emotieInput38.value = '';
  ervaringInput38.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput38 = document.querySelector('#naaminput38');
  const reactieInput38 = document.querySelector('#reactieinput38');

  if (naamInput38.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput38.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam38 = naamInput38.value.trim();
  const reactie38 = reactieInput38.value.trim();

  const reacties38 = JSON.parse(localStorage.getItem('reacties38')) || [];
  reacties38.push({ naam38, reactie38 });
  localStorage.setItem('reacties38', JSON.stringify(reacties38));

  voegReactieToeAanPagina(naam38, reactie38);

  naamInput38.value = '';
  reactieInput38.value = '';
});


function voegErvaringToeAanPagina(emotie38, ervaring38) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst38.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer38 = document.querySelector('#reactieLijst38');

  const container = document.createElement('div');
  container.classList.add('reactietekst38');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer38.appendChild(container);
  reactielijstContainer38.style.display = 'flex';
}

