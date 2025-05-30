document.addEventListener('DOMContentLoaded', function () {
  const ervaringen4 = JSON.parse(localStorage.getItem('ervaringen4')) || [];
  const emotieTekstElement4 = document.querySelector('#emotietekstp4');
  const emotieTekstElementtekst4 = document.querySelector('.emotietekst4');
  const ervaringTekstElementtekst4 = document.querySelector('.ervaringtekst4');
  const storedEmotie4 = localStorage.getItem('emotie4');
  const storedErvaring4 = localStorage.getItem('ervaring4');

  
  if (storedEmotie4 && emotieTekstElement4) {
    emotieTekstElement4.textContent = storedEmotie4;
    emotieTekstElementtekst4.style.display = 'block';
  }

  if (storedErvaring4 && ervaringTekstElementtekst4) {
    ervaringTekstElementtekst4.textContent = storedErvaring4;
    ervaringTekstElementtekst4.style.display = 'block';
  }


  ervaringen4.forEach(item => {
    voegErvaringToeAanPagina(item.emotie4, item.ervaring4);
  });

  const reactielijstContainer4 = document.querySelector('#reactieLijst4');
  const reacties4 = JSON.parse(localStorage.getItem('reacties4')) || [];

  reacties4.forEach(item => {
    voegReactieToeAanPagina(item.naam4, item.reactie4);
  });
});


const emotieDiv = document.querySelector('.emotie4'); 
const ervaringDiv = document.querySelector('.ervaring4');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam4');
const reactieDiv = document.querySelector('.reactie4');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst4 = document.querySelector('.ervaringtekst4');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput4 = document.querySelector('#emotieinput4');
  const ervaringInput4 = document.querySelector('#ervaringinput4');
  const emotieTekstElement4 = document.querySelector('#emotietekstp4');
  const emotieTekstElementtekst4 = document.querySelector('.emotietekst4');
  const ervaringTekstElement4 = document.querySelector('#ervaringtekstp4'); 

  if (emotieInput4.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput4.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie4 = emotieInput4.value.trim();
  const ervaring4 = ervaringInput4.value.trim();

  
  
 
  if (emotieTekstElement4) {
    emotieTekstElement4.textContent = emotie4;
    emotieTekstElementtekst4.style.display = 'block'; 
  }


  if (ervaringTekstElement4) {
    ervaringTekstElement4.textContent = ervaring4;
    ervaringTekstElement4.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie4', emotie4);


  localStorage.setItem('ervaring4', ervaring4);

  const ervaringen4 = JSON.parse(localStorage.getItem('ervaringen4')) || [];
  ervaringen4.push({ emotie4, ervaring4 });
  localStorage.setItem('ervaringen4', JSON.stringify(ervaringen4));

  voegErvaringToeAanPagina(emotie4, ervaring4);

  emotieInput4.value = '';
  ervaringInput4.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput4 = document.querySelector('#naaminput4');
  const reactieInput4 = document.querySelector('#reactieinput4');

  if (naamInput4.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput4.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam4 = naamInput4.value.trim();
  const reactie4 = reactieInput4.value.trim();

  const reacties4 = JSON.parse(localStorage.getItem('reacties4')) || [];
  reacties4.push({ naam4, reactie4 });
  localStorage.setItem('reacties4', JSON.stringify(reacties4));

  voegReactieToeAanPagina(naam4, reactie4);

  naamInput4.value = '';
  reactieInput4.value = '';
});


function voegErvaringToeAanPagina(emotie4, ervaring4) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst4.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer4 = document.querySelector('#reactieLijst4');

  const container = document.createElement('div');
  container.classList.add('reactietekst4');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer4.appendChild(container);
  reactielijstContainer4.style.display = 'flex';
}

