document.addEventListener('DOMContentLoaded', function () {
  const ervaringen18 = JSON.parse(localStorage.getItem('ervaringen18')) || [];
  const emotieTekstElement18 = document.querySelector('#emotietekstp18');
  const emotieTekstElementtekst18 = document.querySelector('.emotietekst18');
  const ervaringTekstElementtekst18 = document.querySelector('.ervaringtekst18');
  const storedEmotie18 = localStorage.getItem('emotie18');
  const storedErvaring18 = localStorage.getItem('ervaring18');

  
  if (storedEmotie18 && emotieTekstElement18) {
    emotieTekstElement18.textContent = storedEmotie18;
    emotieTekstElementtekst18.style.display = 'block';
  }

  if (storedErvaring18 && ervaringTekstElementtekst18) {
    ervaringTekstElementtekst18.textContent = storedErvaring18;
    ervaringTekstElementtekst18.style.display = 'block';
  }


  ervaringen18.forEach(item => {
    voegErvaringToeAanPagina(item.emotie18, item.ervaring18);
  });

  const reactielijstContainer18 = document.querySelector('#reactieLijst18');
  const reacties18 = JSON.parse(localStorage.getItem('reacties18')) || [];

  reacties18.forEach(item => {
    voegReactieToeAanPagina(item.naam18, item.reactie18);
  });
});


const emotieDiv = document.querySelector('.emotie18'); 
const ervaringDiv = document.querySelector('.ervaring18');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam18');
const reactieDiv = document.querySelector('.reactie18');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst18 = document.querySelector('.ervaringtekst18');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput18 = document.querySelector('#emotieinput18');
  const ervaringInput18 = document.querySelector('#ervaringinput18');
  const emotieTekstElement18 = document.querySelector('#emotietekstp18');
  const emotieTekstElementtekst18 = document.querySelector('.emotietekst18');
  const ervaringTekstElement18 = document.querySelector('#ervaringtekstp18'); 

  if (emotieInput18.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput18.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie18 = emotieInput18.value.trim();
  const ervaring18 = ervaringInput18.value.trim();

  
  
 
  if (emotieTekstElement18) {
    emotieTekstElement18.textContent = emotie18;
    emotieTekstElementtekst18.style.display = 'block'; 
  }


  if (ervaringTekstElement18) {
    ervaringTekstElement18.textContent = ervaring18;
    ervaringTekstElement18.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie18', emotie18);


  localStorage.setItem('ervaring18', ervaring18);

  const ervaringen18 = JSON.parse(localStorage.getItem('ervaringen18')) || [];
  ervaringen18.push({ emotie18, ervaring18 });
  localStorage.setItem('ervaringen18', JSON.stringify(ervaringen18));

  voegErvaringToeAanPagina(emotie18, ervaring18);

  emotieInput18.value = '';
  ervaringInput18.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput18 = document.querySelector('#naaminput18');
  const reactieInput18 = document.querySelector('#reactieinput18');

  if (naamInput18.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput18.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam18 = naamInput18.value.trim();
  const reactie18 = reactieInput18.value.trim();

  const reacties18 = JSON.parse(localStorage.getItem('reacties18')) || [];
  reacties18.push({ naam18, reactie18 });
  localStorage.setItem('reacties18', JSON.stringify(reacties18));

  voegReactieToeAanPagina(naam18, reactie18);

  naamInput18.value = '';
  reactieInput18.value = '';
});


function voegErvaringToeAanPagina(emotie18, ervaring18) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst18.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer18 = document.querySelector('#reactieLijst18');

  const container = document.createElement('div');
  container.classList.add('reactietekst18');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer18.appendChild(container);
  reactielijstContainer18.style.display = 'flex';
}

