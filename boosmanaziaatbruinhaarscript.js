document.addEventListener('DOMContentLoaded', function () {
  const ervaringen8 = JSON.parse(localStorage.getItem('ervaringen8')) || [];
  const emotieTekstElement8 = document.querySelector('#emotietekstp8');
  const emotieTekstElementtekst8 = document.querySelector('.emotietekst8');
  const ervaringTekstElementtekst8 = document.querySelector('.ervaringtekst8');
  const storedEmotie8 = localStorage.getItem('emotie8');
  const storedErvaring8 = localStorage.getItem('ervaring8');

  
  if (storedEmotie8 && emotieTekstElement8) {
    emotieTekstElement8.textContent = storedEmotie8;
    emotieTekstElementtekst8.style.display = 'block';
  }

  if (storedErvaring8 && ervaringTekstElementtekst8) {
    ervaringTekstElementtekst8.textContent = storedErvaring8;
    ervaringTekstElementtekst8.style.display = 'block';
  }


  ervaringen8.forEach(item => {
    voegErvaringToeAanPagina(item.emotie8, item.ervaring8);
  });

  const reactielijstContainer8 = document.querySelector('#reactieLijst8');
  const reacties8 = JSON.parse(localStorage.getItem('reacties8')) || [];

  reacties8.forEach(item => {
    voegReactieToeAanPagina(item.naam8, item.reactie8);
  });
});


const emotieDiv = document.querySelector('.emotie8'); 
const ervaringDiv = document.querySelector('.ervaring8');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam8');
const reactieDiv = document.querySelector('.reactie8');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst8 = document.querySelector('.ervaringtekst8');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput8 = document.querySelector('#emotieinput8');
  const ervaringInput8 = document.querySelector('#ervaringinput8');
  const emotieTekstElement8 = document.querySelector('#emotietekstp8');
  const emotieTekstElementtekst8 = document.querySelector('.emotietekst8');
  const ervaringTekstElement8 = document.querySelector('#ervaringtekstp8'); 

  if (emotieInput8.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput8.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie8 = emotieInput8.value.trim();
  const ervaring8 = ervaringInput8.value.trim();

  
  
 
  if (emotieTekstElement8) {
    emotieTekstElement8.textContent = emotie8;
    emotieTekstElementtekst8.style.display = 'block'; 
  }


  if (ervaringTekstElement8) {
    ervaringTekstElement8.textContent = ervaring8;
    ervaringTekstElement8.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie8', emotie8);


  localStorage.setItem('ervaring8', ervaring8);

  const ervaringen8 = JSON.parse(localStorage.getItem('ervaringen8')) || [];
  ervaringen8.push({ emotie8, ervaring8 });
  localStorage.setItem('ervaringen8', JSON.stringify(ervaringen8));

  voegErvaringToeAanPagina(emotie8, ervaring8);

  emotieInput8.value = '';
  ervaringInput8.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput8 = document.querySelector('#naaminput8');
  const reactieInput8 = document.querySelector('#reactieinput8');

  if (naamInput8.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput8.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam8 = naamInput8.value.trim();
  const reactie8 = reactieInput8.value.trim();

  const reacties8 = JSON.parse(localStorage.getItem('reacties8')) || [];
  reacties8.push({ naam8, reactie8 });
  localStorage.setItem('reacties8', JSON.stringify(reacties8));

  voegReactieToeAanPagina(naam8, reactie8);

  naamInput8.value = '';
  reactieInput8.value = '';
});


function voegErvaringToeAanPagina(emotie8, ervaring8) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst8.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer8 = document.querySelector('#reactieLijst8');

  const container = document.createElement('div');
  container.classList.add('reactietekst8');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer8.appendChild(container);
  reactielijstContainer8.style.display = 'flex';
}
