document.addEventListener('DOMContentLoaded', function () {
  const ervaringen13 = JSON.parse(localStorage.getItem('ervaringen13')) || [];
  const emotieTekstElement13 = document.querySelector('#emotietekstp13');
  const emotieTekstElementtekst13 = document.querySelector('.emotietekst13');
  const ervaringTekstElementtekst13 = document.querySelector('.ervaringtekst13');
  const storedEmotie13 = localStorage.getItem('emotie13');
  const storedErvaring13 = localStorage.getItem('ervaring13');

  
  if (storedEmotie13 && emotieTekstElement13) {
    emotieTekstElement13.textContent = storedEmotie13;
    emotieTekstElementtekst13.style.display = 'block';
  }

  if (storedErvaring13 && ervaringTekstElementtekst13) {
    ervaringTekstElementtekst13.textContent = storedErvaring13;
    ervaringTekstElementtekst13.style.display = 'block';
  }


  ervaringen13.forEach(item => {
    voegErvaringToeAanPagina(item.emotie13, item.ervaring13);
  });

  const reactielijstContainer13 = document.querySelector('#reactieLijst13');
  const reacties13 = JSON.parse(localStorage.getItem('reacties13')) || [];

  reacties13.forEach(item => {
    voegReactieToeAanPagina(item.naam13, item.reactie13);
  });
});


const emotieDiv = document.querySelector('.emotie13'); 
const ervaringDiv = document.querySelector('.ervaring13');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam13');
const reactieDiv = document.querySelector('.reactie13');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst13 = document.querySelector('.ervaringtekst13');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput13 = document.querySelector('#emotieinput13');
  const ervaringInput13 = document.querySelector('#ervaringinput13');
  const emotieTekstElement13 = document.querySelector('#emotietekstp13');
  const emotieTekstElementtekst13 = document.querySelector('.emotietekst13');
  const ervaringTekstElement13 = document.querySelector('#ervaringtekstp13'); 

  if (emotieInput13.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput13.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie13 = emotieInput13.value.trim();
  const ervaring13 = ervaringInput13.value.trim();

  
  
 
  if (emotieTekstElement13) {
    emotieTekstElement13.textContent = emotie13;
    emotieTekstElementtekst13.style.display = 'block'; 
  }


  if (ervaringTekstElement13) {
    ervaringTekstElement13.textContent = ervaring13;
    ervaringTekstElement13.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie13', emotie13);


  localStorage.setItem('ervaring13', ervaring13);

  const ervaringen13 = JSON.parse(localStorage.getItem('ervaringen13')) || [];
  ervaringen13.push({ emotie13, ervaring13 });
  localStorage.setItem('ervaringen13', JSON.stringify(ervaringen13));

  voegErvaringToeAanPagina(emotie13, ervaring13);

  emotieInput13.value = '';
  ervaringInput13.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput13 = document.querySelector('#naaminput13');
  const reactieInput13 = document.querySelector('#reactieinput13');

  if (naamInput13.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput13.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam13 = naamInput13.value.trim();
  const reactie13 = reactieInput13.value.trim();

  const reacties13 = JSON.parse(localStorage.getItem('reacties13')) || [];
  reacties13.push({ naam13, reactie13 });
  localStorage.setItem('reacties13', JSON.stringify(reacties13));

  voegReactieToeAanPagina(naam13, reactie13);

  naamInput13.value = '';
  reactieInput13.value = '';
});


function voegErvaringToeAanPagina(emotie13, ervaring13) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst13.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer13 = document.querySelector('#reactieLijst13');

  const container = document.createElement('div');
  container.classList.add('reactietekst13');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer13.appendChild(container);
  reactielijstContainer13.style.display = 'flex';
}

