document.addEventListener('DOMContentLoaded', function () {
  const ervaringen16 = JSON.parse(localStorage.getItem('ervaringen16')) || [];
  const emotieTekstElement16 = document.querySelector('#emotietekstp16');
  const emotieTekstElementtekst16 = document.querySelector('.emotietekst16');
  const ervaringTekstElementtekst16 = document.querySelector('.ervaringtekst16');
  const storedEmotie16 = localStorage.getItem('emotie16');
  const storedErvaring16 = localStorage.getItem('ervaring16');

  
  if (storedEmotie16 && emotieTekstElement16) {
    emotieTekstElement16.textContent = storedEmotie16;
    emotieTekstElementtekst16.style.display = 'block';
  }

  if (storedErvaring16 && ervaringTekstElementtekst16) {
    ervaringTekstElementtekst16.textContent = storedErvaring16;
    ervaringTekstElementtekst16.style.display = 'block';
  }


  ervaringen16.forEach(item => {
    voegErvaringToeAanPagina(item.emotie16, item.ervaring16);
  });

  const reactielijstContainer16 = document.querySelector('#reactieLijst16');
  const reacties16 = JSON.parse(localStorage.getItem('reacties16')) || [];

  reacties16.forEach(item => {
    voegReactieToeAanPagina(item.naam16, item.reactie16);
  });
});


const emotieDiv = document.querySelector('.emotie16'); 
const ervaringDiv = document.querySelector('.ervaring16');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam16');
const reactieDiv = document.querySelector('.reactie16');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst16 = document.querySelector('.ervaringtekst16');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput16 = document.querySelector('#emotieinput16');
  const ervaringInput16 = document.querySelector('#ervaringinput16');
  const emotieTekstElement16 = document.querySelector('#emotietekstp16');
  const emotieTekstElementtekst16 = document.querySelector('.emotietekst16');
  const ervaringTekstElement16 = document.querySelector('#ervaringtekstp16'); 

  if (emotieInput16.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput16.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie16 = emotieInput16.value.trim();
  const ervaring16 = ervaringInput16.value.trim();

  
  
 
  if (emotieTekstElement16) {
    emotieTekstElement16.textContent = emotie16;
    emotieTekstElementtekst16.style.display = 'block'; 
  }


  if (ervaringTekstElement16) {
    ervaringTekstElement16.textContent = ervaring16;
    ervaringTekstElement16.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie16', emotie16);


  localStorage.setItem('ervaring16', ervaring16);

  const ervaringen16 = JSON.parse(localStorage.getItem('ervaringen16')) || [];
  ervaringen16.push({ emotie16, ervaring16 });
  localStorage.setItem('ervaringen16', JSON.stringify(ervaringen16));

  voegErvaringToeAanPagina(emotie16, ervaring16);

  emotieInput16.value = '';
  ervaringInput16.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput16 = document.querySelector('#naaminput16');
  const reactieInput16 = document.querySelector('#reactieinput16');

  if (naamInput16.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput16.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam16 = naamInput16.value.trim();
  const reactie16 = reactieInput16.value.trim();

  const reacties16 = JSON.parse(localStorage.getItem('reacties16')) || [];
  reacties16.push({ naam16, reactie16 });
  localStorage.setItem('reacties16', JSON.stringify(reacties16));

  voegReactieToeAanPagina(naam16, reactie16);

  naamInput16.value = '';
  reactieInput16.value = '';
});


function voegErvaringToeAanPagina(emotie16, ervaring16) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst16.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer16 = document.querySelector('#reactieLijst16');

  const container = document.createElement('div');
  container.classList.add('reactietekst16');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer16.appendChild(container);
  reactielijstContainer16.style.display = 'flex';
}

