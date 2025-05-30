document.addEventListener('DOMContentLoaded', function () {
  const ervaringen11 = JSON.parse(localStorage.getItem('ervaringen11')) || [];
  const emotieTekstElement11 = document.querySelector('#emotietekstp11');
  const emotieTekstElementtekst11 = document.querySelector('.emotietekst11');
  const ervaringTekstElementtekst11 = document.querySelector('.ervaringtekst11');
  const storedEmotie11 = localStorage.getItem('emotie11');
  const storedErvaring11 = localStorage.getItem('ervaring11');

  
  if (storedEmotie11 && emotieTekstElement11) {
    emotieTekstElement11.textContent = storedEmotie11;
    emotieTekstElementtekst11.style.display = 'block';
  }

  if (storedErvaring11 && ervaringTekstElementtekst11) {
    ervaringTekstElementtekst11.textContent = storedErvaring11;
    ervaringTekstElementtekst11.style.display = 'block';
  }


  ervaringen11.forEach(item => {
    voegErvaringToeAanPagina(item.emotie11, item.ervaring11);
  });

  const reactielijstContainer11 = document.querySelector('#reactieLijst11');
  const reacties11 = JSON.parse(localStorage.getItem('reacties11')) || [];

  reacties11.forEach(item => {
    voegReactieToeAanPagina(item.naam11, item.reactie11);
  });
});


const emotieDiv = document.querySelector('.emotie11'); 
const ervaringDiv = document.querySelector('.ervaring11');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam11');
const reactieDiv = document.querySelector('.reactie11');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst11 = document.querySelector('.ervaringtekst11');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput11 = document.querySelector('#emotieinput11');
  const ervaringInput11 = document.querySelector('#ervaringinput11');
  const emotieTekstElement11 = document.querySelector('#emotietekstp11');
  const emotieTekstElementtekst11 = document.querySelector('.emotietekst11');
  const ervaringTekstElement11 = document.querySelector('#ervaringtekstp11'); 

  if (emotieInput11.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput11.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie11 = emotieInput11.value.trim();
  const ervaring11 = ervaringInput11.value.trim();

  
  
 
  if (emotieTekstElement11) {
    emotieTekstElement11.textContent = emotie11;
    emotieTekstElementtekst11.style.display = 'block'; 
  }


  if (ervaringTekstElement11) {
    ervaringTekstElement11.textContent = ervaring11;
    ervaringTekstElement11.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie11', emotie11);


  localStorage.setItem('ervaring11', ervaring11);

  const ervaringen11 = JSON.parse(localStorage.getItem('ervaringen11')) || [];
  ervaringen11.push({ emotie11, ervaring11 });
  localStorage.setItem('ervaringen11', JSON.stringify(ervaringen11));

  voegErvaringToeAanPagina(emotie11, ervaring11);

  emotieInput11.value = '';
  ervaringInput11.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput11 = document.querySelector('#naaminput11');
  const reactieInput11 = document.querySelector('#reactieinput11');

  if (naamInput11.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput11.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam11 = naamInput11.value.trim();
  const reactie11 = reactieInput11.value.trim();

  const reacties11 = JSON.parse(localStorage.getItem('reacties11')) || [];
  reacties11.push({ naam11, reactie11 });
  localStorage.setItem('reacties11', JSON.stringify(reacties11));

  voegReactieToeAanPagina(naam11, reactie11);

  naamInput11.value = '';
  reactieInput11.value = '';
});


function voegErvaringToeAanPagina(emotie11, ervaring11) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst11.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer11 = document.querySelector('#reactieLijst11');

  const container = document.createElement('div');
  container.classList.add('reactietekst11');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer11.appendChild(container);
  reactielijstContainer11.style.display = 'flex';
}
