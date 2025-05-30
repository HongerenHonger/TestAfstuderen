document.addEventListener('DOMContentLoaded', function () {
  const ervaringen34 = JSON.parse(localStorage.getItem('ervaringen34')) || [];
  const emotieTekstElement34 = document.querySelector('#emotietekstp34');
  const emotieTekstElementtekst34 = document.querySelector('.emotietekst34');
  const ervaringTekstElementtekst34 = document.querySelector('.ervaringtekst34');
  const storedEmotie34 = localStorage.getItem('emotie34');
  const storedErvaring34 = localStorage.getItem('ervaring34');

  
  if (storedEmotie34 && emotieTekstElement34) {
    emotieTekstElement34.textContent = storedEmotie34;
    emotieTekstElementtekst34.style.display = 'block';
  }

  if (storedErvaring34 && ervaringTekstElementtekst34) {
    ervaringTekstElementtekst34.textContent = storedErvaring34;
    ervaringTekstElementtekst34.style.display = 'block';
  }


  ervaringen34.forEach(item => {
    voegErvaringToeAanPagina(item.emotie34, item.ervaring34);
  });

  const reactielijstContainer34 = document.querySelector('#reactieLijst34');
  const reacties34 = JSON.parse(localStorage.getItem('reacties34')) || [];

  reacties34.forEach(item => {
    voegReactieToeAanPagina(item.naam34, item.reactie34);
  });
});


const emotieDiv = document.querySelector('.emotie34'); 
const ervaringDiv = document.querySelector('.ervaring34');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam34');
const reactieDiv = document.querySelector('.reactie34');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst34 = document.querySelector('.ervaringtekst34');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput34 = document.querySelector('#emotieinput34');
  const ervaringInput34 = document.querySelector('#ervaringinput34');
  const emotieTekstElement34 = document.querySelector('#emotietekstp34');
  const emotieTekstElementtekst34 = document.querySelector('.emotietekst34');
  const ervaringTekstElement34 = document.querySelector('#ervaringtekstp34'); 

  if (emotieInput34.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput34.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie34 = emotieInput34.value.trim();
  const ervaring34 = ervaringInput34.value.trim();

  
  
 
  if (emotieTekstElement34) {
    emotieTekstElement34.textContent = emotie34;
    emotieTekstElementtekst34.style.display = 'block'; 
  }


  if (ervaringTekstElement34) {
    ervaringTekstElement34.textContent = ervaring34;
    ervaringTekstElement34.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie34', emotie34);


  localStorage.setItem('ervaring34', ervaring34);

  const ervaringen34 = JSON.parse(localStorage.getItem('ervaringen34')) || [];
  ervaringen34.push({ emotie34, ervaring34 });
  localStorage.setItem('ervaringen34', JSON.stringify(ervaringen34));

  voegErvaringToeAanPagina(emotie34, ervaring34);

  emotieInput34.value = '';
  ervaringInput34.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput34 = document.querySelector('#naaminput34');
  const reactieInput34 = document.querySelector('#reactieinput34');

  if (naamInput34.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput34.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam34 = naamInput34.value.trim();
  const reactie34 = reactieInput34.value.trim();

  const reacties34 = JSON.parse(localStorage.getItem('reacties34')) || [];
  reacties34.push({ naam34, reactie34 });
  localStorage.setItem('reacties34', JSON.stringify(reacties34));

  voegReactieToeAanPagina(naam34, reactie34);

  naamInput34.value = '';
  reactieInput34.value = '';
});


function voegErvaringToeAanPagina(emotie34, ervaring34) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst34.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer34 = document.querySelector('#reactieLijst34');

  const container = document.createElement('div');
  container.classList.add('reactietekst34');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer34.appendChild(container);
  reactielijstContainer34.style.display = 'flex';
}

