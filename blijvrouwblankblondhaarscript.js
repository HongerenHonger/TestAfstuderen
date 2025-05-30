document.addEventListener('DOMContentLoaded', function () {
  const ervaringen5 = JSON.parse(localStorage.getItem('ervaringen5')) || [];
  const emotieTekstElement5 = document.querySelector('#emotietekstp5');
  const emotieTekstElementtekst5 = document.querySelector('.emotietekst5');
  const ervaringTekstElementtekst5 = document.querySelector('.ervaringtekst5');
  const storedEmotie5 = localStorage.getItem('emotie5');
  const storedErvaring5 = localStorage.getItem('ervaring5');

  
  if (storedEmotie5 && emotieTekstElement5) {
    emotieTekstElement5.textContent = storedEmotie5;
    emotieTekstElementtekst5.style.display = 'block';
  }

  if (storedErvaring5 && ervaringTekstElementtekst5) {
    ervaringTekstElementtekst5.textContent = storedErvaring5;
    ervaringTekstElementtekst5.style.display = 'block';
  }


  ervaringen5.forEach(item => {
    voegErvaringToeAanPagina(item.emotie5, item.ervaring5);
  });

  const reactielijstContainer5 = document.querySelector('#reactieLijst5');
  const reacties5 = JSON.parse(localStorage.getItem('reacties5')) || [];

  reacties5.forEach(item => {
    voegReactieToeAanPagina(item.naam5, item.reactie5);
  });
});


const emotieDiv = document.querySelector('.emotie5'); 
const ervaringDiv = document.querySelector('.ervaring5');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam5');
const reactieDiv = document.querySelector('.reactie5');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst5 = document.querySelector('.ervaringtekst5');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput5 = document.querySelector('#emotieinput5');
  const ervaringInput5 = document.querySelector('#ervaringinput5');
  const emotieTekstElement5 = document.querySelector('#emotietekstp5');
  const emotieTekstElementtekst5 = document.querySelector('.emotietekst5');
  const ervaringTekstElement5 = document.querySelector('#ervaringtekstp5'); 

  if (emotieInput5.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput5.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie5 = emotieInput5.value.trim();
  const ervaring5 = ervaringInput5.value.trim();

  
  
 
  if (emotieTekstElement5) {
    emotieTekstElement5.textContent = emotie5;
    emotieTekstElementtekst5.style.display = 'block'; 
  }


  if (ervaringTekstElement5) {
    ervaringTekstElement5.textContent = ervaring5;
    ervaringTekstElement5.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie5', emotie5);


  localStorage.setItem('ervaring5', ervaring5);

  const ervaringen5 = JSON.parse(localStorage.getItem('ervaringen5')) || [];
  ervaringen5.push({ emotie5, ervaring5 });
  localStorage.setItem('ervaringen5', JSON.stringify(ervaringen5));

  voegErvaringToeAanPagina(emotie5, ervaring5);

  emotieInput5.value = '';
  ervaringInput5.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput5 = document.querySelector('#naaminput5');
  const reactieInput5 = document.querySelector('#reactieinput5');

  if (naamInput5.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput5.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam5 = naamInput5.value.trim();
  const reactie5 = reactieInput5.value.trim();

  const reacties5 = JSON.parse(localStorage.getItem('reacties5')) || [];
  reacties5.push({ naam5, reactie5 });
  localStorage.setItem('reacties5', JSON.stringify(reacties5));

  voegReactieToeAanPagina(naam5, reactie5);

  naamInput5.value = '';
  reactieInput5.value = '';
});


function voegErvaringToeAanPagina(emotie5, ervaring5) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst5.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer5 = document.querySelector('#reactieLijst5');

  const container = document.createElement('div');
  container.classList.add('reactietekst5');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer5.appendChild(container);
  reactielijstContainer5.style.display = 'flex';
}

