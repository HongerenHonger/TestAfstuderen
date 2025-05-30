document.addEventListener('DOMContentLoaded', function () {
  const ervaringen3 = JSON.parse(localStorage.getItem('ervaringen3')) || [];
  const emotieTekstElement3 = document.querySelector('#emotietekstp3');
  const emotieTekstElementtekst3 = document.querySelector('.emotietekst3');
  const ervaringTekstElementtekst3 = document.querySelector('.ervaringtekst3');
  const storedEmotie3 = localStorage.getItem('emotie3');
  const storedErvaring3 = localStorage.getItem('ervaring3');

  
  if (storedEmotie3 && emotieTekstElement3) {
    emotieTekstElement3.textContent = storedEmotie3;
    emotieTekstElementtekst3.style.display = 'block';
  }

  if (storedErvaring3 && ervaringTekstElementtekst3) {
    ervaringTekstElementtekst3.textContent = storedErvaring3;
    ervaringTekstElementtekst3.style.display = 'block';
  }


  ervaringen3.forEach(item => {
    voegErvaringToeAanPagina(item.emotie3, item.ervaring3);
  });

  const reactielijstContainer3 = document.querySelector('#reactieLijst3');
  const reacties3 = JSON.parse(localStorage.getItem('reacties3')) || [];

  reacties3.forEach(item => {
    voegReactieToeAanPagina(item.naam3, item.reactie3);
  });
});


const emotieDiv = document.querySelector('.emotie3'); 
const ervaringDiv = document.querySelector('.ervaring3');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam3');
const reactieDiv = document.querySelector('.reactie3');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst3 = document.querySelector('.ervaringtekst3');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput3 = document.querySelector('#emotieinput3');
  const ervaringInput3 = document.querySelector('#ervaringinput3');
  const emotieTekstElement3 = document.querySelector('#emotietekstp3');
  const emotieTekstElementtekst3 = document.querySelector('.emotietekst3');
  const ervaringTekstElement3 = document.querySelector('#ervaringtekstp3'); 

  if (emotieInput3.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput3.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie3 = emotieInput3.value.trim();
  const ervaring3 = ervaringInput3.value.trim();

  
  
 
  if (emotieTekstElement3) {
    emotieTekstElement3.textContent = emotie3;
    emotieTekstElementtekst3.style.display = 'block'; 
  }


  if (ervaringTekstElement3) {
    ervaringTekstElement3.textContent = ervaring3;
    ervaringTekstElement3.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie3', emotie3);


  localStorage.setItem('ervaring3', ervaring3);

  const ervaringen3 = JSON.parse(localStorage.getItem('ervaringen3')) || [];
  ervaringen3.push({ emotie3, ervaring3 });
  localStorage.setItem('ervaringen3', JSON.stringify(ervaringen3));

  voegErvaringToeAanPagina(emotie3, ervaring3);

  emotieInput3.value = '';
  ervaringInput3.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput3 = document.querySelector('#naaminput3');
  const reactieInput3 = document.querySelector('#reactieinput3');

  if (naamInput3.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput3.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam3 = naamInput3.value.trim();
  const reactie3 = reactieInput3.value.trim();

  const reacties3 = JSON.parse(localStorage.getItem('reacties3')) || [];
  reacties3.push({ naam3, reactie3 });
  localStorage.setItem('reacties3', JSON.stringify(reacties3));

  voegReactieToeAanPagina(naam3, reactie3);

  naamInput3.value = '';
  reactieInput3.value = '';
});


function voegErvaringToeAanPagina(emotie3, ervaring3) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst3.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer3 = document.querySelector('#reactieLijst3');

  const container = document.createElement('div');
  container.classList.add('reactietekst3');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer3.appendChild(container);
  reactielijstContainer3.style.display = 'flex';
}

