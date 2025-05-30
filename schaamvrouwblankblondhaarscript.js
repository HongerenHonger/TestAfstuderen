document.addEventListener('DOMContentLoaded', function () {
  const ervaringen21 = JSON.parse(localStorage.getItem('ervaringen21')) || [];
  const emotieTekstElement21 = document.querySelector('#emotietekstp21');
  const emotieTekstElementtekst21 = document.querySelector('.emotietekst21');
  const ervaringTekstElementtekst21 = document.querySelector('.ervaringtekst21');
  const storedEmotie21 = localStorage.getItem('emotie21');
  const storedErvaring21 = localStorage.getItem('ervaring21');

  
  if (storedEmotie21 && emotieTekstElement21) {
    emotieTekstElement21.textContent = storedEmotie21;
    emotieTekstElementtekst21.style.display = 'block';
  }

  if (storedErvaring21 && ervaringTekstElementtekst21) {
    ervaringTekstElementtekst21.textContent = storedErvaring21;
    ervaringTekstElementtekst21.style.display = 'block';
  }


  ervaringen21.forEach(item => {
    voegErvaringToeAanPagina(item.emotie21, item.ervaring21);
  });

  const reactielijstContainer21 = document.querySelector('#reactieLijst21');
  const reacties21 = JSON.parse(localStorage.getItem('reacties21')) || [];

  reacties21.forEach(item => {
    voegReactieToeAanPagina(item.naam21, item.reactie21);
  });
});


const emotieDiv = document.querySelector('.emotie21'); 
const ervaringDiv = document.querySelector('.ervaring21');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam21');
const reactieDiv = document.querySelector('.reactie21');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst21 = document.querySelector('.ervaringtekst21');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput21 = document.querySelector('#emotieinput21');
  const ervaringInput21 = document.querySelector('#ervaringinput21');
  const emotieTekstElement21 = document.querySelector('#emotietekstp21');
  const emotieTekstElementtekst21 = document.querySelector('.emotietekst21');
  const ervaringTekstElement21 = document.querySelector('#ervaringtekstp21'); 

  if (emotieInput21.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput21.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie21 = emotieInput21.value.trim();
  const ervaring21 = ervaringInput21.value.trim();

  
  
 
  if (emotieTekstElement21) {
    emotieTekstElement21.textContent = emotie21;
    emotieTekstElementtekst21.style.display = 'block'; 
  }


  if (ervaringTekstElement21) {
    ervaringTekstElement21.textContent = ervaring21;
    ervaringTekstElement21.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie21', emotie21);


  localStorage.setItem('ervaring21', ervaring21);

  const ervaringen21 = JSON.parse(localStorage.getItem('ervaringen21')) || [];
  ervaringen21.push({ emotie21, ervaring21 });
  localStorage.setItem('ervaringen21', JSON.stringify(ervaringen21));

  voegErvaringToeAanPagina(emotie21, ervaring21);

  emotieInput21.value = '';
  ervaringInput21.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput21 = document.querySelector('#naaminput21');
  const reactieInput21 = document.querySelector('#reactieinput21');

  if (naamInput21.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput21.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam21 = naamInput21.value.trim();
  const reactie21 = reactieInput21.value.trim();

  const reacties21 = JSON.parse(localStorage.getItem('reacties21')) || [];
  reacties21.push({ naam21, reactie21 });
  localStorage.setItem('reacties21', JSON.stringify(reacties21));

  voegReactieToeAanPagina(naam21, reactie21);

  naamInput21.value = '';
  reactieInput21.value = '';
});


function voegErvaringToeAanPagina(emotie21, ervaring21) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst21.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer21 = document.querySelector('#reactieLijst21');

  const container = document.createElement('div');
  container.classList.add('reactietekst21');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer21.appendChild(container);
  reactielijstContainer21.style.display = 'flex';
}

