document.addEventListener('DOMContentLoaded', function () {
  const ervaringen14 = JSON.parse(localStorage.getItem('ervaringen14')) || [];
  const emotieTekstElement14 = document.querySelector('#emotietekstp14');
  const emotieTekstElementtekst14 = document.querySelector('.emotietekst14');
  const ervaringTekstElementtekst14 = document.querySelector('.ervaringtekst14');
  const storedEmotie14 = localStorage.getItem('emotie14');
  const storedErvaring14 = localStorage.getItem('ervaring14');

  
  if (storedEmotie14 && emotieTekstElement14) {
    emotieTekstElement14.textContent = storedEmotie14;
    emotieTekstElementtekst14.style.display = 'block';
  }

  if (storedErvaring14 && ervaringTekstElementtekst14) {
    ervaringTekstElementtekst14.textContent = storedErvaring14;
    ervaringTekstElementtekst14.style.display = 'block';
  }


  ervaringen14.forEach(item => {
    voegErvaringToeAanPagina(item.emotie14, item.ervaring14);
  });

  const reactielijstContainer14 = document.querySelector('#reactieLijst14');
  const reacties14 = JSON.parse(localStorage.getItem('reacties14')) || [];

  reacties14.forEach(item => {
    voegReactieToeAanPagina(item.naam14, item.reactie14);
  });
});


const emotieDiv = document.querySelector('.emotie14'); 
const ervaringDiv = document.querySelector('.ervaring14');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam14');
const reactieDiv = document.querySelector('.reactie14');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst14 = document.querySelector('.ervaringtekst14');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput14 = document.querySelector('#emotieinput14');
  const ervaringInput14 = document.querySelector('#ervaringinput14');
  const emotieTekstElement14 = document.querySelector('#emotietekstp14');
  const emotieTekstElementtekst14 = document.querySelector('.emotietekst14');
  const ervaringTekstElement14 = document.querySelector('#ervaringtekstp14'); 

  if (emotieInput14.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput14.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie14 = emotieInput14.value.trim();
  const ervaring14 = ervaringInput14.value.trim();

  
  
 
  if (emotieTekstElement14) {
    emotieTekstElement14.textContent = emotie14;
    emotieTekstElementtekst14.style.display = 'block'; 
  }


  if (ervaringTekstElement14) {
    ervaringTekstElement14.textContent = ervaring14;
    ervaringTekstElement14.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie14', emotie14);


  localStorage.setItem('ervaring14', ervaring14);

  const ervaringen14 = JSON.parse(localStorage.getItem('ervaringen14')) || [];
  ervaringen14.push({ emotie14, ervaring14 });
  localStorage.setItem('ervaringen14', JSON.stringify(ervaringen14));

  voegErvaringToeAanPagina(emotie14, ervaring14);

  emotieInput14.value = '';
  ervaringInput14.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput14 = document.querySelector('#naaminput14');
  const reactieInput14 = document.querySelector('#reactieinput14');

  if (naamInput14.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput14.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam14 = naamInput14.value.trim();
  const reactie14 = reactieInput14.value.trim();

  const reacties14 = JSON.parse(localStorage.getItem('reacties14')) || [];
  reacties14.push({ naam14, reactie14 });
  localStorage.setItem('reacties14', JSON.stringify(reacties14));

  voegReactieToeAanPagina(naam14, reactie14);

  naamInput14.value = '';
  reactieInput14.value = '';
});


function voegErvaringToeAanPagina(emotie14, ervaring14) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst14.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer14 = document.querySelector('#reactieLijst14');

  const container = document.createElement('div');
  container.classList.add('reactietekst14');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer14.appendChild(container);
  reactielijstContainer14.style.display = 'flex';
}

