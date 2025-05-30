document.addEventListener('DOMContentLoaded', function () {
  const ervaringen9 = JSON.parse(localStorage.getItem('ervaringen9')) || [];
  const emotieTekstElement9 = document.querySelector('#emotietekstp9');
  const emotieTekstElementtekst9 = document.querySelector('.emotietekst9');
  const ervaringTekstElementtekst9 = document.querySelector('.ervaringtekst9');
  const storedEmotie9 = localStorage.getItem('emotie9');
  const storedErvaring9 = localStorage.getItem('ervaring9');

  
  if (storedEmotie9 && emotieTekstElement9) {
    emotieTekstElement9.textContent = storedEmotie9;
    emotieTekstElementtekst9.style.display = 'block';
  }

  if (storedErvaring9 && ervaringTekstElementtekst9) {
    ervaringTekstElementtekst9.textContent = storedErvaring9;
    ervaringTekstElementtekst9.style.display = 'block';
  }


  ervaringen9.forEach(item => {
    voegErvaringToeAanPagina(item.emotie9, item.ervaring9);
  });

  const reactielijstContainer9 = document.querySelector('#reactieLijst9');
  const reacties9 = JSON.parse(localStorage.getItem('reacties9')) || [];

  reacties9.forEach(item => {
    voegReactieToeAanPagina(item.naam9, item.reactie9);
  });
});


const emotieDiv = document.querySelector('.emotie9'); 
const ervaringDiv = document.querySelector('.ervaring9');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam9');
const reactieDiv = document.querySelector('.reactie9');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst9 = document.querySelector('.ervaringtekst9');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput9 = document.querySelector('#emotieinput9');
  const ervaringInput9 = document.querySelector('#ervaringinput9');
  const emotieTekstElement9 = document.querySelector('#emotietekstp9');
  const emotieTekstElementtekst9 = document.querySelector('.emotietekst9');
  const ervaringTekstElement9 = document.querySelector('#ervaringtekstp9'); 

  if (emotieInput9.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput9.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie9 = emotieInput9.value.trim();
  const ervaring9 = ervaringInput9.value.trim();

  
  
 
  if (emotieTekstElement9) {
    emotieTekstElement9.textContent = emotie9;
    emotieTekstElementtekst9.style.display = 'block'; 
  }


  if (ervaringTekstElement9) {
    ervaringTekstElement9.textContent = ervaring9;
    ervaringTekstElement9.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie9', emotie9);


  localStorage.setItem('ervaring9', ervaring9);

  const ervaringen9 = JSON.parse(localStorage.getItem('ervaringen9')) || [];
  ervaringen9.push({ emotie9, ervaring9 });
  localStorage.setItem('ervaringen9', JSON.stringify(ervaringen9));

  voegErvaringToeAanPagina(emotie9, ervaring9);

  emotieInput9.value = '';
  ervaringInput9.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput9 = document.querySelector('#naaminput9');
  const reactieInput9 = document.querySelector('#reactieinput9');

  if (naamInput9.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput9.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam9 = naamInput9.value.trim();
  const reactie9 = reactieInput9.value.trim();

  const reacties9 = JSON.parse(localStorage.getItem('reacties9')) || [];
  reacties9.push({ naam9, reactie9 });
  localStorage.setItem('reacties9', JSON.stringify(reacties9));

  voegReactieToeAanPagina(naam9, reactie9);

  naamInput9.value = '';
  reactieInput9.value = '';
});


function voegErvaringToeAanPagina(emotie9, ervaring9) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst9.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer9 = document.querySelector('#reactieLijst9');

  const container = document.createElement('div');
  container.classList.add('reactietekst9');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer9.appendChild(container);
  reactielijstContainer9.style.display = 'flex';
}
