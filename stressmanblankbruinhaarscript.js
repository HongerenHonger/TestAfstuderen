document.addEventListener('DOMContentLoaded', function () {
  const ervaringen25 = JSON.parse(localStorage.getItem('ervaringen25')) || [];
  const emotieTekstElement25 = document.querySelector('#emotietekstp25');
  const emotieTekstElementtekst25 = document.querySelector('.emotietekst25');
  const ervaringTekstElementtekst25 = document.querySelector('.ervaringtekst25');
  const storedEmotie25 = localStorage.getItem('emotie25');
  const storedErvaring25 = localStorage.getItem('ervaring25');

  
  if (storedEmotie25 && emotieTekstElement25) {
    emotieTekstElement25.textContent = storedEmotie25;
    emotieTekstElementtekst25.style.display = 'block';
  }

  if (storedErvaring25 && ervaringTekstElementtekst25) {
    ervaringTekstElementtekst25.textContent = storedErvaring25;
    ervaringTekstElementtekst25.style.display = 'block';
  }


  ervaringen25.forEach(item => {
    voegErvaringToeAanPagina(item.emotie25, item.ervaring25);
  });

  const reactielijstContainer25 = document.querySelector('#reactieLijst25');
  const reacties25 = JSON.parse(localStorage.getItem('reacties25')) || [];

  reacties25.forEach(item => {
    voegReactieToeAanPagina(item.naam25, item.reactie25);
  });
});


const emotieDiv = document.querySelector('.emotie25'); 
const ervaringDiv = document.querySelector('.ervaring25');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam25');
const reactieDiv = document.querySelector('.reactie25');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst25 = document.querySelector('.ervaringtekst25');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput25 = document.querySelector('#emotieinput25');
  const ervaringInput25 = document.querySelector('#ervaringinput25');
  const emotieTekstElement25 = document.querySelector('#emotietekstp25');
  const emotieTekstElementtekst25 = document.querySelector('.emotietekst25');
  const ervaringTekstElement25 = document.querySelector('#ervaringtekstp25'); 

  if (emotieInput25.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput25.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie25 = emotieInput25.value.trim();
  const ervaring25 = ervaringInput25.value.trim();

  
  
 
  if (emotieTekstElement25) {
    emotieTekstElement25.textContent = emotie25;
    emotieTekstElementtekst25.style.display = 'block'; 
  }


  if (ervaringTekstElement25) {
    ervaringTekstElement25.textContent = ervaring25;
    ervaringTekstElement25.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie25', emotie25);


  localStorage.setItem('ervaring25', ervaring25);

  const ervaringen25 = JSON.parse(localStorage.getItem('ervaringen25')) || [];
  ervaringen25.push({ emotie25, ervaring25 });
  localStorage.setItem('ervaringen25', JSON.stringify(ervaringen25));

  voegErvaringToeAanPagina(emotie25, ervaring25);

  emotieInput25.value = '';
  ervaringInput25.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput25 = document.querySelector('#naaminput25');
  const reactieInput25 = document.querySelector('#reactieinput25');

  if (naamInput25.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput25.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam25 = naamInput25.value.trim();
  const reactie25 = reactieInput25.value.trim();

  const reacties25 = JSON.parse(localStorage.getItem('reacties25')) || [];
  reacties25.push({ naam25, reactie25 });
  localStorage.setItem('reacties25', JSON.stringify(reacties25));

  voegReactieToeAanPagina(naam25, reactie25);

  naamInput25.value = '';
  reactieInput25.value = '';
});


function voegErvaringToeAanPagina(emotie25, ervaring25) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst25.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer25 = document.querySelector('#reactieLijst25');

  const container = document.createElement('div');
  container.classList.add('reactietekst25');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer25.appendChild(container);
  reactielijstContainer25.style.display = 'flex';
}
