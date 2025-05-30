document.addEventListener('DOMContentLoaded', function () {
  const ervaringen1 = JSON.parse(localStorage.getItem('ervaringen1')) || [];
  const emotieTekstElement1 = document.querySelector('#emotietekstp1');
  const emotieTekstElementtekst1 = document.querySelector('.emotietekst1');
  const ervaringTekstElementtekst1 = document.querySelector('.ervaringtekst1');
  const storedEmotie1 = localStorage.getItem('emotie1');
  const storedErvaring1 = localStorage.getItem('ervaring1');

  
  if (storedEmotie1 && emotieTekstElement1) {
    emotieTekstElement1.textContent = storedEmotie1;
    emotieTekstElementtekst1.style.display = 'block';
  }

  if (storedErvaring1 && ervaringTekstElementtekst1) {
    ervaringTekstElementtekst1.textContent = storedErvaring1;
    ervaringTekstElementtekst1.style.display = 'block';
  }


  ervaringen1.forEach(item => {
    voegErvaringToeAanPagina(item.emotie1, item.ervaring1);
  });

  const reactielijstContainer1 = document.querySelector('#reactieLijst1');
  const reacties1 = JSON.parse(localStorage.getItem('reacties1')) || [];

  reacties1.forEach(item => {
    voegReactieToeAanPagina(item.naam1, item.reactie1);
  });
});


const emotieDiv = document.querySelector('.emotie1'); 
const ervaringDiv = document.querySelector('.ervaring1');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam1');
const reactieDiv = document.querySelector('.reactie1');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst1 = document.querySelector('.ervaringtekst1');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput1 = document.querySelector('#emotieinput1');
  const ervaringInput1 = document.querySelector('#ervaringinput1');
  const emotieTekstElement1 = document.querySelector('#emotietekstp1');
  const emotieTekstElementtekst1 = document.querySelector('.emotietekst1');
  const ervaringTekstElement1 = document.querySelector('#ervaringtekstp1'); 

  if (emotieInput1.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput1.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie1 = emotieInput1.value.trim();
  const ervaring1 = ervaringInput1.value.trim();

  
  
 
  if (emotieTekstElement1) {
    emotieTekstElement1.textContent = emotie1;
    emotieTekstElementtekst1.style.display = 'block'; 
  }


  if (ervaringTekstElement1) {
    ervaringTekstElement1.textContent = ervaring1;
    ervaringTekstElement1.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie1', emotie1);


  localStorage.setItem('ervaring1', ervaring1);

  const ervaringen1 = JSON.parse(localStorage.getItem('ervaringen1')) || [];
  ervaringen1.push({ emotie1, ervaring1 });
  localStorage.setItem('ervaringen1', JSON.stringify(ervaringen1));

  voegErvaringToeAanPagina(emotie1, ervaring1);

  emotieInput1.value = '';
  ervaringInput1.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput1 = document.querySelector('#naaminput1');
  const reactieInput1 = document.querySelector('#reactieinput1');

  if (naamInput1.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput1.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam1 = naamInput1.value.trim();
  const reactie1 = reactieInput1.value.trim();

  const reacties1 = JSON.parse(localStorage.getItem('reacties1')) || [];
  reacties1.push({ naam1, reactie1 });
  localStorage.setItem('reacties1', JSON.stringify(reacties1));

  voegReactieToeAanPagina(naam1, reactie1);

  naamInput1.value = '';
  reactieInput1.value = '';
});


function voegErvaringToeAanPagina(emotie1, ervaring1) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst1.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer1 = document.querySelector('#reactieLijst1');

  const container = document.createElement('div');
  container.classList.add('reactietekst1');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer1.appendChild(container);
  reactielijstContainer1.style.display = 'flex';
}

