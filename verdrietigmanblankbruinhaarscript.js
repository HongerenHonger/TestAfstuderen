document.addEventListener('DOMContentLoaded', function () {
  const ervaringen33 = JSON.parse(localStorage.getItem('ervaringen33')) || [];
  const emotieTekstElement33 = document.querySelector('#emotietekstp33');
  const emotieTekstElementtekst33 = document.querySelector('.emotietekst33');
  const ervaringTekstElementtekst33 = document.querySelector('.ervaringtekst33');
  const storedEmotie33 = localStorage.getItem('emotie33');
  const storedErvaring33 = localStorage.getItem('ervaring33');

  
  if (storedEmotie33 && emotieTekstElement33) {
    emotieTekstElement33.textContent = storedEmotie33;
    emotieTekstElementtekst33.style.display = 'block';
  }

  if (storedErvaring33 && ervaringTekstElementtekst33) {
    ervaringTekstElementtekst33.textContent = storedErvaring33;
    ervaringTekstElementtekst33.style.display = 'block';
  }


  ervaringen33.forEach(item => {
    voegErvaringToeAanPagina(item.emotie33, item.ervaring33);
  });

  const reactielijstContainer33 = document.querySelector('#reactieLijst33');
  const reacties33 = JSON.parse(localStorage.getItem('reacties33')) || [];

  reacties33.forEach(item => {
    voegReactieToeAanPagina(item.naam33, item.reactie33);
  });
});


const emotieDiv = document.querySelector('.emotie33'); 
const ervaringDiv = document.querySelector('.ervaring33');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam33');
const reactieDiv = document.querySelector('.reactie33');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst33 = document.querySelector('.ervaringtekst33');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput33 = document.querySelector('#emotieinput33');
  const ervaringInput33 = document.querySelector('#ervaringinput33');
  const emotieTekstElement33 = document.querySelector('#emotietekstp33');
  const emotieTekstElementtekst33 = document.querySelector('.emotietekst33');
  const ervaringTekstElement33 = document.querySelector('#ervaringtekstp33'); 

  if (emotieInput33.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput33.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie33 = emotieInput33.value.trim();
  const ervaring33 = ervaringInput33.value.trim();

  
  
 
  if (emotieTekstElement33) {
    emotieTekstElement33.textContent = emotie33;
    emotieTekstElementtekst33.style.display = 'block'; 
  }


  if (ervaringTekstElement33) {
    ervaringTekstElement33.textContent = ervaring33;
    ervaringTekstElement33.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie33', emotie33);


  localStorage.setItem('ervaring33', ervaring33);

  const ervaringen33 = JSON.parse(localStorage.getItem('ervaringen33')) || [];
  ervaringen33.push({ emotie33, ervaring33 });
  localStorage.setItem('ervaringen33', JSON.stringify(ervaringen33));

  voegErvaringToeAanPagina(emotie33, ervaring33);

  emotieInput33.value = '';
  ervaringInput33.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput33 = document.querySelector('#naaminput33');
  const reactieInput33 = document.querySelector('#reactieinput33');

  if (naamInput33.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput33.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam33 = naamInput33.value.trim();
  const reactie33 = reactieInput33.value.trim();

  const reacties33 = JSON.parse(localStorage.getItem('reacties33')) || [];
  reacties33.push({ naam33, reactie33 });
  localStorage.setItem('reacties33', JSON.stringify(reacties33));

  voegReactieToeAanPagina(naam33, reactie33);

  naamInput33.value = '';
  reactieInput33.value = '';
});


function voegErvaringToeAanPagina(emotie33, ervaring33) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst33.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer33 = document.querySelector('#reactieLijst33');

  const container = document.createElement('div');
  container.classList.add('reactietekst33');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer33.appendChild(container);
  reactielijstContainer33.style.display = 'flex';
}

