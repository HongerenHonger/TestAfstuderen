document.addEventListener('DOMContentLoaded', function () {
  const ervaringen27 = JSON.parse(localStorage.getItem('ervaringen27')) || [];
  const emotieTekstElement27 = document.querySelector('#emotietekstp27');
  const emotieTekstElementtekst27 = document.querySelector('.emotietekst27');
  const ervaringTekstElementtekst27 = document.querySelector('.ervaringtekst27');
  const storedEmotie27 = localStorage.getItem('emotie27');
  const storedErvaring27 = localStorage.getItem('ervaring27');

  
  if (storedEmotie27 && emotieTekstElement27) {
    emotieTekstElement27.textContent = storedEmotie27;
    emotieTekstElementtekst27.style.display = 'block';
  }

  if (storedErvaring27 && ervaringTekstElementtekst27) {
    ervaringTekstElementtekst27.textContent = storedErvaring27;
    ervaringTekstElementtekst27.style.display = 'block';
  }


  ervaringen27.forEach(item => {
    voegErvaringToeAanPagina(item.emotie27, item.ervaring27);
  });

  const reactielijstContainer27 = document.querySelector('#reactieLijst27');
  const reacties27 = JSON.parse(localStorage.getItem('reacties27')) || [];

  reacties27.forEach(item => {
    voegReactieToeAanPagina(item.naam27, item.reactie27);
  });
});


const emotieDiv = document.querySelector('.emotie27'); 
const ervaringDiv = document.querySelector('.ervaring27');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam27');
const reactieDiv = document.querySelector('.reactie27');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst27 = document.querySelector('.ervaringtekst27');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput27 = document.querySelector('#emotieinput27');
  const ervaringInput27 = document.querySelector('#ervaringinput27');
  const emotieTekstElement27 = document.querySelector('#emotietekstp27');
  const emotieTekstElementtekst27 = document.querySelector('.emotietekst27');
  const ervaringTekstElement27 = document.querySelector('#ervaringtekstp27'); 

  if (emotieInput27.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput27.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie27 = emotieInput27.value.trim();
  const ervaring27 = ervaringInput27.value.trim();

  
  
 
  if (emotieTekstElement27) {
    emotieTekstElement27.textContent = emotie27;
    emotieTekstElementtekst27.style.display = 'block'; 
  }


  if (ervaringTekstElement27) {
    ervaringTekstElement27.textContent = ervaring27;
    ervaringTekstElement27.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie27', emotie27);


  localStorage.setItem('ervaring27', ervaring27);

  const ervaringen27 = JSON.parse(localStorage.getItem('ervaringen27')) || [];
  ervaringen27.push({ emotie27, ervaring27 });
  localStorage.setItem('ervaringen27', JSON.stringify(ervaringen27));

  voegErvaringToeAanPagina(emotie27, ervaring27);

  emotieInput27.value = '';
  ervaringInput27.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput27 = document.querySelector('#naaminput27');
  const reactieInput27 = document.querySelector('#reactieinput27');

  if (naamInput27.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput27.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam27 = naamInput27.value.trim();
  const reactie27 = reactieInput27.value.trim();

  const reacties27 = JSON.parse(localStorage.getItem('reacties27')) || [];
  reacties27.push({ naam27, reactie27 });
  localStorage.setItem('reacties27', JSON.stringify(reacties27));

  voegReactieToeAanPagina(naam27, reactie27);

  naamInput27.value = '';
  reactieInput27.value = '';
});


function voegErvaringToeAanPagina(emotie27, ervaring27) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst27.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer27 = document.querySelector('#reactieLijst27');

  const container = document.createElement('div');
  container.classList.add('reactietekst27');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer27.appendChild(container);
  reactielijstContainer27.style.display = 'flex';
}

