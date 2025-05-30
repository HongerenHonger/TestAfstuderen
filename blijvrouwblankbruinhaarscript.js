document.addEventListener('DOMContentLoaded', function () {
  const ervaringen6 = JSON.parse(localStorage.getItem('ervaringen6')) || [];
  const emotieTekstElement6 = document.querySelector('#emotietekstp6');
  const emotieTekstElementtekst6 = document.querySelector('.emotietekst6');
  const ervaringTekstElementtekst6 = document.querySelector('.ervaringtekst6');
  const storedEmotie6 = localStorage.getItem('emotie6');
  const storedErvaring6 = localStorage.getItem('ervaring6');

  
  if (storedEmotie6 && emotieTekstElement6) {
    emotieTekstElement6.textContent = storedEmotie6;
    emotieTekstElementtekst6.style.display = 'block';
  }

  if (storedErvaring6 && ervaringTekstElementtekst6) {
    ervaringTekstElementtekst6.textContent = storedErvaring6;
    ervaringTekstElementtekst6.style.display = 'block';
  }


  ervaringen6.forEach(item => {
    voegErvaringToeAanPagina(item.emotie6, item.ervaring6);
  });

  const reactielijstContainer6 = document.querySelector('#reactieLijst6');
  const reacties6 = JSON.parse(localStorage.getItem('reacties6')) || [];

  reacties6.forEach(item => {
    voegReactieToeAanPagina(item.naam6, item.reactie6);
  });
});


const emotieDiv = document.querySelector('.emotie6'); 
const ervaringDiv = document.querySelector('.ervaring6');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam6');
const reactieDiv = document.querySelector('.reactie6');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst6 = document.querySelector('.ervaringtekst6');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput6 = document.querySelector('#emotieinput6');
  const ervaringInput6 = document.querySelector('#ervaringinput6');
  const emotieTekstElement6 = document.querySelector('#emotietekstp6');
  const emotieTekstElementtekst6 = document.querySelector('.emotietekst6');
  const ervaringTekstElement6 = document.querySelector('#ervaringtekstp6'); 

  if (emotieInput6.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput6.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie6 = emotieInput6.value.trim();
  const ervaring6 = ervaringInput6.value.trim();

  
  
 
  if (emotieTekstElement6) {
    emotieTekstElement6.textContent = emotie6;
    emotieTekstElementtekst6.style.display = 'block'; 
  }


  if (ervaringTekstElement6) {
    ervaringTekstElement6.textContent = ervaring6;
    ervaringTekstElement6.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie6', emotie6);


  localStorage.setItem('ervaring6', ervaring6);

  const ervaringen6 = JSON.parse(localStorage.getItem('ervaringen6')) || [];
  ervaringen6.push({ emotie6, ervaring6 });
  localStorage.setItem('ervaringen6', JSON.stringify(ervaringen6));

  voegErvaringToeAanPagina(emotie6, ervaring6);

  emotieInput6.value = '';
  ervaringInput6.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput6 = document.querySelector('#naaminput6');
  const reactieInput6 = document.querySelector('#reactieinput6');

  if (naamInput6.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput6.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam6 = naamInput6.value.trim();
  const reactie6 = reactieInput6.value.trim();

  const reacties6 = JSON.parse(localStorage.getItem('reacties6')) || [];
  reacties6.push({ naam6, reactie6 });
  localStorage.setItem('reacties6', JSON.stringify(reacties6));

  voegReactieToeAanPagina(naam6, reactie6);

  naamInput6.value = '';
  reactieInput6.value = '';
});


function voegErvaringToeAanPagina(emotie6, ervaring6) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst6.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer6 = document.querySelector('#reactieLijst6');

  const container = document.createElement('div');
  container.classList.add('reactietekst6');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer6.appendChild(container);
  reactielijstContainer6.style.display = 'flex';
}

