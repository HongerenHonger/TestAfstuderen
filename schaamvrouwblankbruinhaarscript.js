document.addEventListener('DOMContentLoaded', function () {
  const ervaringen22 = JSON.parse(localStorage.getItem('ervaringen22')) || [];
  const emotieTekstElement22 = document.querySelector('#emotietekstp22');
  const emotieTekstElementtekst22 = document.querySelector('.emotietekst22');
  const ervaringTekstElementtekst22 = document.querySelector('.ervaringtekst22');
  const storedEmotie22 = localStorage.getItem('emotie22');
  const storedErvaring22 = localStorage.getItem('ervaring22');

  
  if (storedEmotie22 && emotieTekstElement22) {
    emotieTekstElement22.textContent = storedEmotie22;
    emotieTekstElementtekst22.style.display = 'block';
  }

  if (storedErvaring22 && ervaringTekstElementtekst22) {
    ervaringTekstElementtekst22.textContent = storedErvaring22;
    ervaringTekstElementtekst22.style.display = 'block';
  }


  ervaringen22.forEach(item => {
    voegErvaringToeAanPagina(item.emotie22, item.ervaring22);
  });

  const reactielijstContainer22 = document.querySelector('#reactieLijst22');
  const reacties22 = JSON.parse(localStorage.getItem('reacties22')) || [];

  reacties22.forEach(item => {
    voegReactieToeAanPagina(item.naam22, item.reactie22);
  });
});


const emotieDiv = document.querySelector('.emotie22'); 
const ervaringDiv = document.querySelector('.ervaring22');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam22');
const reactieDiv = document.querySelector('.reactie22');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst22 = document.querySelector('.ervaringtekst22');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput22 = document.querySelector('#emotieinput22');
  const ervaringInput22 = document.querySelector('#ervaringinput22');
  const emotieTekstElement22 = document.querySelector('#emotietekstp22');
  const emotieTekstElementtekst22 = document.querySelector('.emotietekst22');
  const ervaringTekstElement22 = document.querySelector('#ervaringtekstp22'); 

  if (emotieInput22.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput22.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie22 = emotieInput22.value.trim();
  const ervaring22 = ervaringInput22.value.trim();

  
  
 
  if (emotieTekstElement22) {
    emotieTekstElement22.textContent = emotie22;
    emotieTekstElementtekst22.style.display = 'block'; 
  }


  if (ervaringTekstElement22) {
    ervaringTekstElement22.textContent = ervaring22;
    ervaringTekstElement22.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie22', emotie22);


  localStorage.setItem('ervaring22', ervaring22);

  const ervaringen22 = JSON.parse(localStorage.getItem('ervaringen22')) || [];
  ervaringen22.push({ emotie22, ervaring22 });
  localStorage.setItem('ervaringen22', JSON.stringify(ervaringen22));

  voegErvaringToeAanPagina(emotie22, ervaring22);

  emotieInput22.value = '';
  ervaringInput22.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput22 = document.querySelector('#naaminput22');
  const reactieInput22 = document.querySelector('#reactieinput22');

  if (naamInput22.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput22.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam22 = naamInput22.value.trim();
  const reactie22 = reactieInput22.value.trim();

  const reacties22 = JSON.parse(localStorage.getItem('reacties22')) || [];
  reacties22.push({ naam22, reactie22 });
  localStorage.setItem('reacties22', JSON.stringify(reacties22));

  voegReactieToeAanPagina(naam22, reactie22);

  naamInput22.value = '';
  reactieInput22.value = '';
});


function voegErvaringToeAanPagina(emotie22, ervaring22) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst22.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer22 = document.querySelector('#reactieLijst22');

  const container = document.createElement('div');
  container.classList.add('reactietekst22');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer22.appendChild(container);
  reactielijstContainer22.style.display = 'flex';
}

