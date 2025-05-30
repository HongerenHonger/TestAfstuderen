document.addEventListener('DOMContentLoaded', function () {
  const ervaringen7 = JSON.parse(localStorage.getItem('ervaringen7')) || [];
  const emotieTekstElement7 = document.querySelector('#emotietekstp7');
  const emotieTekstElementtekst7 = document.querySelector('.emotietekst7');
  const ervaringTekstElementtekst7 = document.querySelector('.ervaringtekst7');
  const storedEmotie7 = localStorage.getItem('emotie7');
  const storedErvaring7 = localStorage.getItem('ervaring7');

  
  if (storedEmotie7 && emotieTekstElement7) {
    emotieTekstElement7.textContent = storedEmotie7;
    emotieTekstElementtekst7.style.display = 'block';
  }

  if (storedErvaring7 && ervaringTekstElementtekst7) {
    ervaringTekstElementtekst7.textContent = storedErvaring7;
    ervaringTekstElementtekst7.style.display = 'block';
  }


  ervaringen7.forEach(item => {
    voegErvaringToeAanPagina(item.emotie7, item.ervaring7);
  });

  const reactielijstContainer7 = document.querySelector('#reactieLijst7');
  const reacties7 = JSON.parse(localStorage.getItem('reacties7')) || [];

  reacties7.forEach(item => {
    voegReactieToeAanPagina(item.naam7, item.reactie7);
  });
});


const emotieDiv = document.querySelector('.emotie7'); 
const ervaringDiv = document.querySelector('.ervaring7');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam7');
const reactieDiv = document.querySelector('.reactie7');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst7 = document.querySelector('.ervaringtekst7');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput7 = document.querySelector('#emotieinput7');
  const ervaringInput7 = document.querySelector('#ervaringinput7');
  const emotieTekstElement7 = document.querySelector('#emotietekstp7');
  const emotieTekstElementtekst7 = document.querySelector('.emotietekst7');
  const ervaringTekstElement7 = document.querySelector('#ervaringtekstp7'); 

  if (emotieInput7.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput7.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie7 = emotieInput7.value.trim();
  const ervaring7 = ervaringInput7.value.trim();

  
  
 
  if (emotieTekstElement7) {
    emotieTekstElement7.textContent = emotie7;
    emotieTekstElementtekst7.style.display = 'block'; 
  }


  if (ervaringTekstElement7) {
    ervaringTekstElement7.textContent = ervaring7;
    ervaringTekstElement7.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie7', emotie7);


  localStorage.setItem('ervaring7', ervaring7);

  const ervaringen7 = JSON.parse(localStorage.getItem('ervaringen7')) || [];
  ervaringen7.push({ emotie7, ervaring7 });
  localStorage.setItem('ervaringen7', JSON.stringify(ervaringen7));

  voegErvaringToeAanPagina(emotie7, ervaring7);

  emotieInput7.value = '';
  ervaringInput7.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput7 = document.querySelector('#naaminput7');
  const reactieInput7 = document.querySelector('#reactieinput7');

  if (naamInput7.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput7.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam7 = naamInput7.value.trim();
  const reactie7 = reactieInput7.value.trim();

  const reacties7 = JSON.parse(localStorage.getItem('reacties7')) || [];
  reacties7.push({ naam7, reactie7 });
  localStorage.setItem('reacties7', JSON.stringify(reacties7));

  voegReactieToeAanPagina(naam7, reactie7);

  naamInput7.value = '';
  reactieInput7.value = '';
});


function voegErvaringToeAanPagina(emotie7, ervaring7) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst7.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer7 = document.querySelector('#reactieLijst7');

  const container = document.createElement('div');
  container.classList.add('reactietekst7');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer7.appendChild(container);
  reactielijstContainer7.style.display = 'flex';
}

