document.addEventListener('DOMContentLoaded', function () {
  const ervaringen36 = JSON.parse(localStorage.getItem('ervaringen36')) || [];
  const emotieTekstElement36 = document.querySelector('#emotietekstp36');
  const emotieTekstElementtekst36 = document.querySelector('.emotietekst36');
  const ervaringTekstElementtekst36 = document.querySelector('.ervaringtekst36');
  const storedEmotie36 = localStorage.getItem('emotie36');
  const storedErvaring36 = localStorage.getItem('ervaring36');

  
  if (storedEmotie36 && emotieTekstElement36) {
    emotieTekstElement36.textContent = storedEmotie36;
    emotieTekstElementtekst36.style.display = 'block';
  }

  if (storedErvaring36 && ervaringTekstElementtekst36) {
    ervaringTekstElementtekst36.textContent = storedErvaring36;
    ervaringTekstElementtekst36.style.display = 'block';
  }


  ervaringen36.forEach(item => {
    voegErvaringToeAanPagina(item.emotie36, item.ervaring36);
  });

  const reactielijstContainer36 = document.querySelector('#reactieLijst36');
  const reacties36 = JSON.parse(localStorage.getItem('reacties36')) || [];

  reacties36.forEach(item => {
    voegReactieToeAanPagina(item.naam36, item.reactie36);
  });
});


const emotieDiv = document.querySelector('.emotie36'); 
const ervaringDiv = document.querySelector('.ervaring36');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam36');
const reactieDiv = document.querySelector('.reactie36');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst36 = document.querySelector('.ervaringtekst36');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput36 = document.querySelector('#emotieinput36');
  const ervaringInput36 = document.querySelector('#ervaringinput36');
  const emotieTekstElement36 = document.querySelector('#emotietekstp36');
  const emotieTekstElementtekst36 = document.querySelector('.emotietekst36');
  const ervaringTekstElement36 = document.querySelector('#ervaringtekstp36'); 

  if (emotieInput36.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput36.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie36 = emotieInput36.value.trim();
  const ervaring36 = ervaringInput36.value.trim();

  
  
 
  if (emotieTekstElement36) {
    emotieTekstElement36.textContent = emotie36;
    emotieTekstElementtekst36.style.display = 'block'; 
  }


  if (ervaringTekstElement36) {
    ervaringTekstElement36.textContent = ervaring36;
    ervaringTekstElement36.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie36', emotie36);


  localStorage.setItem('ervaring36', ervaring36);

  const ervaringen36 = JSON.parse(localStorage.getItem('ervaringen36')) || [];
  ervaringen36.push({ emotie36, ervaring36 });
  localStorage.setItem('ervaringen36', JSON.stringify(ervaringen36));

  voegErvaringToeAanPagina(emotie36, ervaring36);

  emotieInput36.value = '';
  ervaringInput36.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput36 = document.querySelector('#naaminput36');
  const reactieInput36 = document.querySelector('#reactieinput36');

  if (naamInput36.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput36.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam36 = naamInput36.value.trim();
  const reactie36 = reactieInput36.value.trim();

  const reacties36 = JSON.parse(localStorage.getItem('reacties36')) || [];
  reacties36.push({ naam36, reactie36 });
  localStorage.setItem('reacties36', JSON.stringify(reacties36));

  voegReactieToeAanPagina(naam36, reactie36);

  naamInput36.value = '';
  reactieInput36.value = '';
});


function voegErvaringToeAanPagina(emotie36, ervaring36) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst36.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer36 = document.querySelector('#reactieLijst36');

  const container = document.createElement('div');
  container.classList.add('reactietekst36');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer36.appendChild(container);
  reactielijstContainer36.style.display = 'flex';
}

