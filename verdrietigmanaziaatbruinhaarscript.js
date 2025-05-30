document.addEventListener('DOMContentLoaded', function () {
  const ervaringen32 = JSON.parse(localStorage.getItem('ervaringen32')) || [];
  const emotieTekstElement32 = document.querySelector('#emotietekstp32');
  const emotieTekstElementtekst32 = document.querySelector('.emotietekst32');
  const ervaringTekstElementtekst32 = document.querySelector('.ervaringtekst32');
  const storedEmotie32 = localStorage.getItem('emotie32');
  const storedErvaring32 = localStorage.getItem('ervaring32');

  
  if (storedEmotie32 && emotieTekstElement32) {
    emotieTekstElement32.textContent = storedEmotie32;
    emotieTekstElementtekst32.style.display = 'block';
  }

  if (storedErvaring32 && ervaringTekstElementtekst32) {
    ervaringTekstElementtekst32.textContent = storedErvaring32;
    ervaringTekstElementtekst32.style.display = 'block';
  }


  ervaringen32.forEach(item => {
    voegErvaringToeAanPagina(item.emotie32, item.ervaring32);
  });

  const reactielijstContainer32 = document.querySelector('#reactieLijst32');
  const reacties32 = JSON.parse(localStorage.getItem('reacties32')) || [];

  reacties32.forEach(item => {
    voegReactieToeAanPagina(item.naam32, item.reactie32);
  });
});


const emotieDiv = document.querySelector('.emotie32'); 
const ervaringDiv = document.querySelector('.ervaring32');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam32');
const reactieDiv = document.querySelector('.reactie32');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst32 = document.querySelector('.ervaringtekst32');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput32 = document.querySelector('#emotieinput32');
  const ervaringInput32 = document.querySelector('#ervaringinput32');
  const emotieTekstElement32 = document.querySelector('#emotietekstp32');
  const emotieTekstElementtekst32 = document.querySelector('.emotietekst32');
  const ervaringTekstElement32 = document.querySelector('#ervaringtekstp32'); 

  if (emotieInput32.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput32.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie32 = emotieInput32.value.trim();
  const ervaring32 = ervaringInput32.value.trim();

  
  
 
  if (emotieTekstElement32) {
    emotieTekstElement32.textContent = emotie32;
    emotieTekstElementtekst32.style.display = 'block'; 
  }


  if (ervaringTekstElement32) {
    ervaringTekstElement32.textContent = ervaring32;
    ervaringTekstElement32.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie32', emotie32);


  localStorage.setItem('ervaring32', ervaring32);

  const ervaringen32 = JSON.parse(localStorage.getItem('ervaringen32')) || [];
  ervaringen32.push({ emotie32, ervaring32 });
  localStorage.setItem('ervaringen32', JSON.stringify(ervaringen32));

  voegErvaringToeAanPagina(emotie32, ervaring32);

  emotieInput32.value = '';
  ervaringInput32.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput32 = document.querySelector('#naaminput32');
  const reactieInput32 = document.querySelector('#reactieinput32');

  if (naamInput32.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput32.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam32 = naamInput32.value.trim();
  const reactie32 = reactieInput32.value.trim();

  const reacties32 = JSON.parse(localStorage.getItem('reacties32')) || [];
  reacties32.push({ naam32, reactie32 });
  localStorage.setItem('reacties32', JSON.stringify(reacties32));

  voegReactieToeAanPagina(naam32, reactie32);

  naamInput32.value = '';
  reactieInput32.value = '';
});


function voegErvaringToeAanPagina(emotie32, ervaring32) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst32.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer32 = document.querySelector('#reactieLijst32');

  const container = document.createElement('div');
  container.classList.add('reactietekst32');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer32.appendChild(container);
  reactielijstContainer32.style.display = 'flex';
}

