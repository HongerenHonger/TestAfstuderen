document.addEventListener('DOMContentLoaded', function () {
  const ervaringen29 = JSON.parse(localStorage.getItem('ervaringen29')) || [];
  const emotieTekstElement29 = document.querySelector('#emotietekstp29');
  const emotieTekstElementtekst29 = document.querySelector('.emotietekst29');
  const ervaringTekstElementtekst29 = document.querySelector('.ervaringtekst29');
  const storedEmotie29 = localStorage.getItem('emotie29');
  const storedErvaring29 = localStorage.getItem('ervaring29');

  
  if (storedEmotie29 && emotieTekstElement29) {
    emotieTekstElement29.textContent = storedEmotie29;
    emotieTekstElementtekst29.style.display = 'block';
  }

  if (storedErvaring29 && ervaringTekstElementtekst29) {
    ervaringTekstElementtekst29.textContent = storedErvaring29;
    ervaringTekstElementtekst29.style.display = 'block';
  }


  ervaringen29.forEach(item => {
    voegErvaringToeAanPagina(item.emotie29, item.ervaring29);
  });

  const reactielijstContainer29 = document.querySelector('#reactieLijst29');
  const reacties29 = JSON.parse(localStorage.getItem('reacties29')) || [];

  reacties29.forEach(item => {
    voegReactieToeAanPagina(item.naam29, item.reactie29);
  });
});


const emotieDiv = document.querySelector('.emotie29'); 
const ervaringDiv = document.querySelector('.ervaring29');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam29');
const reactieDiv = document.querySelector('.reactie29');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst29 = document.querySelector('.ervaringtekst29');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput29 = document.querySelector('#emotieinput29');
  const ervaringInput29 = document.querySelector('#ervaringinput29');
  const emotieTekstElement29 = document.querySelector('#emotietekstp29');
  const emotieTekstElementtekst29 = document.querySelector('.emotietekst29');
  const ervaringTekstElement29 = document.querySelector('#ervaringtekstp29'); 

  if (emotieInput29.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput29.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie29 = emotieInput29.value.trim();
  const ervaring29 = ervaringInput29.value.trim();

  
  
 
  if (emotieTekstElement29) {
    emotieTekstElement29.textContent = emotie29;
    emotieTekstElementtekst29.style.display = 'block'; 
  }


  if (ervaringTekstElement29) {
    ervaringTekstElement29.textContent = ervaring29;
    ervaringTekstElement29.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie29', emotie29);


  localStorage.setItem('ervaring29', ervaring29);

  const ervaringen29 = JSON.parse(localStorage.getItem('ervaringen29')) || [];
  ervaringen29.push({ emotie29, ervaring29 });
  localStorage.setItem('ervaringen29', JSON.stringify(ervaringen29));

  voegErvaringToeAanPagina(emotie29, ervaring29);

  emotieInput29.value = '';
  ervaringInput29.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput29 = document.querySelector('#naaminput29');
  const reactieInput29 = document.querySelector('#reactieinput29');

  if (naamInput29.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput29.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam29 = naamInput29.value.trim();
  const reactie29 = reactieInput29.value.trim();

  const reacties29 = JSON.parse(localStorage.getItem('reacties29')) || [];
  reacties29.push({ naam29, reactie29 });
  localStorage.setItem('reacties29', JSON.stringify(reacties29));

  voegReactieToeAanPagina(naam29, reactie29);

  naamInput29.value = '';
  reactieInput29.value = '';
});


function voegErvaringToeAanPagina(emotie29, ervaring29) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst29.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer29 = document.querySelector('#reactieLijst29');

  const container = document.createElement('div');
  container.classList.add('reactietekst29');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer29.appendChild(container);
  reactielijstContainer29.style.display = 'flex';
}

