document.addEventListener('DOMContentLoaded', function () {
  const ervaringen20 = JSON.parse(localStorage.getItem('ervaringen20')) || [];
  const emotieTekstElement20 = document.querySelector('#emotietekstp20');
  const emotieTekstElementtekst20 = document.querySelector('.emotietekst20');
  const ervaringTekstElementtekst20 = document.querySelector('.ervaringtekst20');
  const storedEmotie20 = localStorage.getItem('emotie20');
  const storedErvaring20 = localStorage.getItem('ervaring20');

  
  if (storedEmotie20 && emotieTekstElement20) {
    emotieTekstElement20.textContent = storedEmotie20;
    emotieTekstElementtekst20.style.display = 'block';
  }

  if (storedErvaring20 && ervaringTekstElementtekst20) {
    ervaringTekstElementtekst20.textContent = storedErvaring20;
    ervaringTekstElementtekst20.style.display = 'block';
  }


  ervaringen20.forEach(item => {
    voegErvaringToeAanPagina(item.emotie20, item.ervaring20);
  });

  const reactielijstContainer20 = document.querySelector('#reactieLijst20');
  const reacties20 = JSON.parse(localStorage.getItem('reacties20')) || [];

  reacties20.forEach(item => {
    voegReactieToeAanPagina(item.naam20, item.reactie20);
  });
});


const emotieDiv = document.querySelector('.emotie20'); 
const ervaringDiv = document.querySelector('.ervaring20');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam20');
const reactieDiv = document.querySelector('.reactie20');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst20 = document.querySelector('.ervaringtekst20');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput20 = document.querySelector('#emotieinput20');
  const ervaringInput20 = document.querySelector('#ervaringinput20');
  const emotieTekstElement20 = document.querySelector('#emotietekstp20');
  const emotieTekstElementtekst20 = document.querySelector('.emotietekst20');
  const ervaringTekstElement20 = document.querySelector('#ervaringtekstp20'); 

  if (emotieInput20.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput20.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie20 = emotieInput20.value.trim();
  const ervaring20 = ervaringInput20.value.trim();

  
  
 
  if (emotieTekstElement20) {
    emotieTekstElement20.textContent = emotie20;
    emotieTekstElementtekst20.style.display = 'block'; 
  }


  if (ervaringTekstElement20) {
    ervaringTekstElement20.textContent = ervaring20;
    ervaringTekstElement20.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie20', emotie20);


  localStorage.setItem('ervaring20', ervaring20);

  const ervaringen20 = JSON.parse(localStorage.getItem('ervaringen20')) || [];
  ervaringen20.push({ emotie20, ervaring20 });
  localStorage.setItem('ervaringen20', JSON.stringify(ervaringen20));

  voegErvaringToeAanPagina(emotie20, ervaring20);

  emotieInput20.value = '';
  ervaringInput20.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput20 = document.querySelector('#naaminput20');
  const reactieInput20 = document.querySelector('#reactieinput20');

  if (naamInput20.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput20.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam20 = naamInput20.value.trim();
  const reactie20 = reactieInput20.value.trim();

  const reacties20 = JSON.parse(localStorage.getItem('reacties20')) || [];
  reacties20.push({ naam20, reactie20 });
  localStorage.setItem('reacties20', JSON.stringify(reacties20));

  voegReactieToeAanPagina(naam20, reactie20);

  naamInput20.value = '';
  reactieInput20.value = '';
});


function voegErvaringToeAanPagina(emotie20, ervaring20) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst20.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer20 = document.querySelector('#reactieLijst20');

  const container = document.createElement('div');
  container.classList.add('reactietekst20');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer20.appendChild(container);
  reactielijstContainer20.style.display = 'flex';
}

