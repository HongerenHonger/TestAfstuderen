document.addEventListener('DOMContentLoaded', function () {
  const ervaringen37 = JSON.parse(localStorage.getItem('ervaringen37')) || [];
  const emotieTekstElement37 = document.querySelector('#emotietekstp37');
  const emotieTekstElementtekst37 = document.querySelector('.emotietekst37');
  const ervaringTekstElementtekst37 = document.querySelector('.ervaringtekst37');
  const storedEmotie37 = localStorage.getItem('emotie37');
  const storedErvaring37 = localStorage.getItem('ervaring37');

  
  if (storedEmotie37 && emotieTekstElement37) {
    emotieTekstElement37.textContent = storedEmotie37;
    emotieTekstElementtekst37.style.display = 'block';
  }

  if (storedErvaring37 && ervaringTekstElementtekst37) {
    ervaringTekstElementtekst37.textContent = storedErvaring37;
    ervaringTekstElementtekst37.style.display = 'block';
  }


  ervaringen37.forEach(item => {
    voegErvaringToeAanPagina(item.emotie37, item.ervaring37);
  });

  const reactielijstContainer37 = document.querySelector('#reactieLijst37');
  const reacties37 = JSON.parse(localStorage.getItem('reacties37')) || [];

  reacties37.forEach(item => {
    voegReactieToeAanPagina(item.naam37, item.reactie37);
  });
});


const emotieDiv = document.querySelector('.emotie37'); 
const ervaringDiv = document.querySelector('.ervaring37');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam37');
const reactieDiv = document.querySelector('.reactie37');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst37 = document.querySelector('.ervaringtekst37');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput37 = document.querySelector('#emotieinput37');
  const ervaringInput37 = document.querySelector('#ervaringinput37');
  const emotieTekstElement37 = document.querySelector('#emotietekstp37');
  const emotieTekstElementtekst37 = document.querySelector('.emotietekst37');
  const ervaringTekstElement37 = document.querySelector('#ervaringtekstp37'); 

  if (emotieInput37.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput37.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie37 = emotieInput37.value.trim();
  const ervaring37 = ervaringInput37.value.trim();

  
  
 
  if (emotieTekstElement37) {
    emotieTekstElement37.textContent = emotie37;
    emotieTekstElementtekst37.style.display = 'block'; 
  }


  if (ervaringTekstElement37) {
    ervaringTekstElement37.textContent = ervaring37;
    ervaringTekstElement37.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie37', emotie37);


  localStorage.setItem('ervaring37', ervaring37);

  const ervaringen37 = JSON.parse(localStorage.getItem('ervaringen37')) || [];
  ervaringen37.push({ emotie37, ervaring37 });
  localStorage.setItem('ervaringen37', JSON.stringify(ervaringen37));

  voegErvaringToeAanPagina(emotie37, ervaring37);

  emotieInput37.value = '';
  ervaringInput37.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput37 = document.querySelector('#naaminput37');
  const reactieInput37 = document.querySelector('#reactieinput37');

  if (naamInput37.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput37.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam37 = naamInput37.value.trim();
  const reactie37 = reactieInput37.value.trim();

  const reacties37 = JSON.parse(localStorage.getItem('reacties37')) || [];
  reacties37.push({ naam37, reactie37 });
  localStorage.setItem('reacties37', JSON.stringify(reacties37));

  voegReactieToeAanPagina(naam37, reactie37);

  naamInput37.value = '';
  reactieInput37.value = '';
});


function voegErvaringToeAanPagina(emotie37, ervaring37) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst37.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer37 = document.querySelector('#reactieLijst37');

  const container = document.createElement('div');
  container.classList.add('reactietekst37');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer37.appendChild(container);
  reactielijstContainer37.style.display = 'flex';
}

