document.addEventListener('DOMContentLoaded', function () {
  const ervaringen10 = JSON.parse(localStorage.getItem('ervaringen10')) || [];
  const emotieTekstElement10 = document.querySelector('#emotietekstp10');
  const emotieTekstElementtekst10 = document.querySelector('.emotietekst10');
  const ervaringTekstElementtekst10 = document.querySelector('.ervaringtekst10');
  const storedEmotie10 = localStorage.getItem('emotie10');
  const storedErvaring10 = localStorage.getItem('ervaring10');

  
  if (storedEmotie10 && emotieTekstElement10) {
    emotieTekstElement10.textContent = storedEmotie10;
    emotieTekstElementtekst10.style.display = 'block';
  }

  if (storedErvaring10 && ervaringTekstElementtekst10) {
    ervaringTekstElementtekst10.textContent = storedErvaring10;
    ervaringTekstElementtekst10.style.display = 'block';
  }


  ervaringen10.forEach(item => {
    voegErvaringToeAanPagina(item.emotie10, item.ervaring10);
  });

  const reactielijstContainer10 = document.querySelector('#reactieLijst10');
  const reacties10 = JSON.parse(localStorage.getItem('reacties10')) || [];

  reacties10.forEach(item => {
    voegReactieToeAanPagina(item.naam10, item.reactie10);
  });
});


const emotieDiv = document.querySelector('.emotie10'); 
const ervaringDiv = document.querySelector('.ervaring10');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam10');
const reactieDiv = document.querySelector('.reactie10');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst10 = document.querySelector('.ervaringtekst10');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput10 = document.querySelector('#emotieinput10');
  const ervaringInput10 = document.querySelector('#ervaringinput10');
  const emotieTekstElement10 = document.querySelector('#emotietekstp10');
  const emotieTekstElementtekst10 = document.querySelector('.emotietekst10');
  const ervaringTekstElement10 = document.querySelector('#ervaringtekstp10'); 

  if (emotieInput10.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput10.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie10 = emotieInput10.value.trim();
  const ervaring10 = ervaringInput10.value.trim();

  
  
 
  if (emotieTekstElement10) {
    emotieTekstElement10.textContent = emotie10;
    emotieTekstElementtekst10.style.display = 'block'; 
  }


  if (ervaringTekstElement10) {
    ervaringTekstElement10.textContent = ervaring10;
    ervaringTekstElement10.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie10', emotie10);


  localStorage.setItem('ervaring10', ervaring10);

  const ervaringen10 = JSON.parse(localStorage.getItem('ervaringen10')) || [];
  ervaringen10.push({ emotie10, ervaring10 });
  localStorage.setItem('ervaringen10', JSON.stringify(ervaringen10));

  voegErvaringToeAanPagina(emotie10, ervaring10);

  emotieInput10.value = '';
  ervaringInput10.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput10 = document.querySelector('#naaminput10');
  const reactieInput10 = document.querySelector('#reactieinput10');

  if (naamInput10.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput10.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam10 = naamInput10.value.trim();
  const reactie10 = reactieInput10.value.trim();

  const reacties10 = JSON.parse(localStorage.getItem('reacties10')) || [];
  reacties10.push({ naam10, reactie10 });
  localStorage.setItem('reacties10', JSON.stringify(reacties10));

  voegReactieToeAanPagina(naam10, reactie10);

  naamInput10.value = '';
  reactieInput10.value = '';
});


function voegErvaringToeAanPagina(emotie10, ervaring10) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst10.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer10 = document.querySelector('#reactieLijst10');

  const container = document.createElement('div');
  container.classList.add('reactietekst10');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer10.appendChild(container);
  reactielijstContainer10.style.display = 'flex';
}
